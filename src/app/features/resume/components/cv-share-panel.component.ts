import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Resume } from '../../../core/models/resume.model';
import { I18nService } from '../../../core/i18n/i18n.service';
import { CvShareService } from '../services/cv-share.service';

/** Generates a self-contained share link that embeds the CV JSON, with copy-to-clipboard. */
@Component({
  selector: 'app-cv-share-panel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './cv-share-panel.component.html',
  styleUrl: './cv-share-panel.component.scss',
})
export class CvSharePanelComponent {
  private readonly share = inject(CvShareService);
  private readonly snackBar = inject(MatSnackBar);
  protected readonly i18n = inject(I18nService);

  readonly resume = input.required<Resume>();
  protected readonly link = signal('');

  protected generate(): void {
    this.link.set(this.share.buildLink(this.resume()));
  }

  protected async copy(): Promise<void> {
    if (!this.link()) {
      this.generate();
    }
    try {
      await navigator.clipboard.writeText(this.link());
      this.snackBar.open(this.i18n.t('cv.share.copied'), 'OK', { duration: 2500 });
    } catch {
      // Clipboard may be blocked; the link is still visible for manual copying.
    }
  }
}
