/** Prompt for free-form conversation about the candidate's fit for a vacancy. */
export function buildChatPrompt(
  resumeJson: string,
  jobDescription: string,
  history: string,
  question: string,
  language: string,
): string {
  return `You are a career assistant helping a candidate evaluate and present their fit for a
specific job. Treat the resume JSON and the job description as ground truth. Never invent
experience the candidate does not have. Be concise, concrete, and practical.

RESUME JSON:
${resumeJson}

JOB DESCRIPTION:
"""
${jobDescription || '(not provided yet)'}
"""

CONVERSATION SO FAR:
${history || '(empty)'}

CANDIDATE MESSAGE:
${question}

Reply in ${language}, in plain text (no markdown headings, no code fences).`;
}
