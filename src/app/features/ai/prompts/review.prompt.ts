/** Prompt: review the CV and list weaknesses relative to the target position. */
export function buildReviewPrompt(
  resumeJson: string,
  jobDescription: string,
  language: string,
): string {
  return `You are a senior technical recruiter. Review the candidate's resume against the target
position and identify its WEAK POINTS and risks: missing skills, vague achievements, gaps, weak
wording, anything that could hurt the candidate for THIS role. Be honest and specific, and give a
short actionable fix for each weakness.

Reply in ${language} as plain text (a numbered list of weaknesses with fixes). No code fences.

RESUME JSON:
${resumeJson}

TARGET JOB DESCRIPTION:
"""
${jobDescription}
"""`;
}
