/** Prompt: compare resume against a job description, producing match / mismatch lists. */
export function buildMatchAnalysisPrompt(
  resumeJson: string,
  jobDescription: string,
  language: string,
): string {
  return `Compare the candidate's resume against the job description. Focus on technologies,
stack, experience level, and domain.

Return ONLY this JSON (no markdown):
{
  "matches": string[],     // requirements the candidate clearly meets
  "mismatches": string[]   // requirements missing, weak, or unproven
}

Each item should be a short, concrete phrase written in ${language}. Be honest and specific.

RESUME JSON:
${resumeJson}

JOB DESCRIPTION:
"""
${jobDescription}
"""`;
}
