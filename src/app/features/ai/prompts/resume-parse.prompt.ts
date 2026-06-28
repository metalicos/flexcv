/** Prompt for converting raw resume text (from PDF/DOCX/TXT) into Resume JSON. */
export function buildResumeParsePrompt(rawText: string, language: string): string {
  return `You are a resume parser. Convert the resume text below into a single JSON object.

Use EXACTLY this schema (omit unknown optional fields, never invent data):
{
  "basics": {
    "fullName": string,
    "title": string,
    "summary": string,
    "containsImage": boolean,
    "imageURL"?: string,
    "contact": {
      "location"?: string, "github"?: string, "email"?: string,
      "linkedin"?: string, "phone"?: string, "website"?: string, "birthDate"?: string
    }
  },
  "languages": [{ "name": string, "level": string }],
  "skills": [{ "category": string, "skills": string[] }],
  "education": [{ "degree": string, "institution": string, "specialty"?: string,
                 "location"?: string, "startDate"?: string, "endDate"?: string }],
  "employment": [{ "role": string, "company": string, "project"?: string,
                   "description"?: string, "startDate"?: string, "endDate"?: string,
                   "responsibilities": string[] }]
}

Rules:
- Output ONLY valid JSON, no markdown, no commentary.
- Write every human-readable string value in ${language}. Keep proper nouns, brand names,
  technologies and emails unchanged.
- Group skills into reasonable categories.
- Plain text has no photo: set "containsImage" to false and omit "imageURL".

RESUME TEXT:
"""
${rawText}
"""`;
}
