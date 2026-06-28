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
- **AI Chat** — a conversation against a target vacancy, with four one-click tasks plus free-form follow-up questions:
  1. Optimize the resume for the vacancy (downloadable / applyable JSON).
  2. Match / mismatch analysis of technologies, stack and experience.
  3. Recruiter talking points.
  4. Technical-interview talking points.

  The whole conversation can be exported / imported as JSON, and each optimized
  resume has a one-click **Download PDF** (plus Download JSON / Use as my CV).

- **Languages** — two independent settings: **Interface language** (Ukrainian by default, English optional) translates the whole UI at runtime; **CV language** (English by default, Ukrainian optional) drives the resume headings and every AI output (parsing, optimize, match, pitches, chat).

## Deployment
**Deployed here:** [https://metalicos.github.io/flexcv/](https://metalicos.github.io/flexcv/)

## Example of shared CV
**Shared CV:** [https://metalicos.github.io/flexcv/...](https://metalicos.github.io/flexcv/cv?cv=https:%2F%2Fraw.githubusercontent.com%2Fmetalicos%2Fflexcv%2Frefs%2Fheads%2Fmaster%2Falex-carter.json)
