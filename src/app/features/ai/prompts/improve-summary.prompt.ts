/** Prompt: improve the resume Summary using the rest of the CV. */
export function buildImproveSummaryPrompt(resumeJson: string, language: string): string {
  return `You are an expert resume writer. Rewrite and improve the candidate's professional SUMMARY
using the facts already present in the resume (experience, skills, achievements). Make it concise,
impactful and quantified where possible. Stay truthful.

Reply in ${language} with the improved summary as plain text only (no markdown, no quotes, no preamble).

RESUME JSON:
${resumeJson}`;
}
