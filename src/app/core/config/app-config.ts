/** Centralized constants. No magic strings or numbers scattered across services. */

export const STORAGE_KEYS = {
  geminiApiKey: 'flexcv.gemini.apiKey',
  geminiModel: 'flexcv.gemini.model',
  resume: 'flexcv.resume.current',
  interfaceLanguage: 'flexcv.lang.interface',
  cvLanguage: 'flexcv.lang.cv',
} as const;

export const GEMINI = {
  baseUrl: 'https://generativelanguage.googleapis.com/v1beta/models',
  defaultModel: 'gemini-2.5-flash',
  availableModels: ['gemini-2.5-flash', 'gemini-2.5-pro', 'gemini-2.0-flash'],
} as const;

export const EXTERNAL_URLS = {
  geminiApiKeys: 'https://aistudio.google.com/api-keys',
} as const;

export const IMPORT = {
  acceptedExtensions: ['.json', '.txt', '.pdf', '.docx'],
  maxFileSizeBytes: 5 * 1024 * 1024,
} as const;
