import { Injectable } from '@angular/core';
import { Resume } from '../../../core/models/resume.model';
import { base64UrlDecode, base64UrlEncode } from '../../../core/utils/base64.util';
import { validateResume } from '../validators/resume.validator';

export const SHARE_DATA_PARAM = 'cvData';
export const SHARE_URL_PARAM = 'cv';

/**
 * Builds and reads share links. A link can either embed the whole CV JSON
 * (URL-safe base64) or point to a publicly hosted CV JSON file.
 */
@Injectable({ providedIn: 'root' })
export class CvShareService {
  buildLink(resume: Resume): string {
    const encoded = base64UrlEncode(JSON.stringify(resume));
    return `${this.baseUrl()}cv?${SHARE_DATA_PARAM}=${encoded}`;
  }

  buildUrlLink(jsonUrl: string): string {
    return `${this.baseUrl()}cv?${SHARE_URL_PARAM}=${encodeURIComponent(jsonUrl.trim())}`;
  }

  decodeEmbedded(encoded: string): Resume {
    return validateResume(JSON.parse(base64UrlDecode(encoded)));
  }

  private baseUrl(): string {
    // document.baseURI already includes the deployment sub-path (e.g. /flexcv/).
    return document.baseURI.endsWith('/') ? document.baseURI : `${document.baseURI}/`;
  }
}
