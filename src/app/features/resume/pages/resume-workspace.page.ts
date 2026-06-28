import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  viewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { Resume } from '../../../core/models/resume.model';
import { I18nService } from '../../../core/i18n/i18n.service';
import { ResumeRepository } from '../services/resume-repository.service';
import { ResumeExportService } from '../../export/services/resume-export.service';
import { PrintService } from '../../export/services/print.service';
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
  private readonly printer = inject(PrintService);
  protected readonly i18n = inject(I18nService);

  private readonly cvDoc = viewChild<ElementRef<HTMLElement>>('cvDoc');

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
    const element = this.cvDoc()?.nativeElement;
    if (element) {
      this.printer.print(element);
    }
  }

  protected clear(): void {
    this.repository.clear();
  }
}
