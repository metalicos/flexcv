import { validateResume } from '../../resume/validators/resume.validator';
import { ChatContent, ChatExport, ChatMessage, ChatRole } from '../models/chat.model';

export class ChatImportError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ChatImportError';
  }
}

type Json = Record<string, unknown>;

function isObject(value: unknown): value is Json {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function str(value: unknown): string {
  return typeof value === 'string' ? value : '';
}

function strList(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((v): v is string => typeof v === 'string') : [];
}

function role(value: unknown): ChatRole {
  return value === 'user' ? 'user' : 'assistant';
}

function mapContent(raw: unknown): ChatContent | null {
  if (!isObject(raw)) {
    return null;
  }
  switch (raw['type']) {
    case 'text':
      return { type: 'text', text: str(raw['text']) };
    case 'error':
      return { type: 'error', text: str(raw['text']) };
    case 'pitch':
      return { type: 'pitch', title: str(raw['title']), points: strList(raw['points']) };
    case 'match': {
      const analysis = isObject(raw['analysis']) ? raw['analysis'] : {};
      return {
        type: 'match',
        analysis: {
          matches: strList(analysis['matches']),
          mismatches: strList(analysis['mismatches']),
        },
      };
    }
    case 'optimized':
      try {
        return { type: 'optimized', resume: validateResume(raw['resume']) };
      } catch {
        return null;
      }
    default:
      return null;
  }
}

/** Validates an imported chat file into a typed ChatExport, dropping malformed messages. */
export function validateChatExport(input: unknown): ChatExport {
  if (!isObject(input) || !Array.isArray(input['messages'])) {
    throw new ChatImportError('Not a valid FlexCV chat export.');
  }

  const messages: ChatMessage[] = [];
  for (const item of input['messages']) {
    if (!isObject(item)) {
      continue;
    }
    const content = mapContent(item['content']);
    if (content === null) {
      continue;
    }
    messages.push({ id: str(item['id']) || `m${messages.length}`, role: role(item['role']), content });
  }

  return {
    version: typeof input['version'] === 'number' ? input['version'] : 1,
    jobDescription: str(input['jobDescription']),
    messages,
  };
}
