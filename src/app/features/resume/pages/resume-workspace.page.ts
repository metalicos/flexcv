import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Resume } from '../../../core/models/resume.model';
import { I18nService } from '../../../core/i18n/i18n.service';
import { ResumeRepository } from '../services/resume-repository.service';
import { CvShareService, SHARE_DATA_PARAM, SHARE_URL_PARAM } from '../services/cv-share.service';
import { SAMPLE_RESUME } from '../data/sample-resume';
import { ResumeExportService } from '../../export/services/resume-export.service';
import { PrintService } from '../../export/services/print.service';
import { ResumeImportService } from '../../import/services/resume-import.service';
import { ImportPanelComponent } from '../../import/components/import-panel.component';
import { CvDocumentComponent } from '../../preview/components/cv-document.component';
import { CvJsonEditorComponent } from '../components/cv-json-editor.component';
import { CvSharePanelComponent } from '../components/cv-share-panel.component';

type CvSection = 'editor' | 'export' | 'share';

@Component({
  selector: 'app-resume-workspace-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    ImportPanelComponent,
    CvDocumentComponent,
    CvJsonEditorComponent,
    CvSharePanelComponent,
  ],
  templateUrl: './resume-workspace.page.html',
  styleUrl: './resume-workspace.page.scss',
})
export class ResumeWorkspacePage {
  private readonly repository = inject(ResumeRepository);
  private readonly exporter = inject(ResumeExportService);
  private readonly printer = inject(PrintService);
  private readonly shareService = inject(CvShareService);
  private readonly importService = inject(ResumeImportService);
  private readonly route = inject(ActivatedRoute);
  private readonly snackBar = inject(MatSnackBar);
  protected readonly i18n = inject(I18nService);

  private readonly cvDoc = viewChild('cvDoc', { read: ElementRef });

  protected readonly resume = this.repository.resume;
  protected readonly hasResume = this.repository.hasResume;
  protected readonly section = signal<CvSection>('editor');
  protected readonly sharedView = signal(false);

  constructor() {
    this.loadSharedFromQuery();
  }

  protected select(section: CvSection): void {
    this.section.set(section);
  }

  protected closeSharedView(): void {
    this.sharedView.set(false);
  }

  protected onImported(resume: Resume): void {
    this.repository.set(resume);
    this.sharedView.set(false);
  }

  protected createNew(): void {
    this.repository.set(SAMPLE_RESUME);
    this.sharedView.set(false);
    this.section.set('editor');
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

  private loadSharedFromQuery(): void {
    const params = this.route.snapshot.queryParamMap;
    const embedded = params.get(SHARE_DATA_PARAM);
    const url = params.get(SHARE_URL_PARAM);

    if (embedded) {
      try {
        this.repository.set(this.shareService.decodeEmbedded(embedded));
        this.sharedView.set(true);
        this.notifyShared();
      } catch {
        this.notifyShareError();
      }
      return;
    }
    if (url) {
      this.importService
        .fromUrl(url)
        .then((resume) => {
          this.repository.set(resume);
          this.sharedView.set(true);
          this.notifyShared();
        })
        .catch(() => this.notifyShareError());
    }
  }

  private notifyShared(): void {
    this.snackBar.open(this.i18n.t('cv.shared.loaded'), 'OK', { duration: 2500 });
  }

  private notifyShareError(): void {
    this.snackBar.open(this.i18n.t('cv.shared.error'), 'Dismiss', { duration: 5000 });
  }
}
