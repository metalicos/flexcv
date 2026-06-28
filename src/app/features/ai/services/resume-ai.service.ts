import { Injectable, inject } from '@angular/core';
import { GeminiClient } from '../../../core/ai/gemini-client.service';
import { AiError } from '../../../core/ai/ai-error';
import { MatchAnalysis } from '../../../core/models/ai.model';
import { Resume } from '../../../core/models/resume.model';
import { SettingsService } from '../../../core/config/settings.service';
import { LANGUAGE_PROMPT_NAME } from '../../../core/i18n/translations';
import { parseJsonSafe } from '../../../core/utils/json.util';
import { validateResume } from '../../resume/validators/resume.validator';
import { buildOptimizePrompt } from '../prompts/resume-optimize.prompt';
import { buildMatchAnalysisPrompt } from '../prompts/match-analysis.prompt';
import { buildRecruiterPitchPrompt } from '../prompts/recruiter.prompt';
import { buildTechnicalPitchPrompt } from '../prompts/technical.prompt';
import { buildChatPrompt } from '../prompts/chat.prompt';
import { buildConcisePrompt } from '../prompts/concise.prompt';
import { buildQuestionsPrompt } from '../prompts/questions.prompt';
import { buildImproveSummaryPrompt } from '../prompts/improve-summary.prompt';
import { buildImproveEmploymentPrompt } from '../prompts/improve-employment.prompt';
import { buildImproveSkillsPrompt } from '../prompts/improve-skills.prompt';
import { buildReviewPrompt } from '../prompts/review.prompt';
import { buildRestructurePrompt } from '../prompts/restructure.prompt';

/** Orchestrates the AI-assisted resume tasks and free-form chat. */
@Injectable({ providedIn: 'root' })
export class ResumeAiService {
  private readonly gemini = inject(GeminiClient);
  private readonly settings = inject(SettingsService);

  optimize(resume: Resume, jobDescription: string): Promise<Resume> {
    return this.toResume(buildOptimizePrompt(this.serialize(resume), jobDescription, this.language()));
  }

  concise(resume: Resume, jobDescription: string): Promise<Resume> {
    return this.toResume(buildConcisePrompt(this.serialize(resume), jobDescription, this.language()));
  }

  restructure(resume: Resume): Promise<Resume> {
    return this.toResume(buildRestructurePrompt(this.serialize(resume), this.language()));
  }

  async analyzeMatch(resume: Resume, jobDescription: string): Promise<MatchAnalysis> {
    const raw = await this.gemini.generateText(
      buildMatchAnalysisPrompt(this.serialize(resume), jobDescription, this.language()),
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
    return this.pitch(buildRecruiterPitchPrompt(this.serialize(resume), jobDescription, this.language()));
  }

  technicalPitch(resume: Resume, jobDescription: string): Promise<string[]> {
    return this.pitch(buildTechnicalPitchPrompt(this.serialize(resume), jobDescription, this.language()));
  }

  interviewQuestions(resume: Resume, jobDescription: string): Promise<string[]> {
    return this.pitch(buildQuestionsPrompt(this.serialize(resume), jobDescription, this.language()));
  }

  improveSummary(resume: Resume): Promise<string> {
    return this.text(buildImproveSummaryPrompt(this.serialize(resume), this.language()));
  }

  improveEmployment(resume: Resume): Promise<string> {
    return this.text(buildImproveEmploymentPrompt(this.serialize(resume), this.language()));
  }

  improveSkills(resume: Resume): Promise<string> {
    return this.text(buildImproveSkillsPrompt(this.serialize(resume), this.language()));
  }

  review(resume: Resume): Promise<string[]> {
    return this.pitch(buildReviewPrompt(this.serialize(resume), this.language()));
  }

  chat(
    resume: Resume,
    jobDescription: string,
    history: string,
    question: string,
  ): Promise<string> {
    return this.gemini.generateText(
      buildChatPrompt(this.serialize(resume), jobDescription, history, question, this.language()),
      { temperature: 0.5 },
    );
  }

  private async toResume(prompt: string): Promise<Resume> {
    const raw = await this.gemini.generateText(prompt, { jsonOutput: true, temperature: 0.3 });
    const parsed = parseJsonSafe<unknown>(raw);
    if (parsed === null) {
      throw new AiError('Gemini did not return a valid resume.');
    }
    return validateResume(parsed);
  }

  private async pitch(prompt: string): Promise<string[]> {
    const raw = await this.gemini.generateText(prompt, { jsonOutput: true, temperature: 0.4 });
    const parsed = parseJsonSafe<{ points?: unknown }>(raw);
    const points = this.toStringList(parsed?.points);
    if (points.length === 0) {
      throw new AiError('Gemini did not return any items.');
    }
    return points;
  }

  private text(prompt: string): Promise<string> {
    return this.gemini.generateText(prompt, { temperature: 0.5 });
  }

  private language(): string {
    return LANGUAGE_PROMPT_NAME[this.settings.cvLanguage()];
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
