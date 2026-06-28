import { Resume } from '../../../core/models/resume.model';

/** Blank resume used when creating a CV from scratch. */
export const EMPTY_RESUME: Resume = {
  basics: {
    fullName: 'Your Name',
    title: '',
    summary: '',
    containsImage: false,
    contact: {},
  },
  languages: [],
  skills: [],
  education: [],
  employment: [],
};
