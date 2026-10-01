# MuseOffice — standalone Portable Tools & Equipment workspace

MuseOffice is the MyOffice `/tools` subsystem running as an independent
application. Same product, same tonal design (near-white canvas,
charcoal-green structure, pale-sage surfaces, restrained mineral-green glow,
7px corners, no-lift tiles), same backend and business data — without the
MyOffice AppShell, modules, or Classic/Dallaglio switching.

**Status:** extracted and verified. The MyOffice `/tools` route remains the
live system until a cutover is explicitly approved (see below).

## Stack

Next.js 16 (App Router) + React 19 + TypeScript. Owned CSS-module theme (no
Tailwind), Radix dialog/tooltip, Framer Motion, Recharts, Phosphor icons,
sonner toasts. Direct `fetch` to the existing Tools backend — no API proxy.

## Setup

```powershell
cd C:\Users\Administrator\Documents\studio\myoffice\MuseOffice
npm install
Copy-Item .env.example .env.local
```

Set `NEXT_PUBLIC_API_URL` in `.env.local`:

- `http://localhost:8000` — local backend
- `https://myofficebackend.onrender.com` — production data (default if unset)

## Run

```powershell
npm run dev     # http://localhost:3002 — open this URL in your browser
```

Port 3002 is inside the backend CORS allowlist and avoids clashing with the
MyOffice frontend on 3000/3001. Production: `npm run build`, then
`npm run start` (also port 3002).

## Verify

| Command | What it proves |
|---|---|
| `npm test` | 75 unit/interaction tests (72 extracted verbatim + 3 export guards) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint, zero errors |
| `npm run build` | Production build, `/` + `/_not-found` |
| `npm run verify` | Read-only Chromium verifier (see below) |

`npm run verify` needs the app running (`npm run dev` or `npm run start`)
and one browser install: `npx playwright install chromium`. It seeds an
isolated session, serves every Tools read from local fixtures, blocks every
non-GET application request, and asserts: progressive/independent source
loading, truthful initial/quiet/transient-failure states, issue autocomplete
and date-picker behavior, department grouping and trained/qualified/authorised
eligibility, Compliance, Gate passes, Analytics visuals, settled keyboard-focus
halo and no-lift hover glow, zero 390px overflow, and exact localStorage
restore. Override the target with `MUSEOFFICE_BASE_URL`.

## Layout

- `app/page.tsx` — workspace root (the extracted Tools page, imports repointed)
- `app/layout.tsx`, `app/globals.css` — fonts, Toaster, metadata, mini-preflight
- `components/tools/` — the extracted subsystem (components, logic, CSS theme, tests)
- `lib/config.ts`, `lib/charts.ts` — MuseOffice-owned `API_BASE` and chart palette
- `scripts/verify.mjs` — the read-only browser verifier
- `docs/EXTRACTION_PLAN.md` — dependency boundary and architecture decisions
- `docs/VERIFICATION_2026-10-01.md` — verification evidence and open items

Nothing is imported from `../frontend` — the boundary is three owned files
(`lib/config`, `lib/charts`, direct Phosphor imports).

## Deployment

Any Next.js host (Vercel matches the current estate). Required env:
`NEXT_PUBLIC_API_URL` (backend origin), `NEXT_PUBLIC_SITE_URL` (public URL
for metadata). If the deployed origin is new, add it to the backend's
`ALLOWED_ORIGINS`; no migration or data change is needed — MuseOffice shares
the backend and Supabase project by design.

## Cutover

Not cut over. MyOffice `/tools` is untouched and operational. Cutover options
(subdomain, reverse proxy, or project split) are a later explicit decision;
per the extraction plan, do not retire `/tools` without user approval.
