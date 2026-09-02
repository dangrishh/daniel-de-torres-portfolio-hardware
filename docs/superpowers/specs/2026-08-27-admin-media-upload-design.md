# Admin Media Upload — Design

## Problem
The site (`index.html`) is a single static HTML file with hardcoded stock photos for the hero and the 4 service cards, and no way for the site owner (Daniel) to add photos/videos of his own work without editing code.

## Goal
Give Daniel a password-protected admin page to:
- Replace the hero image
- Replace each of the 4 service card images (Cellphone, Laptop, Computer, CCTV)
- Add/remove items in a new "Our Work" gallery section (photos or short videos, with an optional caption)

Changes must show up for every site visitor, not just in Daniel's browser.

## Architecture
No build step, matching the existing single-file style. Two static pages, one shared config module:

- `index.html` — existing public site. Gains a small module script that reads the current media from Firestore and swaps it into the DOM. If the read fails or nothing has been uploaded yet, the page keeps its existing hardcoded default images — the public site can never break because of this.
- `admin.html` — new, unlisted page (not linked from the public nav, `noindex`). Email/password login gate, then an upload dashboard.
- `firebase-config.js` — shared Firebase app init (Auth, Firestore, Storage), imported by both pages.

Backend is Firebase (free Spark tier):
- **Auth**: email/password, one account created manually by Daniel in the Firebase console (no sign-up UI exists anywhere).
- **Firestore**: single document `site/media` holds `hero` and `services.{cellphone,laptop,computer,cctv}` URLs. A subcollection `site/media/gallery/{itemId}` holds gallery items (`type`, `url`, `caption`, `storagePath`, `createdAt`).
- **Storage**: the actual uploaded files, under `media/hero.*`, `media/services/{key}.*`, `media/gallery/{id}.*`.

## Data flow
1. Daniel logs into `admin.html`.
2. He picks a file → uploads to Storage → gets a download URL → writes that URL into Firestore (`setDoc` merge for hero/services, `addDoc` for a new gallery item; `deleteDoc` + `deleteObject` to remove a gallery item).
3. Any visitor loading `index.html` does one `getDoc` for `site/media` and one `getDocs` for the gallery subcollection, then updates image `src`s and renders gallery cards. Both calls are wrapped in try/catch; on any failure the page silently keeps its defaults and hides the (now-empty) gallery section.

## Security
- Firestore/Storage rules: public read, write only if `request.auth != null`. Since no public sign-up exists, only Daniel's manually-created account can ever be authenticated, so this is sufficient for a single-admin site.
- Storage rules also cap upload size (10MB images / 50MB video) server-side, in addition to client-side checks (which are only a UX convenience, not a real guard).
- The Firebase web config (apiKey, projectId, etc.) is not a secret — it's meant to be public. Security comes entirely from the rules above.

## Addendum: Contact form
The Contact section was previously display-only (contact info + map, no way to actually message from the page). Added a form (Name / Phone-Email-Messenger / Category / Service Type / Message) that writes a document to a new top-level `inquiries` collection. "Category" is a dropdown of the 4 service areas (Cellphone/Laptop/Computer/CCTV) plus "Other / Not Sure"; "Service Type" is a dropdown of Home Service vs. Onsite. A hidden honeypot field discards obvious bot submissions client-side. The admin dashboard gained a "Contact Messages" panel (loaded first, above the media sections) listing submissions newest-first — showing the category/service-type as tags — with mark read/unread and delete actions, and an unread-count badge. See the updated Firestore rules above — this collection intentionally has different rules than `site/media`: visitors may only *create*, never *read*, so one visitor's message can't be read by another.

**Layout**: The Contact section is now a 2-column grid — "Reach Us Here" (contact info, itself a 2-column grid of items) on the left, "Send Us a Message" on the right — with the map spanning full width underneath both.

## Addendum: Our Work as an auto-sliding carousel
"Our Work" is now a single auto-advancing carousel (one photo/video full-width at a time, 5s interval, pauses on hover) instead of a static grid — reads as a branding showcase rather than a photo wall. Manual prev/next arrows and dot indicators are included; only the visible slide's video plays (others paused) to avoid multiple videos competing for audio/bandwidth.

Gallery items gained an `active` boolean (default `true` on upload). The admin gallery list is the "monitoring" view: each item shows a Live/Hidden tag and a Hide/Show toggle, so Daniel can pull an item out of the public slideshow without deleting it (e.g. to review/replace later), independent of the existing add/delete flow. The public site filters to `active !== false` client-side (no new Firestore index needed — still a single `orderBy(createdAt)` query).

## Out of scope
- Multi-admin / role management — single shared-by-nobody-else account is enough.
- Reordering gallery items (they're simply sorted newest-first).
- Image resizing/optimization on upload (Firebase Storage serves the original file as uploaded).

## Setup Daniel must do (cannot be automated by the agent — requires his own Google account)
1. Create a Firebase project at console.firebase.google.com.
2. Add a Web App, copy the config values into `firebase-config.js`.
3. Enable Authentication → Email/Password, add one user manually.
4. Enable Firestore (production mode) and Storage, apply the rules below.

### Firestore rules
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /site/media {
      allow read: if true;
      allow write: if request.auth != null;
    }
    match /site/media/gallery/{itemId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    match /inquiries/{itemId} {
      // Visitors can only ever create a message — never read the list
      // (that would leak everyone else's contact details), never edit
      // or delete one after sending it.
      allow create: if request.resource.data.keys().hasOnly(
                        ['name', 'contact', 'category', 'serviceType',
                         'message', 'read', 'createdAt']
                      )
                    && request.resource.data.name is string
                    && request.resource.data.name.size() > 0
                    && request.resource.data.name.size() < 100
                    && request.resource.data.contact is string
                    && request.resource.data.contact.size() > 0
                    && request.resource.data.contact.size() < 150
                    && request.resource.data.category is string
                    && request.resource.data.category.size() > 0
                    && request.resource.data.category.size() < 60
                    && request.resource.data.serviceType is string
                    && request.resource.data.serviceType.size() > 0
                    && request.resource.data.serviceType.size() < 60
                    && request.resource.data.message is string
                    && request.resource.data.message.size() > 0
                    && request.resource.data.message.size() < 1200
                    && request.resource.data.read == false;
      allow read, update, delete: if request.auth != null;
    }
  }
}
```

### Storage rules
```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /media/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null
        && request.resource.size < 50 * 1024 * 1024;
    }
  }
}
```
