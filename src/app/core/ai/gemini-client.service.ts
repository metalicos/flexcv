import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { SettingsService } from '../config/settings.service';
import { GEMINI } from '../config/app-config';
import { AiError } from './ai-error';

interface GeminiPart {
  readonly text?: string;
}
interface GeminiCandidate {
  readonly content?: { readonly parts?: readonly GeminiPart[] };
  readonly finishReason?: string;
}
interface GeminiResponse {
  readonly candidates?: readonly GeminiCandidate[];
  readonly promptFeedback?: { readonly blockReason?: string };
}

export interface GeminiGenerationOptions {
  readonly jsonOutput?: boolean;
  readonly temperature?: number;
}

/**
 * Low-level Gemini transport. Only responsible for talking to the Gemini REST API.
 * Prompt construction, validation and parsing live in dedicated services.
 */
@Injectable({ providedIn: 'root' })
export class GeminiClient {
  private readonly http = inject(HttpClient);
  private readonly settings = inject(SettingsService);

  async generateText(
    prompt: string,
    options: GeminiGenerationOptions = {},
  ): Promise<string> {
    const apiKey = this.settings.apiKey();
    if (!apiKey) {
      throw new AiError(
        'Gemini API key is not set. Add it in Settings before using AI features.',
      );
    }

    const model = this.settings.model() || GEMINI.defaultModel;
    const url = `${GEMINI.baseUrl}/${model}:generateContent`;

    const body = {
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: options.temperature ?? 0.4,
        ...(options.jsonOutput ? { responseMimeType: 'application/json' } : {}),
      },
    };

    let response: GeminiResponse;
    try {
      response = await firstValueFrom(
        this.http.post<GeminiResponse>(url, body, {
          params: { key: apiKey },
        }),
      );
    } catch (cause) {
      throw new AiError(
        'Failed to reach Gemini. Check your API key and network connection.',
        cause,
      );
    }

    return this.extractText(response);
  }

  private extractText(response: GeminiResponse): string {
    if (response.promptFeedback?.blockReason) {
      throw new AiError(
        `Gemini blocked the request (${response.promptFeedback.blockReason}).`,
      );
    }

    const parts = response.candidates?.[0]?.content?.parts ?? [];
    const text = parts
      .map((p) => p.text ?? '')
      .join('')
      .trim();

    if (!text) {
      throw new AiError('Gemini returned an empty response.');
    }
    return text;
  }
}
