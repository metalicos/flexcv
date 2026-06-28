/** Prompt: improve the Technical Skills section using CV data. */
export function buildImproveSkillsPrompt(resumeJson: string, language: string): string {
  return `You are an expert resume writer. Improve the candidate's TECHNICAL SKILLS: better grouping,
clearer categories, removing duplicates, ordering by relevance and seniority. Use only skills the
candidate already lists or clearly demonstrates in their experience.

Reply in ${language} as plain text grouped by category (Category: skill, skill, ...). No markdown headings.

RESUME JSON:
${resumeJson}`;
}
