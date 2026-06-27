# Engineering Rules

## Rule 1

Readable code is more valuable than clever code.

---

## Rule 2

Never duplicate logic.

Extract reusable functions.

---

## Rule 3

Never duplicate UI.

Extract reusable components.

---

## Rule 4

Maximum component size

200 lines

Maximum service size

300 lines

Maximum function size

40 lines

---

## Rule 5

One file = one responsibility.

---

## Rule 6

Every feature owns its models.

Never create global models unless reused by multiple features.

---

## Rule 7

Never expose mutable state.

---

## Rule 8

Prefer pure functions.

---

## Rule 9

Never manipulate DOM manually.

Use Angular CDK or Angular Material.

---

## Rule 10

Never use inline styles.

Never use inline colors.

Never use inline spacing.

---

## Rule 11

No CSS inside components.

Use Tailwind.

If Tailwind cannot solve it, extend global SCSS.

---

## Rule 12

Material Design is the design system.

Do not fight Material.

Extend it.

---

## Rule 13

Tailwind handles:

- spacing
- layout
- flex
- grid
- responsive

SCSS handles:

- typography
- colors
- variables
- Material overrides
- CV rendering

---

## Rule 14

No magic numbers.

Extract constants.

---

## Rule 15

No magic strings.

Extract enums/constants.

---

## Rule 16

Never use "any".

Never disable strict mode.

---

## Rule 17

Always validate imported data.

JSON must satisfy schema.

---

## Rule 18

Gemini responses must always be validated before parsing.

Never trust LLM output.

---

## Rule 19

Resume JSON is the single source of truth.

Everything is generated from Resume JSON.

---

## Rule 20

PDF

↓

Text

↓

Gemini

↓

Resume JSON

↓

Editor

↓

Preview

↓

PDF Export

Always preserve this pipeline.

---

## Rule 21

No business logic inside templates.

---

## Rule 22

No HTTP inside components.

---

## Rule 23

Do not over-engineer.

Choose the simplest maintainable solution.
