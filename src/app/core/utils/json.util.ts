/** Helpers for working with LLM text that should contain JSON. */

/** Strips Markdown code fences and isolates the first JSON object/array found. */
export function extractJsonBlock(raw: string): string {
  let text = raw.trim();

  const fenceMatch = text.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fenceMatch) {
    text = fenceMatch[1].trim();
  }

  const firstBrace = text.search(/[[{]/);
  const lastBrace = Math.max(text.lastIndexOf('}'), text.lastIndexOf(']'));
  if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
    text = text.slice(firstBrace, lastBrace + 1);
  }

  return text;
}

export function parseJsonSafe<T>(raw: string): T | null {
  try {
    return JSON.parse(extractJsonBlock(raw)) as T;
  } catch {
    return null;
  }
}
