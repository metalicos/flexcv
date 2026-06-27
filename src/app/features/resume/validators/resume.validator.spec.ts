import { validateResume, ResumeValidationError } from './resume.validator';

describe('validateResume', () => {
  it('throws when fullName is missing', () => {
    expect(() => validateResume({ basics: {} })).toThrow(ResumeValidationError);
  });

  it('normalizes a minimal valid resume', () => {
    const result = validateResume({ basics: { fullName: 'Jane Doe' } });
    expect(result.basics.fullName).toBe('Jane Doe');
    expect(result.languages).toEqual([]);
    expect(result.employment).toEqual([]);
  });

  it('drops malformed skill groups and keeps valid ones', () => {
    const result = validateResume({
      basics: { fullName: 'Jane Doe' },
      skills: [{ category: 'Lang', skills: ['Java', 42] }, { category: 'Empty', skills: [] }],
    });
    expect(result.skills).toEqual([{ category: 'Lang', skills: ['Java'] }]);
  });
});
