# tiny-voices-site

Marketing micro-site for **Tiny Voices**, the iPhone and Apple Watch app for saving the words and phrases your child says, in their own voice.

Product docs, design tokens and copy rules live in [`nickm717/tiny-voices-context`](https://github.com/nickm717/tiny-voices-context). The app lives in [`nickm717/tiny-voices`](https://github.com/nickm717/tiny-voices).

## Structure

Static HTML, CSS and JS with no build step.

| File | What it is |
|---|---|
| `index.html` | The one-pager: hero, how it works, features, privacy promise, FAQ, waitlist |
| `privacy.html` | Privacy policy (draft, needs review before App Store submission) |
| `assets/config.js` | **Edit this.** App Store URL, waitlist endpoint, contact email |
| `assets/tokens.css` | Design tokens from `tiny-voices-context/design/design-tokens.json` as CSS variables, including the sage / rose / slate child themes and dark mode |
| `assets/site.css` | Page styles. App screens are HTML/CSS mockups built from the tokens, not screenshots |
| `assets/main.js` | Waveforms, child-colour picker, scroll reveals, waitlist form |
| `assets/app-store-badge.svg` | **Stand-in** badge. Swap for Apple's official artwork before launch |

## Run locally

```sh
python3 -m http.server 8000   # then open http://localhost:8000
```

## Deploy

Vercel: import the repo with framework preset **Other**, no build command, and output directory `.`. `vercel.json` turns on clean URLs (`/privacy`) and a few security headers.

## Before launch

- [ ] Set `appStoreUrl` in `assets/config.js` to the real listing
- [ ] Set `waitlistEndpoint` (e.g. a Formspree form). Until then the form says the waitlist isn't open
- [ ] Set `contactEmail` to a real inbox
- [ ] Replace `assets/app-store-badge.svg` with Apple's official badge
- [ ] Review `privacy.html`, especially the analytics and crash-report claims, against the shipped app
- [ ] Check feature copy against what ships. The site describes the full product vision, including Lock Screen / Action Button / Control Center capture, video, the Watch app and milestones, some of which aren't built yet
- [ ] Optional: swap the HTML mockups for real screenshots, and add an `og:image`

## Keeping in sync with the design system

`assets/tokens.css` is a hand copy of `design-tokens.json`. When the Figma file and the token export change, update it. Copy follows `design/content-and-voice.md`. In particular, counts are *captures, not vocabulary*, and milestones are reference, never a verdict.
