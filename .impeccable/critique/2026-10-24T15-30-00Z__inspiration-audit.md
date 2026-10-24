---
target: Tiny Voices micro-site vs. app-marketing inspiration (Wispr Flow, Avec)
timestamp: 2026-10-24T15-30-00Z
slug: inspiration-audit
---
# Inspiration audit: what to borrow from iPhone-app marketing sites

**Goal (from Nick):** keep the playful Storybook direction, but lean further toward sites that *explain and sell an iPhone app*.

**Sources.** wisprflow.ai and avec.ai were blocked by the session's network policy, so Wispr Flow was reviewed through Mobbin's captures of its site (hero, audience picker, benefit cards, press wall). Avec isn't on Mobbin; all we know is that it's an iPhone "voice email for Gmail" app. **Avec has not been reviewed yet.** It needs screenshots or network access. A handful of other consumer-app sections on Mobbin (Bevel, Monarch, Cash App, Extra) were used to check which patterns are standard for app sites.

## Where we already stand

Our site already does most of the "explain an app" job. It has a phone in the hero, a three-step how-it-works, one feature per section with a device, a privacy section that works as a differentiator, an FAQ, and the CTA again at the end. The 2026-10-19 critique scored it 28/40. Its two open P1s (dead CTAs, drawn mockups with nothing to hear) are also the two biggest gaps against app-marketing sites.

## What Wispr Flow does that we don't

| Wispr pattern | What it does for them | Our equivalent today |
|---|---|---|
| **"Try Flow" next to "Download"** in the hero | Lets you try the product before installing it | Nothing to try. The product is audio, but the page is silent |
| **Cinematic, real-world hero** (a blurred photo of a person in motion, three-word serif headline) | An emotional moment first, the product second | A drawn phone mockup. Warm, but it reads as a diagram |
| **Flat character illustrations** with a point of view (students, teams) | Playful, human, ownable | No people anywhere. PRODUCT.md names Headspace-style illustration as the reference, but the site doesn't use any yet |
| **"For every team" chip picker** that swaps the copy and art per audience | Lets visitors find themselves, and explains use cases without a feature grid | The sessions band names bath / car / breakfast in one static headline |
| **Platform chips** (iOS · Mac · Windows) and "Available on…" under the CTA | Answers "does it work on my thing?" instantly | "For iPhone and Apple Watch", in small grey text |
| **"Download for free"** | Removes the price question at the moment of decision | Price is never mentioned, not even in the FAQ |
| **Press wall / social proof** | Credibility | None (we're pre-launch) |
| **Short serif headlines** (2 to 4 words) | Scannable, confident | Our section titles are full sentences ("Bookmark from your wrist when the phone's out of reach") |

## Recommendations, ranked

### Pull in

1. **Hear it in the hero (P1).** Add a real "Hear Maya say it" play control to the hero notes ("uh-oh", "night night, moon"), using a short consented clip, so the waveform animates in sync with the audio. This is our "Try Flow": it fulfils *Lead with the sound* and closes the 10-19 P1 "nothing audible". Muted by default, never autoplays sound, works from the keyboard.
2. **Show the three seconds as motion (P1).** Replace the static Lock Screen mockup with a short muted, looping screen recording (≤6s, `<video playsinline muted loop>`, with a poster frame, and paused under reduced motion): Lock Screen widget tap → recording → "Saved: big truck" notification. App sites sell speed with video, not adjectives. Do this first, because it can be built from the real app now and is the first step toward retiring the drawn mockups.
3. **A "moments" picker instead of a static sessions headline (P2).** Use Wispr's audience chips, but for moments: *Bath time · Car ride · Breakfast · Bedtime · Out for a walk*. Each chip swaps the timeline's bookmarks and example words (bath: "bubbles!", car: "big truck", bedtime: "night night, moon"). It's playful, it shows the session feature, and it reuses the timeline component we already have. Not a card grid.
4. **Spot illustrations of real moments (P2).** Three or four flat, warm illustrations of a caregiver and a small child (bath, car seat, high chair), drawn in the sage / rose / slate themes so the colour picker recolours them too. This is the "illustration with a point of view" PRODUCT.md asks for, and it's the most "Wispr-playful" thing we can borrow. Gender-neutral caregivers, no nursery clip-art.
5. **App-site plumbing (P2, small):**
   - `<meta name="apple-itunes-app" content="app-id=…">` for Safari's Smart App Banner once the listing exists.
   - On desktop, a **QR code** beside the App Store badge in the final CTA ("Point your iPhone camera here"). Desktop visitors need a way to get to their phone.
   - On mobile, a **sticky "Get Tiny Voices" bar** that appears after the hero scrolls away and hides near the final CTA.
   - Turn "For iPhone and Apple Watch" into two small device chips with glyphs, Wispr-style, and add the iOS / watchOS minimum versions.
6. **Say the price (P2, needs a product decision).** "Free to download" in the hero line, or whatever the model is, plus an FAQ entry. Parents will wonder about it before they tap.
7. **Tighter section headlines (P3).** Keep each sentence as the lede and lift a short serif title above it: "Pocket to recording", "Bath-time sessions", "The jar", "From your wrist". This fixes the repeated long-sentence cadence the 10-19 critique also flagged.

### Social proof, adapted for pre-launch

8. **A founder note instead of a press wall (P3).** For an indie keepsake app, "Why I made this" from a parent, with a photo and their child's real first saved word, earns more trust than logos would. After launch, replace or join it with three App Store review quotes and the rating (the Monarch / Current pattern).

### Don't borrow

- **Benefit stat cards** ("4X faster than typing" in four identical dark cards). That's the hero-metric and identical-card-grid pattern our design laws ban, and "3 seconds" already lands in a headline.
- **AI language of any kind.** Wispr leads with "AI commands and auto-edits". Our differentiator is the opposite, so keep "Your child's voice is not training data" exactly as loud as it is.
- **The busy mega-nav.** Wispr has Product / Individuals / Teams / Pricing / About. A one-page app site should keep its four anchors and the Download pill.

## Open questions for Nick

- Avec: share screenshots of the sections you liked, or allow `avec.ai` / `wisprflow.ai` in the environment's network settings, and we'll do a proper pass on it.
- Can we record one or two real clips (with consent) for the hero play control?
- Pricing model to state on the site?
- Do we commission or draw illustrations, or start with simple vector spot art in-house?
