import { Injectable } from '@angular/core';

/**
 * Extracts plain text from binary resume files (PDF, DOCX) in the browser.
 * Heavy parsers are dynamically imported so they are only loaded on demand.
 */
@Injectable({ providedIn: 'root' })
export class TextExtractionService {
  async pdfToText(file: File): Promise<string> {
    const pdfjs = await import('pdfjs-dist');
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
      'pdf.worker.min.mjs',
      document.baseURI,
    ).toString();

    const data = await file.arrayBuffer();
    const pdf = await pdfjs.getDocument({ data }).promise;

    const pages: string[] = [];
    for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
      const page = await pdf.getPage(pageNumber);
      const content = await page.getTextContent();
      const line = content.items
        .map((item) => ('str' in item ? item.str : ''))
        .join(' ');
      pages.push(line);
    }
    return pages.join('\n');
  }

  async docxToText(file: File): Promise<string> {
    const mammoth = await import('mammoth');
    const arrayBuffer = await file.arrayBuffer();
    const result = await mammoth.extractRawText({ arrayBuffer });
    return result.value;
  }
}
