/** Supported application languages. */
export type Language = 'uk' | 'en';

export const LANGUAGES: readonly Language[] = ['uk', 'en'];

/** Human-readable, self-named labels (shown in language selectors). */
export const LANGUAGE_LABELS: Record<Language, string> = {
  uk: 'Українська',
  en: 'English',
};

/** Name used inside AI prompts to instruct the output language. */
export const LANGUAGE_PROMPT_NAME: Record<Language, string> = {
  uk: 'Ukrainian',
  en: 'English',
};

/** English dictionary is the source of truth for the set of keys. */
export const en = {
  'nav.cv': 'My CV',
  'nav.chat': 'AI Chat',
  'nav.settings': 'Settings',

  'settings.title': 'Settings',
  'settings.language.title': 'Language',
  'settings.language.subtitle':
    'Interface language changes the app; CV language drives the resume and all AI output.',
  'settings.interfaceLanguage.label': 'Interface language',
  'settings.cvLanguage.label': 'CV language',
  'settings.gemini.title': 'Gemini API',
  'settings.gemini.subtitle':
    "Your key is stored only in this browser's local storage and is sent solely to Google Gemini.",
  'settings.apiKey.label': 'Gemini API key',
  'settings.model.label': 'Model',
  'settings.apiKey.hint': "Don't have a key yet? Create one for free in Google AI Studio.",
  'settings.save': 'Save',
  'settings.getKey': 'Get API key',
  'settings.removeKey': 'Remove key',
  'settings.saved': 'Settings saved.',
  'settings.keyRemoved': 'API key removed.',

  'import.tab.file': 'File',
  'import.tab.url': 'From URL',
  'import.tab.text': 'Paste text',
  'import.file.hint':
    'Import a JSON, TXT, PDF, or DOCX file. PDF and DOCX are converted to JSON with Gemini.',
  'import.choose': 'Choose file',
  'import.loadSample': 'Load sample',
  'import.url.hint': 'Paste a public link to a resume JSON (e.g. a GitHub raw URL).',
  'import.url.label': 'Resume JSON URL',
  'import.url.button': 'Import',
  'import.text.hint': 'Paste raw resume text — Gemini converts it into structured JSON.',
  'import.text.label': 'Resume text',
  'import.text.button': 'Convert with Gemini',
  'import.imported': 'Resume imported.',
  'import.enterUrl': 'Enter a URL first.',
  'import.pasteText': 'Paste some resume text first.',
  'import.tooLarge': 'File is too large (max 5 MB).',

  'cv.title': 'My CV',
  'cv.exportPdf': 'Export PDF',
  'cv.exportJson': 'Export JSON',
  'cv.clear': 'Clear',
  'cv.importReplace': 'Import / replace resume',
  'cv.getStarted.title': 'Import a resume to get started',
  'cv.getStarted.subtitle':
    'Load JSON, fetch from a public URL, or paste text for Gemini to structure.',

  'chat.title': 'AI Chat',
  'chat.clear': 'Clear chat',
  'chat.needResume.before': 'Import a resume first on the',
  'chat.needResume.after': 'page.',
  'chat.needKey.before': 'Add your Gemini API key in',
  'chat.needKey.after': 'to start chatting.',
  'chat.vacancy.title': 'Target vacancy',
  'chat.vacancy.subtitle': 'Paste the job description — it is the context for every task.',
  'chat.jobDescription.label': 'Job description',
  'chat.empty': 'Run a task below or ask anything about your fit for this vacancy.',
  'chat.optimize': 'Optimize resume',
  'chat.match': 'Match / mismatch',
  'chat.recruiter': 'Recruiter pitch',
  'chat.technical': 'Technical pitch',
  'chat.ask.label': 'Ask a follow-up question…',
  'chat.title.recruiter': 'Recruiter talking points',
  'chat.title.technical': 'Technical interview talking points',

  'chatmsg.match.title': 'Match analysis',
  'chatmsg.match.matches': 'Matches',
  'chatmsg.match.mismatches': 'Mismatches / gaps',
  'chatmsg.optimized.title': 'Optimized resume',
  'chatmsg.optimized.subtitle': 'Tailored to the vacancy. Save the JSON for GitHub.',
  'chatmsg.useAsCv': 'Use as my CV',
  'chatmsg.downloadJson': 'Download JSON',
  'chatmsg.savedAsCv': 'Optimized resume saved as your current CV.',
} as const;

export type TranslationKey = keyof typeof en;

