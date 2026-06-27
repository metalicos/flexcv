import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { Resume } from '../../../core/models/resume.model';
import { ResumeRepository } from '../services/resume-repository.service';
import { ResumeExportService } from '../../export/services/resume-export.service';
import { ImportPanelComponent } from '../../import/components/import-panel.component';
import { CvDocumentComponent } from '../../preview/components/cv-document.component';

@Component({
  selector: 'app-resume-workspace-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    ImportPanelComponent,
    CvDocumentComponent,
  ],
  templateUrl: './resume-workspace.page.html',
  styleUrl: './resume-workspace.page.scss',
})
export class ResumeWorkspacePage {
  private readonly repository = inject(ResumeRepository);
  private readonly exporter = inject(ResumeExportService);

  protected readonly resume = this.repository.resume;
  protected readonly hasResume = this.repository.hasResume;

  protected onImported(resume: Resume): void {
    this.repository.set(resume);
  }

  protected exportJson(): void {
    const current = this.resume();
    if (current) {
      this.exporter.downloadJson(current);
    }
  }

  protected exportPdf(): void {
    this.exporter.exportPdf();
  }

  protected clear(): void {
    this.repository.clear();
  }
}
