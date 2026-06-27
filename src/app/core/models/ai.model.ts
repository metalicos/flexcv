/** Result models for AI-assisted resume tasks. */

export interface MatchAnalysis {
  readonly matches: readonly string[];
  readonly mismatches: readonly string[];
}

export interface PitchPoints {
  readonly points: readonly string[];
}

export type AiTaskKind =
  | 'optimize'
  | 'match-analysis'
  | 'recruiter-pitch'
  | 'technical-pitch';
