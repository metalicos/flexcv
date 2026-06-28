import {
  ChangeDetectionStrategy,
  Component,
  inject,
  output,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { Resume } from '../../../core/models/resume.model';
import { IMPORT } from '../../../core/config/app-config';
import { I18nService } from '../../../core/i18n/i18n.service';
import { SAMPLE_RESUME } from '../../resume/data/sample-resume';
import { ResumeImportService } from '../services/resume-import.service';

@Component({
  selector: 'app-import-panel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
  ],
  templateUrl: './import-panel.component.html',
  styleUrl: './import-panel.component.scss',
})
export class ImportPanelComponent {
  private readonly importService = inject(ResumeImportService);
  private readonly snackBar = inject(MatSnackBar);
  protected readonly i18n = inject(I18nService);

  readonly imported = output<Resume>();

  protected readonly accept = IMPORT.acceptedExtensions.join(',');
  protected readonly urlInput = signal('');
  protected readonly textInput = signal('');
  protected readonly busy = signal(false);

  protected async onFileSelected(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = '';
    if (!file) {
      return;
    }
    if (file.size > IMPORT.maxFileSizeBytes) {
      this.fail(this.i18n.t('import.tooLarge'));
      return;
    }
    await this.run(() => this.importService.fromFile(file));
  }

  protected async importUrl(): Promise<void> {
    if (!this.urlInput().trim()) {
      this.fail(this.i18n.t('import.enterUrl'));
      return;
    }
    await this.run(() => this.importService.fromUrl(this.urlInput()));
  }

  protected async importText(): Promise<void> {
    if (!this.textInput().trim()) {
      this.fail(this.i18n.t('import.pasteText'));
      return;
    }
    await this.run(() => this.importService.fromText(this.textInput()));
  }

  protected loadSample(): void {
    this.emit(SAMPLE_RESUME);
  }

  private async run(action: () => Promise<Resume> | Resume): Promise<void> {
    this.busy.set(true);
    try {
      this.emit(await action());
    } catch (error) {
      this.fail(error instanceof Error ? error.message : 'Import failed.');
    } finally {
      this.busy.set(false);
    }
  }

  private emit(resume: Resume): void {
    this.imported.emit(resume);
    this.snackBar.open(this.i18n.t('import.imported'), 'OK', { duration: 2500 });
  }

  private fail(message: string): void {
    this.snackBar.open(message, 'Dismiss', { duration: 5000 });
  }
}
