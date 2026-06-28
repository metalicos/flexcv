/** Prompt: general CV review — recommendation theses about its weak points. */
export function buildReviewPrompt(resumeJson: string, language: string): string {
  return `You are a senior technical recruiter and resume coach. Review the candidate's resume on
its own merits (NOT against any specific vacancy) and produce concise recommendation theses:
weak points, gaps, vague or unquantified achievements, weak wording, structure issues — each with a
short, actionable recommendation on how to improve it.

Return ONLY this JSON (no markdown):
{ "points": string[] }   // 6-10 short recommendation theses written in ${language}

RESUME JSON:
${resumeJson}`;
}
