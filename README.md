# Oday Shami Ladies Salon — Bilingual Page (Arabic / English)

One page, two languages, full RTL ↔ LTR switch. React, Vite, Tailwind CSS, Framer Motion.

- All text in `src/data/content.js` (`ar` and `en`)
- `src/useLanguage.js` sets `<html lang>` and `<html dir>` and remembers the choice
- Layout uses logical utilities (`ms-`, `ps-`, `border-s`, `end-`, `text-start`) so nothing needs a second stylesheet
- Each language has its own fonts

## Run
```bash
npm install
npm run dev
```
