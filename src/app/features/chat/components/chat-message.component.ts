import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Resume } from '../../../core/models/resume.model';
import { I18nService } from '../../../core/i18n/i18n.service';
import { ResumeRepository } from '../../resume/services/resume-repository.service';
import { ResumeExportService } from '../../export/services/resume-export.service';
import { CvDocumentComponent } from '../../preview/components/cv-document.component';
import { ChatMessage } from '../models/chat.model';

/** Renders a single chat message according to its structured content type. */
@Component({
  selector: 'app-chat-message',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatCardModule, MatButtonModule, MatIconModule, CvDocumentComponent],
  templateUrl: './chat-message.component.html',
  styleUrl: './chat-message.component.scss',
})
export class ChatMessageComponent {
  private readonly repository = inject(ResumeRepository);
  private readonly exporter = inject(ResumeExportService);
  private readonly snackBar = inject(MatSnackBar);
  protected readonly i18n = inject(I18nService);

  readonly message = input.required<ChatMessage>();

  protected applyResume(resume: Resume): void {
    this.repository.set(resume);
    this.snackBar.open(this.i18n.t('chatmsg.savedAsCv'), 'OK', { duration: 3000 });
  }

  protected downloadResume(resume: Resume): void {
    this.exporter.downloadJson(resume);
  }
}
