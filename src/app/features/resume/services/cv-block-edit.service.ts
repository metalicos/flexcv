import { Injectable, inject } from '@angular/core';
import {
  Resume,
  ResumeEducation,
  ResumeEmployment,
  ResumeLanguage,
  ResumeSkillGroup,
} from '../../../core/models/resume.model';
import { I18nService } from '../../../core/i18n/i18n.service';
import { TranslationKey } from '../../../core/i18n/translations';
import { appendItem, removeItem, replaceItem } from '../../../core/utils/array.util';
import { CvEditIntent } from '../../preview/components/cv-document.component';
import {
  EditDialogData,
  EditDialogResult,
  EditField,
  EditFieldType,
} from '../components/edit-dialog/edit-dialog.model';

/** Builds the edit-dialog config for a CV block and applies the typed result back. */
@Injectable({ providedIn: 'root' })
export class CvBlockEditService {
  private readonly i18n = inject(I18nService);

  buildDialog(resume: Resume, intent: CvEditIntent): EditDialogData {
    switch (intent.section) {
      case 'basics':
        return this.basicsDialog(resume);
      case 'language':
        return this.languageDialog(resume, intent.index);
      case 'skill':
        return this.skillDialog(resume, intent.index);
      case 'education':
        return this.educationDialog(resume, intent.index);
      case 'employment':
        return this.employmentDialog(resume, intent.index);
    }
  }

  applyResult(resume: Resume, intent: CvEditIntent, result: EditDialogResult): Resume {
    switch (intent.section) {
      case 'basics':
        return { ...resume, basics: this.toBasics(result) };
      case 'language':
        return { ...resume, languages: this.upsert(resume.languages, intent.index, this.toLanguage(result)) };
      case 'skill':
        return { ...resume, skills: this.upsert(resume.skills, intent.index, this.toSkill(result)) };
      case 'education':
        return { ...resume, education: this.upsert(resume.education, intent.index, this.toEducation(result)) };
      case 'employment':
        return { ...resume, employment: this.upsert(resume.employment, intent.index, this.toEmployment(result)) };
    }
  }

  applyRemove(resume: Resume, intent: CvEditIntent): Resume {
    if (intent.index === undefined) {
      return resume;
    }
    switch (intent.section) {
      case 'language':
        return { ...resume, languages: removeItem(resume.languages, intent.index) };
      case 'skill':
        return { ...resume, skills: removeItem(resume.skills, intent.index) };
      case 'education':
        return { ...resume, education: removeItem(resume.education, intent.index) };
      case 'employment':
        return { ...resume, employment: removeItem(resume.employment, intent.index) };
      case 'basics':
        return resume;
    }
  }

  // --- dialog builders ---
  private basicsDialog(resume: Resume): EditDialogData {
    const b = resume.basics;
    const c = b.contact;
    return {
      title: this.i18n.t('edit.basics.title'),
      fields: [
        this.field('fullName', 'field.fullName', 'text', b.fullName),
        this.field('title', 'field.title', 'text', b.title),
        this.field('summary', 'field.summary', 'textarea', b.summary),
        this.field('imageURL', 'field.imageURL', 'text', b.imageURL ?? ''),
        this.field('location', 'field.location', 'text', c.location ?? ''),
        this.field('github', 'field.github', 'text', c.github ?? ''),
        this.field('email', 'field.email', 'text', c.email ?? ''),
        this.field('linkedin', 'field.linkedin', 'text', c.linkedin ?? ''),
        this.field('phone', 'field.phone', 'text', c.phone ?? ''),
        this.field('website', 'field.website', 'text', c.website ?? ''),
        this.field('birthDate', 'field.birthDate', 'text', c.birthDate ?? ''),
      ],
    };
  }

  private languageDialog(resume: Resume, index?: number): EditDialogData {
    const item = index !== undefined ? resume.languages[index] : undefined;
    return {
      title: this.i18n.t('edit.language.title'),
      fields: [
        this.field('name', 'field.langName', 'text', item?.name ?? ''),
        this.field('level', 'field.langLevel', 'text', item?.level ?? ''),
      ],
    };
  }

