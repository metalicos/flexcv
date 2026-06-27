# FlexCV

Flexible CV viewer / generator / redactor / AI transformer.

An Angular 21 application for building an IT resume and tailoring it to a specific
job description with Google Gemini.

## Features

- **Import** a resume from JSON (file or public URL, e.g. a GitHub raw link), from
  plain `.txt`, or by pasting raw text — converted to structured JSON by Gemini.
  (PDF/DOCX text extraction is stubbed for a follow-up iteration.)
- **Preview** that reproduces the reference CV layout (two-column, A4, print-ready).
- **Export** to JSON, and to PDF via the browser print pipeline.
- **Settings** to store your Gemini API key (kept only in `localStorage`) with a
  shortcut to create one in Google AI Studio.
- **AI Assistant** with four tasks against a target vacancy:
  1. Optimize the resume for the vacancy (downloadable / applyable JSON).
  2. Match / mismatch analysis of technologies, stack and experience.
  3. Recruiter talking points.
  4. Technical-interview talking points.

## Tech stack

Angular 21 (standalone, signals, zoneless, OnPush), Angular Material, TailwindCSS,
TypeScript strict. Feature-first architecture; the resume JSON is the single source
of truth. See `PROJECT_ARCHITECTURE.md` and `RULES.md`.

## Getting started

```bash
npm install
npm start          # dev server at http://localhost:4200
npm run build      # production build
```

> Note: if a `node_modules` folder is already present from packaging, delete it
> first (`rmdir /s /q node_modules` on Windows) and then run `npm install`, so the
> platform-specific binaries are fetched for your OS.

Then open **Settings**, paste a Gemini API key (button links to
https://aistudio.google.com/api-keys), and start on **My CV** by loading the sample
or importing your own JSON.
