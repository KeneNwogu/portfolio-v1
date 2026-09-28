# Kcee.live Revamp — Progress Tracker

Following `kcee-portfolio-revamp-plan.md`. This file tracks what has been implemented.

---

## Phase 1 — Audit ✅

**Findings (baseline):**

| Item | Status |
|---|---|
| Framework | Vue 3 (`<script setup>`) + Vite 4 + Tailwind 3 — kept as-is (plan §41, Rule 1/3) |
| Routing | None — single page with anchor links |
| Component structure | ❌ Everything in one 767-line `App.vue` — needs refactor (§39) |
| CSS strategy | Tailwind utility classes, no design tokens — needs token layer (§55) |
| Animation deps | None (only CSS transitions) — keep CSS + IntersectionObserver (§41) |
| Content/data | Projects, work experience, socials, articles hardcoded in `App.vue` script — extract to data module (§39) |
| Assets | Project screenshots (webp/png/jpg), company logos (svg/png), `resume.pdf` |
| Fonts | ❌ None loaded — system default. Needs display + body + mono (§28) |
| SEO | ⚠️ Only `<title>` — no description, OG, canonical, theme-color, favicon, structured data (§44) |
| Analytics | Google Analytics (gtag G-CRETEXMMBL) in `index.html` — must preserve (Rule 2) |
| Sections (old order) | Hero/profile card → Contact links → Work experience → Projects → Blog |
| Known issues | Nav "Services" link is dead; nav active state is click-based not scroll-based; no mobile menu; no reduced-motion support; no scroll reveals; `hover:scale-110` on project images (too aggressive, §10); generic glassy card look (§2 avoid list) |

**Content to preserve (Rule 2/6):** all projects, all 9 work-experience entries, social links, articles/blog section, CV download, GA, email.

---

## Phase 2 — Design Foundation

- [x] Color tokens (base/surface/line/ink/muted/accent) in `tailwind.config.js` + CSS vars in `style.css`
- [x] Typography tokens: Space Grotesk (display) / Inter (body) / JetBrains Mono (mono), loaded with `display=swap` + preconnect
- [x] Fluid type scale with `clamp()` (hero, section title, project title, body, meta)
- [x] Container: `max-w-[1200px]`, consistent gutters
- [x] Section vertical rhythm (desktop ~140px, mobile ~88px)
- [x] Button/link system (`ui/BaseButton.vue`, `ui/ArrowLink.vue`) with hover/active/focus-visible states
- [x] Border/surface styles, subtle background treatment (grid + radial glow, §30)
- [x] Global focus-visible ring, selection color

## Phase 3 — Navigation + Hero

- [x] `Navbar.vue`: compact sticky nav — transparent at top, blur + 1px border + reduced height after scroll (180–250ms ease-out)
- [x] Scroll-spy active section (IntersectionObserver), animated underline
- [x] "● Available" status with subtle pulse dot (desktop)
- [x] Mobile full-screen menu (opacity/transform, 200–300ms), body scroll lock
- [x] `HeroSection.vue`: eyebrow → line-masked heading reveal → description → CTAs → metadata (50–100ms stagger, 400–700ms)
- [x] Hero background: faint grid + radial glow (CSS/SVG only, no canvas)
- [x] Cursor-following radial glow (`useMouseGlow` composable — rAF + CSS vars, no state updates; disabled on touch/reduced-motion)
- [x] CTAs: "View selected work" + "Get in touch" (arrow micro-interaction), CV download preserved

## Phase 4 — Projects

- [x] `data/portfolio.js` — content separated from presentation (featured projects, secondary projects, experience, capabilities, socials, articles)
- [x] `ProjectShowcase.vue` — editorial alternating layout (image left/right), project number, role, engineering, impact, stack, links
- [x] Non-screenshot visuals for backend projects (§11): terminal snippet (Chowdeck), flow diagram (ITMO Bot)
- [x] `ProjectCard.vue` — compact cards: number, name, one-liner, primary tech, arrow, hover (title +4px, arrow →, image scale 1.03, 200–350ms)
- [x] Responsive: single column, visual above content on mobile
- [x] Lazy-loading + explicit aspect ratios for below-fold images

## Phase 5 — Experience + Capabilities

- [x] `ExperienceTimeline.vue` — vertical timeline, date column + thin line + nodes (desktop), stacked (mobile)
- [x] Scroll-triggered progressive reveal per entry (IntersectionObserver via `Reveal.vue`)
- [x] `Capabilities.vue` — capability groups (Backend / Frontend / Data & ML / Infrastructure) + PRIMARY vs WORKING WITH split (§15, no fake percentage bars)
- [x] Row hover reveals detail line (§14), always visible on touch/mobile

## Phase 6 — About + Contact + Footer

- [x] `AboutSection.vue` — short, human copy (problems enjoyed, engineering values, currently exploring), location + since-2020 metadata
- [x] Technical easter egg (§20): small `whoami` terminal card in About
- [x] `ContactSection.vue` — big "LET'S BUILD SOMETHING." CTA, copy-email button with "Email copied" confirmation (1.8s), social links (X, LinkedIn, GitHub, Email only)
- [x] `FooterSection.vue` — minimal: name, one-liner, links, © 2026, "Built with Vue + Vite + Tailwind"
- [x] CV download preserved

