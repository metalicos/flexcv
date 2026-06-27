import {
  Resume,
  ResumeEducation,
  ResumeEmployment,
  ResumeLanguage,
  ResumeSkillGroup,
} from '../../../core/models/resume.model';

export class ResumeValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ResumeValidationError';
  }
}

type Json = Record<string, unknown>;

function isObject(value: unknown): value is Json {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function str(value: unknown): string {
  return typeof value === 'string' ? value : '';
}

function strArray(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((v): v is string => typeof v === 'string') : [];
}

function array(value: unknown): unknown[] {
  return Array.isArray(value) ? value : [];
}

function mapLanguages(value: unknown): ResumeLanguage[] {
  return array(value)
    .filter(isObject)
    .map((l) => ({ name: str(l['name']), level: str(l['level']) }))
    .filter((l) => l.name.length > 0);
}

function mapSkills(value: unknown): ResumeSkillGroup[] {
  return array(value)
    .filter(isObject)
    .map((g) => ({ category: str(g['category']), skills: strArray(g['skills']) }))
    .filter((g) => g.skills.length > 0);
}

function mapEducation(value: unknown): ResumeEducation[] {
  return array(value)
    .filter(isObject)
    .map((e) => ({
      degree: str(e['degree']),
      institution: str(e['institution']),
      specialty: str(e['specialty']) || undefined,
      location: str(e['location']) || undefined,
      startDate: str(e['startDate']) || undefined,
      endDate: str(e['endDate']) || undefined,
    }))
    .filter((e) => e.degree.length > 0 || e.institution.length > 0);
}

function mapEmployment(value: unknown): ResumeEmployment[] {
  return array(value)
    .filter(isObject)
    .map((j) => ({
      role: str(j['role']),
      company: str(j['company']),
      project: str(j['project']) || undefined,
      description: str(j['description']) || undefined,
      startDate: str(j['startDate']) || undefined,
      endDate: str(j['endDate']) || undefined,
      responsibilities: strArray(j['responsibilities']),
    }))
    .filter((j) => j.role.length > 0 || j.company.length > 0);
}

/** Validates and normalizes unknown input into a typed Resume. Throws on invalid shape. */
export function validateResume(input: unknown): Resume {
  if (!isObject(input)) {
    throw new ResumeValidationError('Resume JSON must be an object.');
  }

  const basics = isObject(input['basics']) ? input['basics'] : {};
  const contact = isObject(basics['contact']) ? basics['contact'] : {};

  const fullName = str(basics['fullName']);
  if (!fullName) {
    throw new ResumeValidationError('Resume must include "basics.fullName".');
  }

  return {
    basics: {
      fullName,
      title: str(basics['title']),
      summary: str(basics['summary']),
      contact: {
        location: str(contact['location']) || undefined,
        github: str(contact['github']) || undefined,
        email: str(contact['email']) || undefined,
        linkedin: str(contact['linkedin']) || undefined,
        phone: str(contact['phone']) || undefined,
        website: str(contact['website']) || undefined,
        birthDate: str(contact['birthDate']) || undefined,
      },
    },
    languages: mapLanguages(input['languages']),
    skills: mapSkills(input['skills']),
    education: mapEducation(input['education']),
    employment: mapEmployment(input['employment']),
  };
}
