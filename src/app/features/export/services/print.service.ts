import { Injectable } from '@angular/core';

const PRINT_TARGET_CLASS = 'print-target';

/**
 * Prints a single element to PDF via the browser print dialog. The print
 * stylesheet shows only the element carrying the print-target class, so any
 * specific CV (e.g. an optimized one inside the chat) can be printed in isolation.
 */
@Injectable({ providedIn: 'root' })
export class PrintService {
  print(target: HTMLElement): void {
    target.classList.add(PRINT_TARGET_CLASS);

    const cleanup = (): void => {
      target.classList.remove(PRINT_TARGET_CLASS);
      window.removeEventListener('afterprint', cleanup);
    };
    window.addEventListener('afterprint', cleanup);

    window.print();
    // Safety net for browsers that do not fire afterprint.
    setTimeout(cleanup, 1500);
  }
}
