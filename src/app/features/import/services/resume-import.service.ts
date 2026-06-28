import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Resume } from '../../../core/models/resume.model';
import { GeminiClient } from '../../../core/ai/gemini-client.service';
import { SettingsService } from '../../../core/config/settings.service';
import { LANGUAGE_PROMPT_NAME } from '../../../core/i18n/translations';
import { parseJsonSafe } from '../../../core/utils/json.util';
import { buildResumeParsePrompt } from '../../ai/prompts/resume-parse.prompt';
import { validateResume } from '../../resume/validators/resume.validator';
import { TextExtractionService } from './text-extraction.service';

export class ResumeImportError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ResumeImportError';
  }
}

/** Produces a validated Resume from JSON, a public URL, or a file (JSON/TXT/PDF/DOCX). */
@Injectable({ providedIn: 'root' })
export class ResumeImportService {
  private readonly http = inject(HttpClient);
  private readonly gemini = inject(GeminiClient);
  private readonly extractor = inject(TextExtractionService);
  private readonly settings = inject(SettingsService);

  fromJson(jsonText: string): Resume {
    let parsed: unknown;
    try {
      parsed = JSON.parse(jsonText);
    } catch {
      throw new ResumeImportError('The file does not contain valid JSON.');
    }
    return validateResume(parsed);
  }

  async fromUrl(url: string): Promise<Resume> {
    let text: string;
    try {
      text = await firstValueFrom(this.http.get(url.trim(), { responseType: 'text' }));
    } catch {
      throw new ResumeImportError(
        'Could not fetch the URL. Make sure it is public and CORS-accessible (e.g. a GitHub raw link).',
      );
    }
    return this.fromJson(text);
  }

  async fromText(rawText: string): Promise<Resume> {
    if (!rawText.trim()) {
      throw new ResumeImportError('No text to import.');
    }
    const language = LANGUAGE_PROMPT_NAME[this.settings.cvLanguage()];
    const response = await this.gemini.generateText(buildResumeParsePrompt(rawText, language), {
      jsonOutput: true,
      temperature: 0.1,
    });
    const parsed = parseJsonSafe<unknown>(response);
    if (parsed === null) {
      throw new ResumeImportError('Gemini did not return parseable resume JSON.');
    }
    return validateResume(parsed);
  }

  async fromFile(file: File): Promise<Resume> {
    const extension = this.extensionOf(file.name);

    if (extension === 'json') {
      return this.fromJson(await file.text());
    }
    if (extension === 'txt') {
      return this.fromText(await file.text());
    }
    if (extension === 'pdf') {
      return this.fromText(await this.extractor.pdfToText(file));
    }
    if (extension === 'docx') {
      return this.fromText(await this.extractor.docxToText(file));
    }
    throw new ResumeImportError(
      `Unsupported file type: .${extension}. Use JSON, TXT, PDF, or DOCX.`,
    );
  }

  private extensionOf(fileName: string): string {
    return fileName.split('.').pop()?.toLowerCase() ?? '';
  }
}
