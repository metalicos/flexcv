import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SettingsService } from '../../../core/config/settings.service';
import { ResumeRepository } from '../../resume/services/resume-repository.service';
import { ChatService } from '../services/chat.service';
import { I18nService } from '../../../core/i18n/i18n.service';
import { downloadTextFile } from '../../../core/utils/download.util';
import { ChatMessageComponent } from '../components/chat-message.component';

@Component({
  selector: 'app-chat-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    RouterLink,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    ChatMessageComponent,
  ],
  templateUrl: './chat.page.html',
  styleUrl: './chat.page.scss',
})
export class ChatPage {
  private readonly chat = inject(ChatService);
  private readonly settings = inject(SettingsService);
  private readonly repository = inject(ResumeRepository);
  protected readonly i18n = inject(I18nService);
  private readonly snackBar = inject(MatSnackBar);

  protected readonly messages = this.chat.messages;
  protected readonly busy = this.chat.busy;
  protected readonly isEmpty = this.chat.isEmpty;
  protected readonly jobDescription = this.chat.jobDescription;
  protected readonly hasResume = this.repository.hasResume;
  protected readonly hasApiKey = this.settings.hasApiKey;

  protected readonly draft = signal('');
  protected readonly hasJob = computed(() => this.jobDescription().trim().length > 0);
  protected readonly canRunTask = computed(
    () => this.hasResume() && this.hasApiKey() && this.hasJob() && !this.busy(),
  );
  protected readonly canChat = computed(
    () => this.hasResume() && this.hasApiKey() && !this.busy(),
  );

  protected optimize(): void {
    void this.chat.runOptimize();
  }

  protected match(): void {
    void this.chat.runMatch();
  }

  protected recruiter(): void {
    void this.chat.runRecruiter();
  }

  protected technical(): void {
    void this.chat.runTechnical();
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
