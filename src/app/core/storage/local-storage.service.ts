import { Injectable } from '@angular/core';

/**
 * Thin, typed wrapper around window.localStorage.
 * Isolated so the rest of the app never touches the Web Storage API directly.
 */
@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  read(key: string): string | null {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }

  readJson<T>(key: string): T | null {
    const raw = this.read(key);
    if (raw === null) {
      return null;
    }
    try {
      return JSON.parse(raw) as T;
    } catch {
      return null;
    }
  }

  write(key: string, value: string): void {
    try {
      localStorage.setItem(key, value);
    } catch {
      // Storage may be unavailable (private mode / quota). Fail silently for reads,
      // callers that require persistence should surface their own message.
    }
  }

  writeJson<T>(key: string, value: T): void {
    this.write(key, JSON.stringify(value));
  }

  remove(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch {
      // no-op
    }
  }
}