export const uk: Record<TranslationKey, string> = {
  'nav.cv': 'Моє CV',
  'nav.chat': 'AI Чат',
  'nav.settings': 'Налаштування',

  'settings.title': 'Налаштування',
  'settings.language.title': 'Мова',
  'settings.language.subtitle':
    'Мова інтерфейсу змінює застосунок; мова CV керує резюме та всім виводом AI.',
  'settings.interfaceLanguage.label': 'Мова інтерфейсу',
  'settings.cvLanguage.label': 'Мова CV',
  'settings.gemini.title': 'Gemini API',
  'settings.gemini.subtitle':
    'Ключ зберігається лише в локальному сховищі цього браузера і надсилається тільки до Google Gemini.',
  'settings.apiKey.label': 'Ключ Gemini API',
  'settings.model.label': 'Модель',
  'settings.apiKey.hint': 'Ще немає ключа? Створіть його безкоштовно в Google AI Studio.',
  'settings.save': 'Зберегти',
  'settings.getKey': 'Отримати ключ',
  'settings.removeKey': 'Видалити ключ',
  'settings.saved': 'Налаштування збережено.',
  'settings.keyRemoved': 'Ключ API видалено.',

  'import.tab.file': 'Файл',
  'import.tab.url': 'За URL',
  'import.tab.text': 'Вставити текст',
  'import.file.hint':
    'Імпортуйте файл JSON, TXT, PDF або DOCX. PDF і DOCX конвертуються в JSON через Gemini.',
  'import.choose': 'Обрати файл',
  'import.loadSample': 'Завантажити приклад',
  'import.url.hint': 'Вставте публічне посилання на JSON резюме (напр. GitHub raw URL).',
  'import.url.label': 'URL JSON резюме',
  'import.url.button': 'Імпортувати',
  'import.text.hint': 'Вставте текст резюме — Gemini перетворить його на структурований JSON.',
  'import.text.label': 'Текст резюме',
  'import.text.button': 'Конвертувати через Gemini',
  'import.imported': 'Резюме імпортовано.',
  'import.enterUrl': 'Спершу введіть URL.',
  'import.pasteText': 'Спершу вставте текст резюме.',
  'import.tooLarge': 'Файл завеликий (макс. 5 МБ).',

  'cv.title': 'Моє CV',
  'cv.exportPdf': 'Експорт у PDF',
  'cv.exportJson': 'Експорт у JSON',
  'cv.clear': 'Очистити',
  'cv.importReplace': 'Імпортувати / замінити резюме',
  'cv.getStarted.title': 'Імпортуйте резюме, щоб почати',
  'cv.getStarted.subtitle':
    'Завантажте JSON, отримайте за публічним URL або вставте текст для структурування через Gemini.',

  'chat.title': 'AI Чат',
  'chat.clear': 'Очистити чат',
  'chat.needResume.before': 'Спершу імпортуйте резюме на сторінці',
  'chat.needResume.after': '.',
  'chat.needKey.before': 'Додайте ключ Gemini API у',
  'chat.needKey.after': 'щоб почати спілкування.',
  'chat.vacancy.title': 'Цільова вакансія',
  'chat.vacancy.subtitle': 'Вставте опис вакансії — це контекст для кожної задачі.',
  'chat.jobDescription.label': 'Опис вакансії',
  'chat.empty': 'Запустіть задачу нижче або запитайте будь-що про вашу відповідність вакансії.',
  'chat.optimize': 'Оптимізувати резюме',
  'chat.match': 'Метч / місметч',
  'chat.recruiter': 'Тези для рекрутера',
  'chat.technical': 'Тези для технічного інтерв’ю',
  'chat.ask.label': 'Поставте додаткове запитання…',
  'chat.title.recruiter': 'Тези для презентації рекрутеру',
  'chat.title.technical': 'Тези для технічного інтерв’ю',

  'chatmsg.match.title': 'Аналіз відповідності',
  'chatmsg.match.matches': 'Відповідності',
  'chatmsg.match.mismatches': 'Невідповідності / прогалини',
  'chatmsg.optimized.title': 'Оптимізоване резюме',
  'chatmsg.optimized.subtitle': 'Підлаштоване під вакансію. Збережіть JSON для GitHub.',
  'chatmsg.useAsCv': 'Зробити моїм CV',
  'chatmsg.downloadJson': 'Завантажити JSON',
  'chatmsg.savedAsCv': 'Оптимізоване резюме збережено як ваше поточне CV.',
};

export const TRANSLATIONS: Record<Language, Record<TranslationKey, string>> = { en, uk };
