import { Injectable } from '@angular/core';
import { Resume } from '../../../core/models/resume.model';
import { downloadTextFile, slugify } from '../../../core/utils/download.util';

/** Serializes and downloads the resume as JSON. */
@Injectable({ providedIn: 'root' })
export class ResumeExportService {
  toJsonString(resume: Resume): string {
    return JSON.stringify(resume, null, 2);
  }

  downloadJson(resume: Resume): void {
    const fileName = `${slugify(resume.basics.fullName, 'resume')}.json`;
    downloadTextFile(fileName, this.toJsonString(resume));
  }
}
