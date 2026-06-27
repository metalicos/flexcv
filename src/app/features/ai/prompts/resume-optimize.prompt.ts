/** Prompt: rewrite the resume to target a specific job description, returning Resume JSON. */
export function buildOptimizePrompt(resumeJson: string, jobDescription: string): string {
  return `You are an expert technical resume writer. Rewrite the candidate's resume to target
the job description below, while staying truthful — never invent experience, employers, or skills.

Allowed changes:
- Reorder and reword the summary and responsibilities to emphasize relevant experience.
- Promote skills the job asks for that the candidate genuinely has.
- Adjust the title only if the candidate's experience clearly supports it.

Return ONLY a JSON object using EXACTLY the same schema as the input resume. No markdown, no commentary.

CURRENT RESUME JSON:
${resumeJson}

TARGET JOB DESCRIPTION:
"""
${jobDescription}
"""`;
}
