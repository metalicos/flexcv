/** Prompt: talking points for presenting the candidate to a technical interviewer. */
export function buildTechnicalPitchPrompt(
  resumeJson: string,
  jobDescription: string,
): string {
  return `Based on the resume and the job description, write talking points the candidate can
use in a TECHNICAL interview. Emphasize concrete architecture decisions, technologies, trade-offs,
metrics, and depth that map to the job's stack. Suggest strong examples from the candidate's history.

Return ONLY this JSON (no markdown):
{ "points": string[] }   // 5-8 concrete, technical talking points

RESUME JSON:
${resumeJson}

JOB DESCRIPTION:
"""
${jobDescription}
"""`;
}
