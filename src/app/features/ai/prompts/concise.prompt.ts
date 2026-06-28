/** Prompt: a concise CV keeping only the experience most relevant to the vacancy. */
export function buildConcisePrompt(
  resumeJson: string,
  jobDescription: string,
  language: string,
): string {
  return `You are an expert technical resume writer. Produce a CONCISE version of the resume that
keeps ONLY the experience, skills and achievements most relevant to the job description. Drop or
shorten anything not relevant. Stay truthful — never invent anything.

Return ONLY a JSON object using EXACTLY the same schema as the input resume. No markdown, no commentary.
Write every human-readable string value in ${language} (keep proper nouns, technologies and emails unchanged).

CURRENT RESUME JSON:
${resumeJson}

TARGET JOB DESCRIPTION:
"""
${jobDescription}
"""`;
}
