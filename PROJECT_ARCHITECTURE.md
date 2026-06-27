# Project Architecture

```
src/

    app/

        core/

            ai/
                gemini-client.service.ts
                prompts/

            storage/
                local-storage.service.ts

            config/
                app-config.ts

            models/

            utils/

        shared/

            components/

            pipes/

            directives/

            material/

        features/

            settings/

            resume/

                pages/

                components/

                services/

                models/

                mappers/

                validators/

            import/

                pages/

                services/

                parsers/

            export/

                services/

            preview/

                pages/

                components/

            ai/

                pages/

                components/

                services/

                prompts/

            chat/

                pages/

                components/

                models/

        layout/

            shell/

            toolbar/

            sidenav/

        app.routes.ts

assets/

styles/

    _variables.scss
    _material.scss
    _typography.scss
    _layout.scss
    _utilities.scss
    _forms.scss
    _cv.scss

styles.scss
```

---

# Feature Responsibilities

## Resume

Responsible only for Resume JSON.

No AI.

No Import.

No Export.

---

## Import

Responsible for:

- PDF
- DOCX
- TXT
- JSON

Produces Resume JSON.

---

## Export

Responsible for:

- JSON
- PDF

Consumes Resume JSON.

---

## Preview

Responsible for rendering Resume JSON.

Must visually match the provided PDF CV layout as closely as possible while remaining responsive. The preview should reuse the same typography, spacing, section hierarchy, and two-column composition demonstrated in `CV__2026_O_Komplikevych.pdf`. :contentReference[oaicite:0]{index=0}

No editing.

---

## AI

Responsible only for Gemini communication.

Contains:

- Prompt builders
- Response parsing
- Validation

---

## Chat

Responsible for:

Conversation

Prompt selection

Streaming

History

---

# Data Flow

```
PDF
DOCX
TXT
JSON

        │

        ▼

Import Service

        │

        ▼

Gemini Parser

        │

        ▼

Resume JSON

        │

        ├────────► Resume Editor
        │
        ├────────► Resume Preview
        │
        ├────────► AI Chat
        │
        └────────► Export
```

---

# Resume JSON

The Resume JSON document is the single source of truth.

Nothing should be generated directly from PDF.

Nothing should be edited directly in HTML.

Everything flows through Resume JSON.

---

# Design System

Priority order:

1. Angular Material
2. TailwindCSS
3. Global SCSS
4. Component SCSS (last resort)

Component-specific styling should be exceptional rather than standard practice.

---

# Rendering Goals

Resume Preview should:

- closely match the supplied CV PDF
- print correctly to A4
- support PDF export
- remain responsive
- use semantic HTML
- avoid absolute positioning whenever possible
- avoid canvas rendering

---

# Performance

- Lazy-loaded features
- OnPush everywhere
- Signals-first state management
- TrackBy for lists
- Deferred loading where appropriate

---

# Future Extensions

The architecture should support adding:

- Multiple resume templates
- Multiple AI providers
- GitHub synchronization
- Resume version history
- Cover Letter generation
- ATS analysis
- Interview preparation
- Skill gap analysis

without requiring major refactoring.