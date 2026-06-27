# Resume AI

AI-powered Resume Builder and Resume Optimizer.

## Project Goal

Create a production-quality Angular application that allows users to:

- Import resume from JSON
- Import resume from PDF, DOCX and TXT using Gemini
- Edit resume visually
- Export resume to JSON and PDF
- Optimize resume for a specific vacancy
- Compare resume against Job Description
- Generate recruiter pitch
- Generate technical interview talking points

This project is intended to be maintainable for many years.

Code quality is more important than development speed.

---

# Technology Stack

- Angular 21
- TypeScript (strict)
- Angular Signals
- Standalone Components
- Angular Material
- TailwindCSS
- SCSS
- RxJS only where Signals cannot replace it
- Google Gemini API

---

# Core Principles

Always follow:

- KISS
- SOLID
- DRASP
- DRY
- Composition over inheritance
- Immutability where practical
- Small reusable components
- Small reusable services

Never introduce unnecessary abstractions.

---

# Architecture

Use feature-first architecture.

Each feature owns:

- pages
- components
- services
- models
- mappers
- utils

No shared dumping folder.

---

# Components

Components must:

- be standalone
- use ChangeDetectionStrategy.OnPush
- use Signals
- contain minimal logic

Business logic belongs inside services.

---

# Styling

Very important.

Component SCSS files should normally remain EMPTY.

Do NOT create local component styling unless absolutely impossible.

Use:

- Tailwind utility classes
- Angular Material
- Global SCSS only

The application must have ONE centralized design system.

Never invent spacing or colors inside components.

---

# Global Styling

Use only:

styles.scss

Structure:

styles/
    _variables.scss
    _typography.scss
    _material.scss
    _utilities.scss
    _layout.scss
    _forms.scss
    _cv.scss

Imported resume preview must reuse global classes.

---

# Resume Rendering

Resume preview should reproduce the provided PDF as closely as possible.

Layout should not rely on pixel-perfect hacks.

Use semantic HTML.

Rendering should be responsive while preserving desktop appearance.

---

# State

Prefer Signals.

Avoid BehaviorSubject unless necessary.

Avoid NgRx.

Simple applications should stay simple.

---

# Dependency Injection

Prefer inject().

Avoid constructor injection.

---

# Services

One responsibility per service.

Example:

ResumeImportService

ResumeExportService

ResumeAiService

ResumeRepository

GeminiClient

ResumePdfService

---

# Models

Never use "any".

Every JSON object must have a typed interface.

Prefer readonly models.

---

# AI

Prompts belong in dedicated prompt files.

Never hardcode prompt strings throughout services.

Example

/prompts

resume-optimize.prompt.ts

match-analysis.prompt.ts

recruiter.prompt.ts

technical.prompt.ts

---

# Errors

Never silently ignore errors.

Display user-friendly messages.

Log developer-friendly errors.

---

# Folder Naming

kebab-case

Files

resume-import.service.ts

resume-editor.component.ts

Never use PascalCase filenames.

---

# Imports

Prefer absolute imports.

Avoid circular dependencies.

---

# Comments

Avoid obvious comments.

Code should explain itself.

Only comment complex business rules.

---

# Testing

Write code that is testable.

Business logic should be isolated from Angular.

---

# Performance

Lazy load every feature.

Avoid unnecessary computed signals.

Avoid unnecessary effects.

---

# Security

Gemini API Key

Store only inside LocalStorage.

Never send it anywhere except Gemini.

Never log API keys.
