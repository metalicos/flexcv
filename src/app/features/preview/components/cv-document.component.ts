import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Resume } from '../../../core/models/resume.model';

interface ContactRow {
  readonly icon: string;
  readonly value: string;
}

/** Presentational rendering of a Resume, matching the reference CV layout. */
@Component({
  selector: 'app-cv-document',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  templateUrl: './cv-document.component.html',
  styleUrl: './cv-document.component.scss',
})
export class CvDocumentComponent {
  readonly resume = input.required<Resume>();

  protected contactRows(resume: Resume): ContactRow[] {
    const c = resume.basics.contact;
    const rows: ContactRow[] = [];
    if (c.location) rows.push({ icon: 'place', value: c.location });
    if (c.github) rows.push({ icon: 'code', value: c.github });
    if (c.email) rows.push({ icon: 'mail', value: c.email });
    if (c.linkedin) rows.push({ icon: 'link', value: c.linkedin });
    if (c.phone) rows.push({ icon: 'call', value: c.phone });
    if (c.website) rows.push({ icon: 'language', value: c.website });
    if (c.birthDate) rows.push({ icon: 'cake', value: c.birthDate });
    return rows;
  }

  protected period(start?: string, end?: string): string {
    if (start && end) return `${start} - ${end}`;
    return start ?? end ?? '';
  }
}
