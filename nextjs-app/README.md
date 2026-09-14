# DTech Solutions — Next.js

Next.js (App Router) + TypeScript port of the DTech Solutions marketing site.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Firebase

Firebase config lives in `.env.local` (already filled in with the project's
public web config — see `.env.local.example` for the required keys). These
values are safe to be public; Firebase security is enforced by Firestore
rules, not by hiding the config.

The site reads two things from Firestore, falling back to the built-in
defaults if either is missing or unreachable:

- `site/media` (fields `hero`, `services.{cellphone,laptop,computer,cctv}`) —
  overrides the hero photo and the four service card photos.
- `site/media/gallery` (ordered by `createdAt` desc) — populates the "Our
  Work" carousel. The section renders nothing until at least one item exists.

## Structure

- `src/app/layout.tsx` — root layout, fonts, metadata, theme-init script.
- `src/app/page.tsx` — assembles the page from `src/components/*`.
- `src/app/globals.css` — full site stylesheet (ported 1:1 from the original
  static site, including the light/dark theme CSS variables).
- `src/components/Reveal.tsx` — scroll-reveal wrapper (replaces the original
  `IntersectionObserver` + `.rv` class script).
- `src/lib/firebase.ts` — Firebase client SDK init.

## Not yet ported

The admin panel (`admin.html` in the project root) — the Firebase Auth /
Firestore / Storage tool used to upload the hero, service, and gallery images
— has not been converted yet. It still works as a standalone static page
against the same Firebase project.
