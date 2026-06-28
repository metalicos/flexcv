import { Injectable, computed, inject, signal } from '@angular/core';
import { Resume } from '../../../core/models/resume.model';
import { ResumeRepository } from '../../resume/services/resume-repository.service';
import { ResumeAiService } from '../../ai/services/resume-ai.service';
import { I18nService } from '../../../core/i18n/i18n.service';
import {
  CHAT_EXPORT_VERSION,
  ChatContent,
  ChatExport,
  ChatMessage,
  ChatRole,
} from '../models/chat.model';
import { ChatImportError, validateChatExport } from '../validators/chat.validator';

/**
 * Holds the AI chat conversation. State lives in a root service so it survives
 * navigation. Each task appends a user message and an assistant response.
 */
@Injectable({ providedIn: 'root' })
export class ChatService {
  private readonly repository = inject(ResumeRepository);
  private readonly ai = inject(ResumeAiService);
  private readonly i18n = inject(I18nService);

  private readonly messagesSig = signal<readonly ChatMessage[]>([]);
  private readonly busySig = signal(false);
  private nextId = 0;

  readonly messages = this.messagesSig.asReadonly();
  readonly busy = this.busySig.asReadonly();
  readonly isEmpty = computed(() => this.messagesSig().length === 0);
  readonly jobDescription = signal('');

  runOptimize(): Promise<void> {
    return this.run(this.i18n.t('chat.optimize'), async (resume, jd) => ({
      type: 'optimized',
      resume: await this.ai.optimize(resume, jd),
    }));
  }

  runMatch(): Promise<void> {
    return this.run(this.i18n.t('chat.match'), async (resume, jd) => ({
      type: 'match',
      analysis: await this.ai.analyzeMatch(resume, jd),
    }));
  }

  runRecruiter(): Promise<void> {
    return this.run(this.i18n.t('chat.recruiter'), async (resume, jd) => ({
      type: 'pitch',
      title: this.i18n.t('chat.title.recruiter'),
      points: await this.ai.recruiterPitch(resume, jd),
    }));
  }

  runTechnical(): Promise<void> {
    return this.run(this.i18n.t('chat.technical'), async (resume, jd) => ({
      type: 'pitch',
      title: this.i18n.t('chat.title.technical'),
      points: await this.ai.technicalPitch(resume, jd),
    }));
  }

  ask(question: string): Promise<void> {
    const text = question.trim();
    if (!text) {
      return Promise.resolve();
    }
    return this.run(text, async (resume, jd) => ({
      type: 'text',
      text: await this.ai.chat(resume, jd, this.history(), text),
    }));
  }

  clear(): void {
    this.messagesSig.set([]);
  }

  exportJson(): string {
    const data: ChatExport = {
      version: CHAT_EXPORT_VERSION,
      jobDescription: this.jobDescription(),
      messages: this.messagesSig(),
    };
    return JSON.stringify(data, null, 2);
  }

  importJson(text: string): void {
    let parsed: unknown;
    try {
      parsed = JSON.parse(text);
    } catch {
      throw new ChatImportError('The file is not valid JSON.');
    }
    const data = validateChatExport(parsed);
    const messages = data.messages.map((message, index) => ({
      ...message,
      id: `m${index}`,
    }));
    this.nextId = messages.length;
    this.messagesSig.set(messages);
    this.jobDescription.set(data.jobDescription);
  }

  private async run(
    userText: string,
    action: (resume: Resume, jobDescription: string) => Promise<ChatContent>,
  ): Promise<void> {
    const resume = this.repository.resume();
    if (!resume || this.busySig()) {
      return;
    }
    this.append('user', { type: 'text', text: userText });
    this.busySig.set(true);
    try {
      this.append('assistant', await action(resume, this.jobDescription().trim()));
    } catch (error) {
      const message = error instanceof Error ? error.message : 'AI request failed.';
      this.append('assistant', { type: 'error', text: message });
    } finally {
      this.busySig.set(false);
    }
  }

  private append(role: ChatRole, content: ChatContent): void {
    const message: ChatMessage = { id: `m${this.nextId++}`, role, content };
    this.messagesSig.update((list) => [...list, message]);
  }

  private history(): string {
    return this.messagesSig()
      .map((m) => this.toHistoryLine(m))
      .filter((line) => line.length > 0)
      .join('\n');
  }

  private toHistoryLine(message: ChatMessage): string {
    const role = message.role === 'user' ? 'Candidate' : 'Assistant';
    switch (message.content.type) {
      case 'text':
        return `${role}: ${message.content.text}`;
      case 'pitch':
        return `${role}: ${message.content.title}: ${message.content.points.join('; ')}`;
      case 'match':
      case 'optimized':
      case 'error':
        return '';
    }
  }
}
