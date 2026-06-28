import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { I18nService } from '../../../../core/i18n/i18n.service';
import { EditDialogData, EditDialogResult } from './edit-dialog.model';

/** Generic, field-driven dialog used to edit any resume block. */
@Component({
  selector: 'app-edit-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './edit-dialog.component.html',
})
export class EditDialogComponent {
  protected readonly i18n = inject(I18nService);
  protected readonly data = inject<EditDialogData>(MAT_DIALOG_DATA);
  private readonly dialogRef = inject<MatDialogRef<EditDialogComponent, EditDialogResult>>(MatDialogRef);

  protected readonly values = signal<EditDialogResult>(
    Object.fromEntries(this.data.fields.map((field) => [field.key, field.value])),
  );

  protected setValue(key: string, value: string): void {
    this.values.update((current) => ({ ...current, [key]: value }));
  }

  protected save(): void {
    this.dialogRef.close(this.values());
  }
}
