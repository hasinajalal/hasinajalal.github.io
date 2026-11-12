# Licences and provenance

Everything on this site is either Hasina Jalal's own material, a byte-for-byte
copy of an asset from her live site, or a font under the SIL Open Font License.
Nothing is licensed from a third party, and nothing is fetched at runtime.

## Fonts

| family | file | licence |
|---|---|---|
| Questrial | `assets/fonts/questrial-400.woff2` | SIL Open Font License 1.1 |
| Syne | `assets/fonts/syne-400.woff2` | SIL Open Font License 1.1 |

Both are the unmodified latin subsets that `hasinajalal.com` serves for its own
type; the copies here come from `hasina/dist/assets/fonts/` in this repository
(`aed7469041f3.woff2` and `d5491616ceec.woff2`), which the mirror build saved
byte for byte. Copyright notices and the full licence text are in
`assets/fonts/OFL.txt`.

## Portrait photograph

`assets/img/portrait-{348,696,1044}.{webp,jpg}` are generated from one file:

- source: `hasina/assets/media/97020d_2c02f599eae04eb7ba74256d181a5d58~mv2.jpg`
  (4096 × 4096 JPEG, sha256 `0beeeaefc3b01bdca02e74ad8f0c451a5531918945cc5d99432821d8f794dbb7`)
- it is the single image on the home page of `hasinajalal.com`, and the same
  photograph is the hero here
- derivation: centre-cropped to the live site's 348:324 box (4096 × 3814, top
  offset 141 px), then resized to 348, 696 and 1044 px wide with Pillow
  (WebP quality 82, JPEG quality 84). No retouching, filters, or recolouring.
- the image's alt text is `Hasina Jalal`; the live site's `alt="4.JPG"` was a
  Wix filename and is not carried over

© Hasina Jalal. Not licensed for reuse.

## Brand mark

The interlocking-squares mark in the masthead, the footer and the favicon is the
existing mark from the header of `hasinajalal.com`: the same five `<path>`
elements, the same `viewBox="20 19.997 160 160.006"`, the same ink `#281A39`.
It is not a redesigned or substituted logo. `assets/img/mark.svg` is that SVG
with a paper-coloured backing rectangle so it reads as a favicon.

## Site text

The prose, citations, course names, dates and evaluation excerpts are Hasina
Jalal's own, copied from `hasinajalal.com` (see `README.md` for the exact
source pages). © Hasina Jalal.
