import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Resume } from '../../../core/models/resume.model';
import { SettingsService } from '../../../core/config/settings.service';
import { Language } from '../../../core/i18n/translations';

interface ContactRow {
  readonly icon: string;
  readonly value: string;
}

interface CvLabels {
  readonly summary: string;
  readonly languages: string;
  readonly skills: string;
  readonly education: string;
  readonly employment: string;
  readonly specialty: string;
  readonly project: string;
  readonly description: string;
}

/** Section headings and inline labels follow the configured CV language. */
const CV_LABELS: Record<Language, CvLabels> = {
  en: {
    summary: 'Summary',
    languages: 'Languages',
    skills: 'Technical Skills',
    education: 'Education',
    employment: 'Employment',
    specialty: 'Specialty',
    project: 'Project',
    description: 'Description',
  },
  uk: {
    summary: 'Профіль',
    languages: 'Мови',
    skills: 'Технічні навички',
    education: 'Освіта',
    employment: 'Досвід роботи',
    specialty: 'Спеціальність',
    project: 'Проєкт',
    description: 'Опис',
  },
};

/** Presentational rendering of a Resume, matching the reference CV layout. */
@Component({
  selector: 'app-cv-document',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  templateUrl: './cv-document.component.html',
  styleUrl: './cv-document.component.scss',
})
export class CvDocumentComponent {
  private readonly settings = inject(SettingsService);

  readonly resume = input.required<Resume>();
  protected readonly labels = computed<CvLabels>(
    () => CV_LABELS[this.settings.cvLanguage()],
  );

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
