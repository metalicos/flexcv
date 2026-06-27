/**
 * Resume domain model — the single source of truth for the whole application.
 * Everything (preview, export, AI) is derived from this immutable shape.
 */

export interface ResumeContact {
  readonly location?: string;
  readonly github?: string;
  readonly email?: string;
  readonly linkedin?: string;
  readonly phone?: string;
  readonly website?: string;
  readonly birthDate?: string;
}

export interface ResumeBasics {
  readonly fullName: string;
  readonly title: string;
  readonly summary: string;
  readonly containsImage: boolean;
  readonly imageURL?: string;
  readonly contact: ResumeContact;
}

export interface ResumeLanguage {
  readonly name: string;
  readonly level: string;
}

export interface ResumeSkillGroup {
  readonly category: string;
  readonly skills: readonly string[];
}

export interface ResumeEducation {
  readonly degree: string;
  readonly institution: string;
  readonly specialty?: string;
  readonly location?: string;
  readonly startDate?: string;
  readonly endDate?: string;
}

export interface ResumeEmployment {
  readonly role: string;
  readonly company: string;
  readonly project?: string;
  readonly description?: string;
  readonly startDate?: string;
  readonly endDate?: string;
  readonly responsibilities: readonly string[];
}

export interface Resume {
  readonly basics: ResumeBasics;
  readonly languages: readonly ResumeLanguage[];
  readonly skills: readonly ResumeSkillGroup[];
  readonly education: readonly ResumeEducation[];
  readonly employment: readonly ResumeEmployment[];
}
