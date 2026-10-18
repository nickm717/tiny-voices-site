# Product

## Register

brand

## Users

Parents and caregivers of babies and toddlers (roughly 1 to 5 years old), usually the one in the family who already takes the photos and keeps the half-filled baby book. They reach this site on a phone, often one-handed, often in the evening once the kids are asleep, from a shared link or an App Store search. They aren't short of documentation tools. What stops them is friction: anything that takes more than a few seconds while holding a toddler doesn't happen.

The job of the site: help them understand in a few seconds that Tiny Voices saves *the sound* of how their child talks, that capture is fast enough to actually work, and that the recordings are safe and private. Then get them to download it, or to join the waitlist before launch.

## Product Purpose

Tiny Voices is an iPhone and Apple Watch app for capturing the words and phrases a young child says, as short audio (or video) clips with the date and the child's age, so a parent can play them back years later. Capture is record-first from the Lock Screen, Action Button, Control Center or Watch; longer "sessions" let a parent drop bookmarks and clip later. Everything is local-first with an optional plain-file iCloud backup. No AI is ever applied to a child's voice.

Success for the site: a visitor feels the emotional pull (this is about hearing them again), believes the capture is effortless and the data is safe, and taps Download or joins the waitlist.

Source of truth for product details: [`nickm717/tiny-voices-context`](https://github.com/nickm717/tiny-voices-context) (`product/poc-product-doc.md`, `prds/`, `design/`).

## Brand Personality

**Warm, tender, unhurried.** Like a well-loved family keepsake, not a gadget. The voice is calm and plain-spoken: short sentences, real moments (bath time, the car, breakfast), no hype, no exclamation marks, no cleverness where a parent needs clarity. It should feel safe to hand your child's voice to.

Closest reference: **Headspace**, for its warmth, friendliness and soft, confident color, and for illustration with a point of view rather than stock polish. Not its meditation-app tropes.

## Anti-references

- **AI / tech-startup landing pages.** Gradient glows, glassmorphism, "powered by" energy, SaaS feature grids. Especially wrong for a product whose promise is *no AI, ever*.
- **Developmental or clinical trackers.** Charts and scores front and centre, percentiles, anything that implies judging a child's progress. Counts are captures, not vocabulary; milestones are reference, never a verdict.
- **Generic editorial magazine.** Italic display serif headlines, tiny uppercase tracked labels above every section, hairline rules, monochrome restraint.
- Also avoid (implied by the product docs): baby-product pastel clichés, pink-for-girls / blue-for-boys, clip-art nursery imagery.

## Design Principles

1. **Lead with the sound.** The product is audio. The site should make you *feel* a voice (waveforms, playback, the words themselves) before it explains features.
2. **Show the three seconds.** Speed of capture is the whole bet. Demonstrate it, don't just claim it.
3. **Privacy is a feature, said plainly.** "No AI, ever" and "it's yours, in your iCloud Drive" are differentiators. State them clearly; never bury them in a policy.
4. **Gentle, never judging.** No scores, no comparisons, no anxiety. The site should lower a parent's guard, not raise it.
5. **Belongs with the app.** Use the app's own design system (warm neutrals, the sage / rose / slate child themes, SF Pro in product UI) so the site and the app feel like one thing.

## Accessibility & Inclusion

WCAG 2.2 AA. Text contrast at least 4.5:1 (3:1 for large text and UI), full keyboard access with visible focus, `prefers-reduced-motion` respected for all ambient animation, tap targets at least 24×24px (44px preferred on mobile). Many visitors read one-handed on a phone at night, so dark mode matters and body text must stay comfortable at small sizes. Caregivers of every gender and family shape: no gendered colour coding or "mom"-only copy.
