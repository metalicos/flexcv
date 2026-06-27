/** Prompt: talking points for presenting the candidate to a recruiter. */
export function buildRecruiterPitchPrompt(
  resumeJson: string,
  jobDescription: string,
): string {
  return `Based on the resume and the job description, write talking points the candidate can
use to present themselves to a RECRUITER (non-technical screening). Emphasize impact, seniority,
domain fit, soft skills, and motivation — keep it business-friendly.

Return ONLY this JSON (no markdown):
{ "points": string[] }   // 5-8 concise, first-person-ready talking points

RESUME JSON:
${resumeJson}

JOB DESCRIPTION:
"""
${jobDescription}
"""`;
}
