/** Prompt: 10 interview questions the candidate should prepare for, based on the vacancy. */
export function buildQuestionsPrompt(
  resumeJson: string,
  jobDescription: string,
  language: string,
): string {
  return `Based on the candidate's resume and the job description, write the 10 most likely
interview questions this candidate will be asked for this position. Mix technical, experience and
behavioural questions that probe the candidate's actual background against the role.

Return ONLY this JSON (no markdown):
{ "points": string[] }   // exactly 10 questions written in ${language}

RESUME JSON:
${resumeJson}

JOB DESCRIPTION:
"""
${jobDescription}
"""`;
}
