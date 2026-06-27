import { Injectable } from '@angular/core';
import { Resume } from '../../../core/models/resume.model';

/** Serializes and downloads the resume; delegates PDF to the browser print pipeline. */
@Injectable({ providedIn: 'root' })
export class ResumeExportService {
  toJsonString(resume: Resume): string {
    return JSON.stringify(resume, null, 2);
  }

  downloadJson(resume: Resume): void {
    const fileName = this.fileNameFor(resume, 'json');
    const blob = new Blob([this.toJsonString(resume)], {
      type: 'application/json',
    });
    this.triggerDownload(blob, fileName);
  }

  /** Print-to-PDF using the print stylesheet (.cv-document is the only visible element). */
  exportPdf(): void {
    window.print();
  }

  private fileNameFor(resume: Resume, extension: string): string {
    const slug = resume.basics.fullName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    return `${slug || 'resume'}.${extension}`;
  }

  private triggerDownload(blob: Blob, fileName: string): void {
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = fileName;
    anchor.click();
    URL.revokeObjectURL(url);
  }
}