## Phase 7 — Motion Polish

- [x] `Reveal.vue` animation abstraction (opacity 0→1, translateY 16px→0, 500–600ms, stagger prop)
- [x] Consistent durations: fast 150–250ms / medium 300–500ms / hero 500–800ms
- [x] Micro-interactions: arrow links +4px, nav underline, status pulse dot, card hover
- [x] Only transform/opacity animated (§37)
- [x] One dominant animation at a time (§38) — hero entrance only on load

## Phase 8 — Performance

- [x] No new JS dependencies (CSS + IntersectionObserver only, Rule 4)
- [x] Fonts: preconnect + `display=swap`
- [x] Mouse glow uses rAF + CSS variables, never React/Vue state (§8)
- [x] Images below fold lazy-loaded with fixed aspect ratios (CLS ≈ 0)
- [x] No infinite animations on large DOM trees
- [ ] Lighthouse run + Core Web Vitals check (needs deployed/dev-server measurement)

## Phase 9 — Accessibility

- [x] Semantic HTML: `header/nav/main/section/footer`, correct h1→h2→h3 hierarchy
- [x] Keyboard: skip-to-content link, visible `:focus-visible` states, menu closes on Escape
- [x] `prefers-reduced-motion`: reveals shown immediately, glow/parallax/pulse disabled (§26)
- [x] Alt text on meaningful images, `aria-hidden` on decorative SVGs
- [x] Buttons for actions (copy email, menu), links for navigation
- [x] Touch targets ≥44px, contrast checked (ink/muted on base)
- [x] `aria-current`, `aria-expanded`, `aria-label` where needed

## Phase 10 — SEO + Meta

- [x] Title, description, canonical, theme-color in `index.html`
- [x] Open Graph + Twitter/X metadata
- [x] JSON-LD structured data: `Person` + `WebSite` (real content only, Rule 5)
- [x] Favicon (`public/favicon.svg` monogram)
- [x] GA snippet preserved untouched (Rule 2)

## Final QA

- [x] Production build passes (`vite build`) with no ESLint errors
- [x] No dead links (removed phantom "Services" nav item), no placeholder content
- [x] No fabricated claims — all project/experience copy restructured from existing content only (Rule 5)
- [x] No horizontal overflow (grid/terminal visuals constrained, `overflow-x-auto` on terminal `pre`)
- [ ] Manual cross-browser check (Chrome/Firefox/Safari, 320→1920px widths) — needs human/desktop browser; dev server: `npm run dev`
- [ ] Lighthouse before/after comparison

---

## Architecture (implemented, §39)

```text
src/
  data/portfolio.js          # all content, separate from presentation
  composables/
    useMouseGlow.js          # rAF pointer glow via CSS vars
    useScrollSpy.js          # active section tracking
  components/
    SiteNav.vue              # (renamed from Navbar — eslint multi-word rule)
    HeroSection.vue
    SectionHeader.vue
    SelectedWorkSection.vue
    ProjectShowcase.vue
    ProjectCard.vue
    CapabilitiesSection.vue
    ExperienceTimeline.vue
    AboutSection.vue
    WritingSection.vue
    ContactSection.vue
    FooterSection.vue
    visuals/
      TerminalVisual.vue     # styled terminal snippet (Chowdeck)
      FlowDiagram.vue        # linear system-flow diagram (ITMO)
    ui/
      ScrollReveal.vue       # (renamed from Reveal) IntersectionObserver wrapper
      ArrowLink.vue
      BaseButton.vue
  App.vue                    # composition only
```

Page order (§4): Navbar → Hero → Selected Work → Capabilities → Experience → About → Writing → Contact → Footer

## QA fixes applied during implementation

- Renamed Tailwind color token `base` → `canvas` (collided with core `text-base` font-size utility)
- `text-balance` class → inline `text-wrap: balance` (utility requires Tailwind ≥3.4, project is on 3.3)
- Hero line-mask: added padding/negative-margin so descenders aren't clipped by `overflow: hidden`
- Nav "Available" status moved to `lg:` breakpoint so links don't crowd at 768px
- `h-full` on project cards for equal-height grid rows
- Removed unused asset imports (company logos, social icons, chowdeck screenshot) — dist now only ships assets actually rendered; removed "Go" from skills (not supported by real content, Rule 5)
- Production build passes clean: **0 ESLint errors/warnings**, JS 102 kB (36 kB gzip), CSS 24 kB (5.5 kB gzip)

## Backlog / Optional (not yet done)

- [ ] Floating cursor-following project preview on desktop (§12) — deferred; showcases already have static visuals, adds JS cost
- [ ] Magnetic CTA button (§49) — optional, deferred
- [ ] Project image parallax (§51) — optional, deferred
- [ ] Mini case-study pages for strongest projects (§47) — needs route/page structure; deferred
- [ ] Convert screenshots to responsive `srcset`/AVIF variants (§36)
