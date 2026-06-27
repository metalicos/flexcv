import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AiTaskKind, MatchAnalysis } from '../../../core/models/ai.model';
import { Resume } from '../../../core/models/resume.model';
import { SettingsService } from '../../../core/config/settings.service';
import { ResumeRepository } from '../../resume/services/resume-repository.service';
import { ResumeExportService } from '../../export/services/resume-export.service';
import { ResumeAiService } from '../services/resume-ai.service';
import { CvDocumentComponent } from '../../preview/components/cv-document.component';

@Component({
  selector: 'app-ai-assistant-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    RouterLink,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    CvDocumentComponent,
  ],
  templateUrl: './ai-assistant.page.html',
  styleUrl: './ai-assistant.page.scss',
})
export class AiAssistantPage {
  private readonly ai = inject(ResumeAiService);
  private readonly repository = inject(ResumeRepository);
  private readonly exporter = inject(ResumeExportService);
  private readonly settings = inject(SettingsService);
  private readonly snackBar = inject(MatSnackBar);

  protected readonly resume = this.repository.resume;
  protected readonly hasResume = this.repository.hasResume;
  protected readonly hasApiKey = this.settings.hasApiKey;

  protected readonly jobDescription = signal('');
  protected readonly activeTask = signal<AiTaskKind | null>(null);

  protected readonly optimized = signal<Resume | null>(null);
  protected readonly match = signal<MatchAnalysis | null>(null);
  protected readonly recruiterPoints = signal<readonly string[] | null>(null);
  protected readonly technicalPoints = signal<readonly string[] | null>(null);

  protected get ready(): boolean {
    return this.hasResume() && this.hasApiKey() && this.jobDescription().trim().length > 0;
  }

  protected runOptimize(): void {
    this.run('optimize', async (resume, jd) => {
      this.optimized.set(await this.ai.optimize(resume, jd));
    });
  }

  protected runMatch(): void {
    this.run('match-analysis', async (resume, jd) => {
      this.match.set(await this.ai.analyzeMatch(resume, jd));
    });
  }

  protected runRecruiter(): void {
    this.run('recruiter-pitch', async (resume, jd) => {
      this.recruiterPoints.set(await this.ai.recruiterPitch(resume, jd));
    });
  }

  protected runTechnical(): void {
    this.run('technical-pitch', async (resume, jd) => {
      this.technicalPoints.set(await this.ai.technicalPitch(resume, jd));
    });
  }

  protected applyOptimized(): void {
    const next = this.optimized();
    if (next) {
      this.repository.set(next);
      this.snackBar.open('Optimized resume saved as your current CV.', 'OK', {
        duration: 3000,
      });
    }
  }

  protected downloadOptimized(): void {
    const next = this.optimized();
    if (next) {
      this.exporter.downloadJson(next);
    }
  }

  private run(
    task: AiTaskKind,
    action: (resume: Resume, jd: string) => Promise<void>,
  ): void {
    const current = this.resume();
    if (!current || !this.ready) {
      return;
    }
    this.activeTask.set(task);
    action(current, this.jobDescription().trim())
      .catch((error: unknown) => {
        const message = error instanceof Error ? error.message : 'AI request failed.';
        this.snackBar.open(message, 'Dismiss', { duration: 6000 });
      })
      .finally(() => this.activeTask.set(null));
  }
}
