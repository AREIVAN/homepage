# AREIVAN frontend structure

This app follows a page-composition structure inspired by the Paro Cero landing page: pages assemble sections; sections render one business block; shared UI and data live outside the page files.

## Where things go

- `src/pages/` — route-level page composition only. Keep these files thin.
- `src/sections/home/` — homepage sections, one JSX file per visible section.
- `src/sections/robotics/` — robotics page sections, one JSX file per visible section.
- `src/sections/shared/` — reusable full-width page sections, like CTA and footer.
- `src/components/common/` — small reusable UI primitives used by multiple sections.
- `src/components/modals/` — modal/dialog components.
- `src/components/icons/` — local SVG icon components.
- `src/data/` — reusable page content, contact data, project data and validation helpers.

## Rules

- Do not duplicate text, links, icons or arrays inside sections if they are reused. Move them to `src/data/`.
- Do not invent new visual resources when existing icons/components/data already express the same concept.
- Keep sections focused: one section should own one visible block of the page.
- Keep page files boring: import sections, pass state handlers, render modals.
- Route selection lives in `src/routes.jsx`; page files should not inspect `window.location` directly.

## Routing

Routes are intentionally lightweight and live in `src/routes.jsx`. Do not add React Router unless the app needs nested routing, route params, loaders, or navigation state.

## Adding a section

1. Create `src/sections/<page>/<Name>Section.jsx`.
2. Export it from that folder's `index.js`.
3. Import it in the relevant page from the folder barrel.
4. Put reusable arrays, links or copy in `src/data/` instead of hardcoding them twice.
