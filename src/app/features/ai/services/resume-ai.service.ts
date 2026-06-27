import { Injectable, inject } from '@angular/core';
import { GeminiClient } from '../../../core/ai/gemini-client.service';
import { AiError } from '../../../core/ai/ai-error';
import { MatchAnalysis } from '../../../core/models/ai.model';
import { Resume } from '../../../core/models/resume.model';
import { parseJsonSafe } from '../../../core/utils/json.util';
import { validateResume } from '../../resume/validators/resume.validator';
import { buildOptimizePrompt } from '../prompts/resume-optimize.prompt';
import { buildMatchAnalysisPrompt } from '../prompts/match-analysis.prompt';
import { buildRecruiterPitchPrompt } from '../prompts/recruiter.prompt';
import { buildTechnicalPitchPrompt } from '../prompts/technical.prompt';
import { buildChatPrompt } from '../prompts/chat.prompt';

/** Orchestrates the AI-assisted resume tasks and free-form chat against a job description. */
@Injectable({ providedIn: 'root' })
export class ResumeAiService {
  private readonly gemini = inject(GeminiClient);

  async optimize(resume: Resume, jobDescription: string): Promise<Resume> {
    const raw = await this.gemini.generateText(
      buildOptimizePrompt(this.serialize(resume), jobDescription),
      { jsonOutput: true, temperature: 0.3 },
    );
    const parsed = parseJsonSafe<unknown>(raw);
    if (parsed === null) {
      throw new AiError('Gemini did not return a valid optimized resume.');
    }
    return validateResume(parsed);
  }

  async analyzeMatch(resume: Resume, jobDescription: string): Promise<MatchAnalysis> {
    const raw = await this.gemini.generateText(
      buildMatchAnalysisPrompt(this.serialize(resume), jobDescription),
      { jsonOutput: true, temperature: 0.2 },
    );
    const parsed = parseJsonSafe<Partial<MatchAnalysis>>(raw);
    if (parsed === null) {
      throw new AiError('Gemini did not return a valid match analysis.');
    }
    return {
      matches: this.toStringList(parsed.matches),
      mismatches: this.toStringList(parsed.mismatches),
    };
  }

  recruiterPitch(resume: Resume, jobDescription: string): Promise<string[]> {
    return this.pitch(buildRecruiterPitchPrompt(this.serialize(resume), jobDescription));
  }

  technicalPitch(resume: Resume, jobDescription: string): Promise<string[]> {
    return this.pitch(buildTechnicalPitchPrompt(this.serialize(resume), jobDescription));
  }

  async chat(
    resume: Resume,
    jobDescription: string,
    history: string,
    question: string,
  ): Promise<string> {
    return this.gemini.generateText(
      buildChatPrompt(this.serialize(resume), jobDescription, history, question),
      { temperature: 0.5 },
    );
  }

  private async pitch(prompt: string): Promise<string[]> {
    const raw = await this.gemini.generateText(prompt, {
      jsonOutput: true,
      temperature: 0.4,
    });
    const parsed = parseJsonSafe<{ points?: unknown }>(raw);
    const points = this.toStringList(parsed?.points);
    if (points.length === 0) {
      throw new AiError('Gemini did not return any talking points.');
    }
    return points;
  }

  private serialize(resume: Resume): string {
    return JSON.stringify(resume);
  }

  private toStringList(value: unknown): string[] {
    return Array.isArray(value)
      ? value.filter((v): v is string => typeof v === 'string' && v.trim().length > 0)
      : [];
  }
}
