import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Resume } from '../../../core/models/resume.model';
import { I18nService } from '../../../core/i18n/i18n.service';
import { CvShareService } from '../services/cv-share.service';

/** Generates share links: a self-contained one (embedded JSON) and one to a hosted JSON URL. */
@Component({
  selector: 'app-cv-share-panel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './cv-share-panel.component.html',
  styleUrl: './cv-share-panel.component.scss',
})
export class CvSharePanelComponent {
  private readonly share = inject(CvShareService);
  private readonly snackBar = inject(MatSnackBar);
  protected readonly i18n = inject(I18nService);

  readonly resume = input.required<Resume>();

  protected readonly embedLink = signal('');
  protected readonly jsonUrl = signal('');
  protected readonly urlLink = signal('');

  protected generateEmbed(): void {
    this.embedLink.set(this.share.buildLink(this.resume()));
  }

  protected generateUrl(): void {
    if (this.jsonUrl().trim()) {
      this.urlLink.set(this.share.buildUrlLink(this.jsonUrl()));
    }
  }

  protected async copy(value: string): Promise<void> {
    if (!value) {
      return;
    }
    try {
      await navigator.clipboard.writeText(value);
      this.snackBar.open(this.i18n.t('cv.share.copied'), 'OK', { duration: 2500 });
    } catch {
      // Clipboard may be blocked; the link stays visible for manual copying.
    }
  }
}
