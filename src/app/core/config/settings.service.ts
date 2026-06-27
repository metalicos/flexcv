import { Injectable, computed, inject, signal } from '@angular/core';
import { LocalStorageService } from '../storage/local-storage.service';
import { GEMINI, STORAGE_KEYS } from './app-config';

/** Holds user configuration (Gemini API key + model), persisted to localStorage. */
@Injectable({ providedIn: 'root' })
export class SettingsService {
  private readonly storage = inject(LocalStorageService);

  private readonly apiKeySig = signal<string>(
    this.storage.read(STORAGE_KEYS.geminiApiKey) ?? '',
  );
  private readonly modelSig = signal<string>(
    this.storage.read(STORAGE_KEYS.geminiModel) ?? GEMINI.defaultModel,
  );

  readonly apiKey = this.apiKeySig.asReadonly();
  readonly model = this.modelSig.asReadonly();
  readonly hasApiKey = computed(() => this.apiKeySig().trim().length > 0);

  setApiKey(value: string): void {
    const trimmed = value.trim();
    this.apiKeySig.set(trimmed);
    this.storage.write(STORAGE_KEYS.geminiApiKey, trimmed);
  }

  setModel(value: string): void {
    this.modelSig.set(value);
    this.storage.write(STORAGE_KEYS.geminiModel, value);
  }

  clearApiKey(): void {
    this.apiKeySig.set('');
    this.storage.remove(STORAGE_KEYS.geminiApiKey);
  }
}
