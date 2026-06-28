import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  linkedSignal,
  output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Resume } from '../../../core/models/resume.model';
import { I18nService } from '../../../core/i18n/i18n.service';
import { validateResume } from '../validators/resume.validator';

/** Raw JSON editor for the current resume with schema validation on apply. */
@Component({
  selector: 'app-cv-json-editor',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './cv-json-editor.component.html',
  styleUrl: './cv-json-editor.component.scss',
})
export class CvJsonEditorComponent {
  private readonly snackBar = inject(MatSnackBar);
  protected readonly i18n = inject(I18nService);

  readonly resume = input.required<Resume>();
  readonly applied = output<Resume>();

  protected readonly draft = linkedSignal(() => JSON.stringify(this.resume(), null, 2));

  protected apply(): void {
    let parsed: unknown;
    try {
      parsed = JSON.parse(this.draft());
    } catch {
      this.snackBar.open(this.i18n.t('cv.editor.invalidJson'), 'Dismiss', { duration: 5000 });
      return;
    }
    try {
      this.applied.emit(validateResume(parsed));
      this.snackBar.open(this.i18n.t('cv.editor.applied'), 'OK', { duration: 2500 });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : this.i18n.t('cv.editor.invalidJson');
      this.snackBar.open(message, 'Dismiss', { duration: 5000 });
    }
  }
}
