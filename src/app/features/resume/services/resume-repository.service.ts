import { Injectable, computed, inject, signal } from '@angular/core';
import { LocalStorageService } from '../../../core/storage/local-storage.service';
import { STORAGE_KEYS } from '../../../core/config/app-config';
import { Resume } from '../../../core/models/resume.model';
import { validateResume } from '../validators/resume.validator';

/**
 * Single source of truth for the current resume.
 * Exposes read-only signals; mutations always go through explicit methods.
 */
@Injectable({ providedIn: 'root' })
export class ResumeRepository {
  private readonly storage = inject(LocalStorageService);
  private readonly resumeSig = signal<Resume | null>(this.restore());

  readonly resume = this.resumeSig.asReadonly();
  readonly hasResume = computed(() => this.resumeSig() !== null);

  set(resume: Resume): void {
    this.resumeSig.set(resume);
    this.storage.writeJson(STORAGE_KEYS.resume, resume);
  }

  clear(): void {
    this.resumeSig.set(null);
    this.storage.remove(STORAGE_KEYS.resume);
  }

  private restore(): Resume | null {
    const raw = this.storage.readJson<unknown>(STORAGE_KEYS.resume);
    if (raw === null) {
      return null;
    }
    try {
      return validateResume(raw);
    } catch {
      return null;
    }
  }
}
