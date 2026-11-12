# hasinajalal.github.io

A one-page research and teaching portfolio for Hasina Jalal: static HTML and
CSS, no build step, no framework, no third-party requests. `index.html` is the
portfolio, `404.html` is the not-found page, and `.nojekyll` keeps GitHub Pages
from running Jekyll over the files.

## Where the content lives

All the content is in `index.html`, section by section:

| section | anchor | source on hasinajalal.com |
|---|---|---|
| hero, and the research agenda paragraph | — | `/` (the home page's two introductory paragraphs, plus the "Research and Teaching" paragraph) |
| Research: research interests, publications | `#research` | `/` (Research Interests, Fieldwork) and `/research` (all five publication groups) |
| Teaching: statement, institutions, feedback | `#teaching` | `/teaching` |
| Background: education, fellowships, public service | `#background` | `/` |
| Contact | `#contact` | `/contact`, `/` |

The body copy, citations, course names, dates and student comments are copied
verbatim, including curly apostrophes, en dashes and author order. Headings are
set in sentence case, and a few group labels are clearer than the source's own:
"Fieldwork and languages" for the source's "Fieldwork", and "University
teaching" for the teaching group this page used to call "Instructor of record"
— the source leaves that group untitled, and it holds a co-taught online course
as well as the courses taught solo. That is labelling only; the copy underneath
stays source-faithful, and the publication category labels keep the source's
capitals. Do not "fix" the record: `Graduate study in M.A., School of Foreign
Service, Georgetown University` and the `...` elisions inside the evaluation
excerpts are as the source has them. The one change of form in the copy is the
Carolyn B. Dexter award note, which drops the dash the source typed at the start
of the line (`- Recipient of the 2026 Carolyn B. Dexter Award, ...`); the words,
the year and its place under the revise-and-resubmit paper are unchanged.
Changing any of it makes this page disagree with the site it summarises.

Two sections of the live home page are deliberately not reproduced here:
"Civil Society and Advocacy" (with the awards paragraph) and "Latest" (the news
feed). They are not deleted from the source and should not be re-added without
the owner asking; the page is a research and teaching portfolio.

The feedback block reproduces three of the source's selected course-evaluation
comments. The source's separate "Unsolicited Messages from Students" subsection
is not reproduced; the in-page heading and the source's own "Selected Comments"
line disclose that this is a selection.

## Source gaps preserved

The source site has gaps and ambiguities. They are reproduced, not repaired —
this page must not invent what the source does not say:

- "Introduction to Political Science" is listed among the courses taught and has
  no institution entry of its own.
- The Georgetown line, `Graduate study in M.A., School of Foreign Service,
  Georgetown University`, is worded ambiguously about the degree; that wording
  is the source's, and it is left alone.
- The working paper `AI Under Authoritarianism: Taliban Digital Control and
  Women's Online Learning` has no author and no year.
- The SSRN entry (`Bypassing Gender Apartheid ...`) has no year and no paper id.
- There is no public email address and no downloadable CV; the page points at
  the contact form on the main site and says the full CV is available on
  request, as the source does.

## Previewing

No build, no server required:

```sh
python3 -m http.server 8000 --bind 127.0.0.1   # then open http://127.0.0.1:8000/
```

or open `index.html` directly. `index.html` uses relative asset paths, so it
works from the filesystem. `404.html` uses root-relative paths (`/assets/...`)
because GitHub Pages serves it at whatever URL was requested; keep those
root-relative, and test it behind the server above rather than from `file://`.

## Assets

| path | provenance |
|---|---|
| `assets/css/site.css` | written for this page, using the live site's theme tokens: paper `#F6F6F6`, ink `#281A39`, secondary ink `#5C5168`, link `#2061B7` |
| `assets/fonts/questrial-400.woff2`, `syne-400.woff2` | copied byte for byte from `hasina/dist/assets/fonts/` (the latin subsets `hasinajalal.com` serves); SIL OFL 1.1 |
| `assets/img/portrait-*.{webp,jpg}` | generated with Pillow from `hasina/assets/media/97020d_2c02f599eae04eb7ba74256d181a5d58~mv2.jpg`, the single image on the live home page, centre-cropped to its 348:324 box |
| `assets/img/mark.svg` | the live header's interlocking-squares SVG, unchanged paths |
| `assets/js/site.js` | marks the section currently in view for the in-page nav; the page reads fine without it |

`LICENSES.md` has the full provenance and the font licence; `assets/fonts/OFL.txt`
has the licence text itself.

If the portrait is ever replaced, regenerate all six files from the new source
with the same 348:324 crop and keep the intrinsic `width`/`height` on the `<img>`
so the page does not shift while the image loads.

## Editing conventions

- One `<h1>` (`Hasina Jalal`), `<h2>` per section, `<h3>` per group inside a
  section — the publication category labels are `<h3>`s under the Research
  `<h2>` too — and `<h4>` for an institution entry inside a group. Keep that
  order.
- Self-hosted fonts only; no CDN, no analytics, no external CSS or JS.
- Motion budget is one 150 ms first-paint fade, under
  `prefers-reduced-motion: no-preference`. Nothing else animates, on purpose.
- `@media print` hides the masthead and prints full URLs for external links.

## Publishing

Commit to the default branch; GitHub Pages serves the repository root. Nothing
else is required.
