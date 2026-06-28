import { Injectable, inject, signal } from '@angular/core';
import { LocalStorageService } from '../storage/local-storage.service';
import { STORAGE_KEYS } from '../config/app-config';
import { Language, TRANSLATIONS, TranslationKey } from './translations';

const DEFAULT_INTERFACE_LANGUAGE: Language = 'uk';

/** Owns the interface language and resolves translation keys reactively. */
@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly storage = inject(LocalStorageService);
  private readonly localeSig = signal<Language>(this.restore());

  readonly locale = this.localeSig.asReadonly();

  /** Reactive translator: reading the locale signal makes templates update on change. */
  readonly t = (key: TranslationKey): string =>
    TRANSLATIONS[this.localeSig()][key] ?? key;

  setLocale(language: Language): void {
    this.localeSig.set(language);
    this.storage.write(STORAGE_KEYS.interfaceLanguage, language);
  }

  private restore(): Language {
    const stored = this.storage.read(STORAGE_KEYS.interfaceLanguage);
    return stored === 'en' || stored === 'uk' ? stored : DEFAULT_INTERFACE_LANGUAGE;
  }
}
