/** Prompt: improve the Employment section wording using CV data. */
export function buildImproveEmploymentPrompt(resumeJson: string, language: string): string {
  return `You are an expert resume writer. Improve the candidate's EMPLOYMENT section: stronger action
verbs, clearer impact, quantified results, removing redundancy. Use only facts already in the resume.

Reply in ${language} as plain text. For each role give the company and the improved bullet points.
No markdown headings, no code fences.

RESUME JSON:
${resumeJson}`;
}
