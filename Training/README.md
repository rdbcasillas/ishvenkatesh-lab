# Training page — Venkatesh Lab

A self-contained page describing what a one-year traineeship in the lab
provides. Built from a survey of twelve former trainees, published with their
written consent.

Suggested nav label: **Training** (best placed straight after *Team*).

---

## Two ways to use this

### Option A — drop it in as a standalone page  *(simplest)*

`standalone.html` is a complete, working page. Rename it (e.g. `training.html`),
put it anywhere on the server, and link to it from the nav. Nothing else needed.

Use this if the training page can sit on its own, without the site header and
footer around it.

### Option B — integrate into the site template  *(keeps site chrome)*

Use the three files in `embed/`:

| File | What to do with it |
|---|---|
| `embed/content.html` | Paste the markup into your page template, inside your normal content area. |
| `embed/training.css` | Link it in `<head>`, or append to the site stylesheet. |
| `embed/training.js`  | Include before `</body>`, or with `defer`. |

The markup is wrapped in `<div class="ivl-training">`. **Keep that wrapper** —
every CSS rule and every script query is scoped to it.

---

## Notes for whoever integrates this

**No external requests.** No web fonts, no CDN scripts, no image URLs. The
twelve portraits are embedded directly in the HTML as base64. The page works
offline and needs no asset pipeline. This is why `content.html` is ~150 KB.

**CSS is fully scoped.** Every selector sits under `.ivl-training`, and the
stylesheet opens with a scoped reset that neutralises site-wide rules targeting
bare elements (`section`, `ul`, `img`, `table`, `*`). Tested against a
deliberately hostile stylesheet — see `integration-test.html`, which loads the
embed inside a page whose CSS tries to override everything. Nothing leaks in
either direction.

**One exception:** if the site stylesheet uses `!important` on generic elements
(e.g. `img { width: 200px !important }`), that will still win. Nothing scoped
can beat it. If the page looks wrong after integration, check for `!important`
first.

**Themes.** The page follows the visitor's light/dark preference using the lab
site's own palette (`#FBFAF7` / `#1F2A1C` / accent `#2F5233`). If the site
forces one theme with a `data-theme` attribute on `<html>`, this page follows it.

**Interactivity** (all in `training.js`, ~3 KB, no dependencies):
- the four module cards smooth-scroll to their sections
- each technique domain expands to its full list; one button opens all nine
- the dot matrix and the distribution strip cross-highlight on hover/tap
- works without JavaScript too — content is all in the HTML, just static

**Accessibility.** Keyboard-focusable controls with visible focus states, a live
region for the chart readout, real table semantics for the matrix, alt text on
images. Please don't strip these when reformatting.

**Responsive.** Tested at 375 px and 1280 px. The technique matrix scrolls
horizontally inside its own container on narrow screens; the page body never
scrolls sideways.

---

## Editing content later

`standalone.html` and `embed/content.html` hold the same content — if you edit
one, mirror the change in the other, or regenerate from the source file.

Text worth knowing about:
- The introduction is written in the PI's first person voice.
- The fees line links to `https://ccmb.res.in/academics/#Training-program`.
- Testimonials carry each person's former role in the lab, then where they are now.
- The footer states the technique list is the union across all twelve trainees,
  and that no single trainee learned all of them. Please keep that sentence.