  private skillDialog(resume: Resume, index?: number): EditDialogData {
    const item = index !== undefined ? resume.skills[index] : undefined;
    return {
      title: this.i18n.t('edit.skill.title'),
      fields: [
        this.field('category', 'field.category', 'text', item?.category ?? ''),
        this.field('skills', 'field.skills', 'textarea', (item?.skills ?? []).join('\n')),
      ],
    };
  }

  private educationDialog(resume: Resume, index?: number): EditDialogData {
    const e = index !== undefined ? resume.education[index] : undefined;
    return {
      title: this.i18n.t('edit.education.title'),
      fields: [
        this.field('degree', 'field.degree', 'text', e?.degree ?? ''),
        this.field('institution', 'field.institution', 'text', e?.institution ?? ''),
        this.field('specialty', 'field.specialty', 'text', e?.specialty ?? ''),
        this.field('startDate', 'field.startDate', 'text', e?.startDate ?? ''),
        this.field('endDate', 'field.endDate', 'text', e?.endDate ?? ''),
      ],
    };
  }

  private employmentDialog(resume: Resume, index?: number): EditDialogData {
    const j = index !== undefined ? resume.employment[index] : undefined;
    return {
      title: this.i18n.t('edit.employment.title'),
      fields: [
        this.field('role', 'field.role', 'text', j?.role ?? ''),
        this.field('company', 'field.company', 'text', j?.company ?? ''),
        this.field('project', 'field.project', 'text', j?.project ?? ''),
        this.field('description', 'field.description', 'textarea', j?.description ?? ''),
        this.field('startDate', 'field.startDate', 'text', j?.startDate ?? ''),
        this.field('endDate', 'field.endDate', 'text', j?.endDate ?? ''),
        this.field('responsibilities', 'field.responsibilities', 'textarea', (j?.responsibilities ?? []).join('\n')),
      ],
    };
  }

  // --- result mappers ---
  private toBasics(r: EditDialogResult): Resume['basics'] {
    const imageURL = this.str(r, 'imageURL') || undefined;
    return {
      fullName: this.str(r, 'fullName') || 'Your Name',
      title: this.str(r, 'title'),
      summary: this.str(r, 'summary'),
      containsImage: imageURL !== undefined,
      imageURL,
      contact: {
        location: this.str(r, 'location') || undefined,
        github: this.str(r, 'github') || undefined,
        email: this.str(r, 'email') || undefined,
        linkedin: this.str(r, 'linkedin') || undefined,
        phone: this.str(r, 'phone') || undefined,
        website: this.str(r, 'website') || undefined,
        birthDate: this.str(r, 'birthDate') || undefined,
      },
    };
  }

  private toLanguage(r: EditDialogResult): ResumeLanguage {
    return { name: this.str(r, 'name'), level: this.str(r, 'level') };
  }

  private toSkill(r: EditDialogResult): ResumeSkillGroup {
    return { category: this.str(r, 'category'), skills: this.lines(r, 'skills') };
  }

  private toEducation(r: EditDialogResult): ResumeEducation {
    return {
      degree: this.str(r, 'degree'),
      institution: this.str(r, 'institution'),
      specialty: this.str(r, 'specialty') || undefined,
      startDate: this.str(r, 'startDate') || undefined,
      endDate: this.str(r, 'endDate') || undefined,
    };
  }

  private toEmployment(r: EditDialogResult): ResumeEmployment {
    return {
      role: this.str(r, 'role'),
      company: this.str(r, 'company'),
      project: this.str(r, 'project') || undefined,
      description: this.str(r, 'description') || undefined,
      startDate: this.str(r, 'startDate') || undefined,
      endDate: this.str(r, 'endDate') || undefined,
      responsibilities: this.lines(r, 'responsibilities'),
    };
  }

  // --- helpers ---
  private upsert<T>(list: readonly T[], index: number | undefined, item: T): T[] {
    return index === undefined ? appendItem(list, item) : replaceItem(list, index, item);
  }

  private field(key: string, label: TranslationKey, type: EditFieldType, value: string): EditField {
    return { key, label: this.i18n.t(label), type, value };
  }

  private str(r: EditDialogResult, key: string): string {
    return (r[key] ?? '').trim();
  }

  private lines(r: EditDialogResult, key: string): string[] {
    return (r[key] ?? '')
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line.length > 0);
  }
}
