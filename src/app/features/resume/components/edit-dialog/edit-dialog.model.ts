export type EditFieldType = 'text' | 'textarea';

export interface EditField {
  readonly key: string;
  readonly label: string;
  readonly type: EditFieldType;
  readonly value: string;
}

export interface EditDialogData {
  readonly title: string;
  readonly fields: readonly EditField[];
}

export type EditDialogResult = Record<string, string>;
