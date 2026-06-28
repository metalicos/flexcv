import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SettingsService } from '../../../core/config/settings.service';
import { I18nService } from '../../../core/i18n/i18n.service';
import { TranslationKey } from '../../../core/i18n/translations';
import { downloadTextFile } from '../../../core/utils/download.util';
import { ResumeRepository } from '../../resume/services/resume-repository.service';
import { ChatService } from '../services/chat.service';
import { ChatMessageComponent } from '../components/chat-message.component';

type ChatTaskKey =
  | 'concise'
  | 'recruiter'
  | 'technical'
  | 'questions'
  | 'improveSummary'
  | 'improveEmployment'
  | 'improveSkills'
  | 'review'
  | 'restructure';

interface ChatTaskItem {
  readonly key: ChatTaskKey;
  readonly labelKey: TranslationKey;
  readonly icon: string;
  readonly needsJd: boolean;
}

@Component({
  selector: 'app-chat-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    RouterLink,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatTooltipModule,
    ChatMessageComponent,
  ],
  templateUrl: './chat.page.html',
  styleUrl: './chat.page.scss',
})
export class ChatPage {
  private readonly chat = inject(ChatService);
  private readonly settings = inject(SettingsService);
  private readonly repository = inject(ResumeRepository);
  private readonly snackBar = inject(MatSnackBar);
  protected readonly i18n = inject(I18nService);

  protected readonly messages = this.chat.messages;
  protected readonly busy = this.chat.busy;
  protected readonly isEmpty = this.chat.isEmpty;
  protected readonly jobDescription = this.chat.jobDescription;
  protected readonly hasResume = this.repository.hasResume;
  protected readonly hasApiKey = this.settings.hasApiKey;

  protected readonly draft = signal('');
  protected readonly hasJob = computed(() => this.jobDescription().trim().length > 0);
  protected readonly canChat = computed(
    () => this.hasResume() && this.hasApiKey() && !this.busy(),
  );

  protected readonly contextTasks: readonly ChatTaskItem[] = [
    { key: 'concise', labelKey: 'chat.task.concise', icon: 'auto_fix_high', needsJd: true },
    { key: 'recruiter', labelKey: 'chat.recruiter', icon: 'record_voice_over', needsJd: true },
    { key: 'technical', labelKey: 'chat.technical', icon: 'terminal', needsJd: true },
    { key: 'questions', labelKey: 'chat.task.questions', icon: 'quiz', needsJd: true },
  ];

  protected readonly improveTasks: readonly ChatTaskItem[] = [
    { key: 'improveSummary', labelKey: 'chat.task.improveSummary', icon: 'subject', needsJd: false },
    { key: 'improveEmployment', labelKey: 'chat.task.improveEmployment', icon: 'work', needsJd: false },
    { key: 'improveSkills', labelKey: 'chat.task.improveSkills', icon: 'build', needsJd: false },
    { key: 'review', labelKey: 'chat.task.review', icon: 'rate_review', needsJd: false },
    { key: 'restructure', labelKey: 'chat.task.restructure', icon: 'dashboard_customize', needsJd: false },
  ];

  protected canRun(item: ChatTaskItem): boolean {
    return this.canChat() && (!item.needsJd || this.hasJob());
  }

  protected runTask(key: ChatTaskKey): void {
    switch (key) {
      case 'concise': void this.chat.runConcise(); return;
      case 'recruiter': void this.chat.runRecruiter(); return;
      case 'technical': void this.chat.runTechnical(); return;
      case 'questions': void this.chat.runQuestions(); return;
      case 'improveSummary': void this.chat.runImproveSummary(); return;
      case 'improveEmployment': void this.chat.runImproveEmployment(); return;
      case 'improveSkills': void this.chat.runImproveSkills(); return;
      case 'review': void this.chat.runReview(); return;
      case 'restructure': void this.chat.runRestructure(); return;
    }
  }

  protected send(): void {
    const text = this.draft().trim();
    if (!text || !this.canChat()) {
      return;
    }
    this.draft.set('');
    void this.chat.ask(text);
  }

  protected exportChat(): void {
    downloadTextFile('flexcv-chat.json', this.chat.exportJson());
    this.snackBar.open(this.i18n.t('chat.exported'), 'OK', { duration: 2500 });
  }

  protected async onImportFile(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = '';
    if (!file) {
      return;
    }
    try {
      this.chat.importJson(await file.text());
      this.snackBar.open(this.i18n.t('chat.importedOk'), 'OK', { duration: 2500 });
    } catch {
      this.snackBar.open(this.i18n.t('chat.importError'), 'Dismiss', { duration: 5000 });
    }
  }

  protected clearChat(): void {
    this.chat.clear();
  }
}
