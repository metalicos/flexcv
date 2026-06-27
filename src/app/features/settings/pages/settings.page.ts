import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SettingsService } from '../../../core/config/settings.service';
import { EXTERNAL_URLS, GEMINI } from '../../../core/config/app-config';

@Component({
  selector: 'app-settings-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './settings.page.html',
  styleUrl: './settings.page.scss',
})
export class SettingsPage {
  private readonly settings = inject(SettingsService);
  private readonly snackBar = inject(MatSnackBar);

  protected readonly models = GEMINI.availableModels;
  protected readonly hasApiKey = this.settings.hasApiKey;

  protected readonly keyInput = signal(this.settings.apiKey());
  protected readonly modelInput = signal(this.settings.model());
  protected readonly revealKey = signal(false);

  protected toggleReveal(): void {
    this.revealKey.update((v) => !v);
  }

  protected save(): void {
    this.settings.setApiKey(this.keyInput());
    this.settings.setModel(this.modelInput());
    this.snackBar.open('Settings saved.', 'OK', { duration: 2500 });
  }

  protected clearKey(): void {
    this.settings.clearApiKey();
    this.keyInput.set('');
    this.snackBar.open('API key removed.', 'OK', { duration: 2500 });
  }

  protected openApiKeyPage(): void {
    window.open(EXTERNAL_URLS.geminiApiKeys, '_blank', 'noopener');
  }
}
