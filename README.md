# Ahmed Adeshina — Portfolio

The existing React + Vite portfolio, improved in place with Tailwind CSS 4.

## Development

- `npm install`
- `npm run dev`
- `npm run format` / `npm run format:check`
- `npm run lint`
- `npm run build`
- `npm run preview -- --host 127.0.0.1`
- With preview running: `npm run test:browser`

Browser verification uses headless Microsoft Edge through Playwright. Install Edge or change the channel in the scripts for your environment. Screenshots and machine-readable reports are written to the ignored `artifacts/` directory. The suite checks 375, 768, 1024 and 1440px widths, image loading, internal targets, external-link attributes, mobile navigation, Escape/focus behaviour, keyboard case-study disclosure, skip link, active navigation, console errors and axe WCAG AA rules. Automated accessibility checks do not replace a full assistive-technology audit.

## Content and evidence

Identity and CV configuration: `src/lib/profile.js`. Employment: `src/components/Experience.jsx`. Projects and case study: `src/components/Projects.jsx`.

Confirmed employment dates:

- OAT (Brix and Towers): November 2025–present, current role.
- Techspare: January 2025–June 2026, past role.
- NUHU Consult: December 2024–March 2025.

Descriptions are based on the original portfolio and supplied brief. They still need comparison against the updated CV once supplied.

Public inventory README and user model were inspected. The implementation defines **three** roles (admin, manager, storekeeper), not the four requested in the brief. Supply the updated implementation if a fourth role exists. The repository has no automated test suite; the portfolio does not claim one. Postman usage is based on the supplied project description. The testing scenarios in the case study describe key checks, not published test results.

RoyalMines technologies were checked against its public package manifest. MySQL, AWS and TypeScript are general skills only, not attributed to unsupported projects. School Management is presented as backend architecture; its cover is explicitly conceptual, not a fabricated ERD.

## Missing assets and links

- **Updated CV:** `public/Ahmed-Adeshina-CV.docx` is connected to every Download CV action. Its Techspare dates have been corrected to January 2025–June 2026. A PDF export remains preferable for browser viewing; update `cvPath` in `src/lib/profile.js` if the filename changes.
- **School Management API:** supply the repository URL and actual ERD/implementation preview. Confirm the database engine before listing it.
- **POS-DEV:** supply a public repository URL if available.
- **Chop-Express:** the supplied deployment returns HTTP 404, so it is omitted from displayed projects. Supply a working deployment and repository URL to restore it with an actual screenshot.

## Assets

RoyalMines and POS-DEV previews are real deployed-site screenshots, resized to 960 × 600 and compressed to WebP (about 43 KB and 47 KB). Backend visuals are small local SVG diagrams. Below-fold images load lazily with reserved dimensions. The hero diagram loads eagerly.

`node scripts/capture-projects.mjs` refreshes frontend screenshots and records link results (requires network and Edge). `node scripts/create-assets.mjs` regenerates diagrams, the AA favicon and the 1200 × 630 PNG social preview.

## Design and behaviour

Sticky navigation, one h1, semantic sections, bright body text, visible focus outlines, 44px controls, responsive stacked experience cards, native keyboard-accessible details, and reduced-motion support. Content never relies on animation to appear. Tailwind utilities and component classes retain the black-and-purple identity. Unused router, animation and icon packages have been removed.

The CV cannot be download-tested until supplied. Email links have the requested address, but delivery is not tested by sending mail. External services may block automated link checks. Social preview metadata is configured for the production domain and becomes available there only after deployment.
