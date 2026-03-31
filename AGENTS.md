# Paper Site — Agent Notes

## Deployment

Production domain: **zaius.ai** (Cloudflare Pages project: `zaius-landing`)

```bash
# From site/paper/
npm run audio        # regenerate ElevenLabs TTS if section text changed
npm run build
npx wrangler pages deploy .svelte-kit/cloudflare --project-name zaius-landing --branch=main
```

`--branch=main` is required. Without it the deploy goes to Preview only and zaius.ai does not update.

## Audio

Section text lives in `scripts/generate-audio.ts` (the `SECTIONS` array). Keep it in sync with the paper whenever section text changes. Output goes to `static/audio/` (MP3s + JSON alignments + `manifest.json`).

Sections with audio: `section-title`, `section-abstract`, `section-1` through `section-8`. Section IDs in the audio script map to `id=` attributes on `PaperSection` components in `src/routes/(site)/paper/+page.svelte`.

## Static Assets

`static/logomark.png` — the blue figure logomark. Must be committed to git; deploys without `--commit-dirty` use the committed version.
