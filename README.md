# Arden & Shear — Barbers & Hair Studio

A fictional barbershop and hair-studio website built as a portfolio piece. Next.js App Router, TypeScript, CSS custom properties, Lucide React (the sole general-purpose icon library), the official Lucide Lab `Razor` and `Mustache` icons, standalone SVG social-brand marks, and self-hosted fonts (Fraunces, Instrument Sans). All business details and staff profiles are fictional; contact details use reserved example data.

## Run it

```bash
npm install
cp .env.example .env.local   # then edit as needed
npm run dev                  # http://localhost:3000
npm run typecheck && npm run lint && npm run build
```

## Pages

- `/` — Home and selected work/services previews.
- `/services` — Full service and pricing menu.
- `/team` — Fictional team profiles.
- `/gallery` — Haircut gallery and salon interior photography.
- `/about` — Brand story and studio principles.
- `/contact` — Contact details, opening hours, and client-side demo form.

The contact form performs browser-side required-field, email, and length validation. It has no backend, does not store or transmit form entries, and does not send email. After submission, the form is replaced by a compact confirmation panel explaining that the demo is not connected to an inbox and no message was sent. Visitors can choose to return to the form.

## Configuration

| Variable | Purpose |
| --- | --- |
| `SITE_URL` | Canonical URL, Open Graph URLs, `robots.txt`, and sitemap |
| `ALLOW_INDEXING` | `false` by default; enables indexing and sitemap entries only when intentionally set to `true` |
| `INSTAGRAM_URL`, `FACEBOOK_URL`, `TIKTOK_URL` | Footer social destinations; set a real destination for a deployed demo or an empty value to make an icon static |

## Icons

Lucide is the only general-purpose interface icon system. Standard UI icons come from `lucide-react`; the specialist `Razor` and `Mustache` icons come from `@lucide/lab` and are rendered through Lucide React's `Icon` component. Social platforms use inline SVG brand marks because social logos are separate from Lucide's general-purpose icon catalogue.

## Content and assets

- `src/content/site.ts` — editable brand details, services, prices, staff, hours, contact and photo captions.
- `src/components/` — shared header/footer, service menu, team grid, photo and gallery components, and contact form.
- `src/app/globals.css` — design tokens, layouts, responsive styles, scrollbar, motion and accessibility preferences.
- `public/brand/` — full and compact logos, standalone mark, favicon set and web manifest.
- `public/assets/` — optimized website images and social-sharing image.
- `source-images/` — original generated image sheets. These originals are preserved.

The image derivatives can be recreated with `npm run photos` (`scripts/prepare-photos.py`). Brand exports can be recreated with `npm run brand` (`scripts/build-brand.py`, `scripts/export-brand.mjs`, `scripts/make-ico.py`, and `scripts/make-og.mjs`).

## Deployment notes

Set `SITE_URL` to the deployment origin. Keep `ALLOW_INDEXING=false` for private or public portfolio previews that should not appear in search results. The sitemap returns no public URLs while indexing is disabled, and `robots.txt` disallows crawling by default. Enable indexing only when the portfolio deployment is ready for that behavior.

## Contact and pricing layout

The Contact page has no separate introductory block; the form and studio details begin immediately below the navigation. The service selector is a native HTML `<select>` with grouped service options and a Lucide chevron positioned inside the field. The Services & Pricing page uses the earlier full `PageIntro` layout. Both pages adapt their grids and spacing to smaller screens.

## Recent responsive and navigation details

- The Services page uses the earlier `PageIntro` layout.
- The Contact page omits the standalone introductory block so the form and studio details begin immediately below the header.
- The service field remains a native, accessible `<select>` with a Lucide chevron positioned inside the field.
- The mobile navigation is a full-screen overlay with a visible compact logo, navigation links grouped at the top, the primary call-to-action pinned at the bottom, no tagline, Escape-key handling, focus trapping, and page-scroll locking.
- Tap highlight is suppressed on interactive controls, pointer-focused links and buttons do not retain a focus ring, keyboard focus remains visible, and button border-color transitions are synchronized with hover transitions.
- The contact page has generous vertical spacing while keeping its heading and form as the first page content; submitting the form replaces it with a confirmation state.
- Narrow-screen CSS includes targeted adjustments for viewport widths below 360px and below 300px.
- The Home page's About link has explicit spacing after the principles list.

## Git repository setup

This project is initialized as a Git repository on the `main` branch with `origin` set to `https://github.com/AndreyMarikov/arden-and-shear.git`. Project files are staged for the initial commit.

Before the first commit, configure your Git author identity if you have not already:

```bash
git config user.name "Your Name"
git config user.email "you@example.com"
git commit -m "Initial Arden & Shear website"
git push -u origin main
```

Authenticate with GitHub when prompted. Keep `.env.local` and real credentials out of Git; `.env.local` is ignored by `.gitignore`.
