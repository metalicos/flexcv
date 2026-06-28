/** Prompt: regenerate the CV with an improved structure (same truthful content). */
export function buildRestructurePrompt(resumeJson: string, language: string): string {
  return `You are an expert resume writer. Regenerate the resume with an IMPROVED STRUCTURE: better
ordering of sections and items, cleaner skill grouping, consistent and stronger wording, no
duplication. Keep all factual content truthful — do not invent experience.

Return ONLY a JSON object using EXACTLY the same schema as the input resume. No markdown, no commentary.
Write every human-readable string value in ${language} (keep proper nouns, technologies and emails unchanged).

CURRENT RESUME JSON:
${resumeJson}`;
}
