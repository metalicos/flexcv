import { Injectable, computed, inject, signal } from '@angular/core';
import { LocalStorageService } from '../storage/local-storage.service';
import { Language } from '../i18n/translations';
import { GEMINI, STORAGE_KEYS } from './app-config';

const DEFAULT_CV_LANGUAGE: Language = 'en';

/** Holds user configuration (Gemini API key, model, CV language), persisted to localStorage. */
@Injectable({ providedIn: 'root' })
export class SettingsService {
  private readonly storage = inject(LocalStorageService);

  private readonly apiKeySig = signal<string>(
    this.storage.read(STORAGE_KEYS.geminiApiKey) ?? '',
  );
  private readonly modelSig = signal<string>(
    this.storage.read(STORAGE_KEYS.geminiModel) ?? GEMINI.defaultModel,
  );
  private readonly cvLanguageSig = signal<Language>(this.restoreCvLanguage());

  readonly apiKey = this.apiKeySig.asReadonly();
  readonly model = this.modelSig.asReadonly();
  readonly cvLanguage = this.cvLanguageSig.asReadonly();
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

  setCvLanguage(language: Language): void {
    this.cvLanguageSig.set(language);
    this.storage.write(STORAGE_KEYS.cvLanguage, language);
  }

  clearApiKey(): void {
    this.apiKeySig.set('');
    this.storage.remove(STORAGE_KEYS.geminiApiKey);
  }

  private restoreCvLanguage(): Language {
    const stored = this.storage.read(STORAGE_KEYS.cvLanguage);
    return stored === 'en' || stored === 'uk' ? stored : DEFAULT_CV_LANGUAGE;
  }
}
