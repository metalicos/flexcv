import { MatchAnalysis } from '../../../core/models/ai.model';
import { Resume } from '../../../core/models/resume.model';

export type ChatRole = 'user' | 'assistant';

export type ChatContent =
  | { readonly type: 'text'; readonly text: string }
  | { readonly type: 'match'; readonly analysis: MatchAnalysis }
  | { readonly type: 'pitch'; readonly title: string; readonly points: readonly string[] }
  | { readonly type: 'optimized'; readonly resume: Resume }
  | { readonly type: 'error'; readonly text: string };

export interface ChatMessage {
  readonly id: string;
  readonly role: ChatRole;
  readonly content: ChatContent;
}

export type ChatTask = 'optimize' | 'match' | 'recruiter' | 'technical';
