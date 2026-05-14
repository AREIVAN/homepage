# AREIVAN Homepage

Personal product-lab portfolio for software, learning tools, mobility products, robotics experiments and industrial dashboards.

## Highlights

- **Portfolio command center:** presents active products such as Apex Ride, TypeLearn, Torneos Dashboard and Paro Cero from a single landing page.
- **Robotics lab section:** documents robotics, embedded systems and automation projects with build context, hardware/software focus and next steps.
- **Accessible interactions:** includes keyboard-aware contact and project preview modals, focus restoration and reduced-motion handling.
- **Production-minded deployment:** ships SEO metadata, Vercel SPA rewrites and hardened browser security headers.
- **Maintainable frontend structure:** pages compose sections, reusable content lives in data files and shared UI stays isolated from page logic.

## Live Site

- [areivan.com](https://areivan.com)
- [Security posture](https://areivan.com/security)
- [Robotics lab](https://areivan.com/robotics)

## Getting Started

```bash
git clone https://github.com/AREIVAN/homepage.git
cd homepage
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Available Scripts

```bash
npm run dev      # Start the Vite development server
npm run build    # Create a production build in dist/
npm run preview  # Preview the production build locally
```

## Tech Stack

- **React 19** — UI composition
- **Vite** — local development and production builds
- **Tailwind CSS** — responsive styling and design system utilities
- **Framer Motion** — page, card and modal motion with reduced-motion support
- **Vercel** — deployment, rewrites and security headers

## Project Structure

```text
src/
├── components/        # Shared UI primitives, icons and modals
├── data/              # Portfolio copy, project data and contact metadata
├── pages/             # Route-level page composition
├── sections/          # Page sections grouped by domain
├── routes.jsx         # Lightweight route resolver
└── styles.css         # Tailwind entrypoint and global styles
```

## Routes

- `/` — main AREIVAN product-lab portfolio
- `/robotics` — robotics and embedded systems project lab
- `/security` — public security posture and browser protections

Routing stays intentionally lightweight in `src/routes.jsx`; the app does not use React Router because it only needs static page selection.

## Security

The Vercel configuration adds a conservative baseline for a public portfolio site:

- HTTPS enforcement through HSTS
- frame protection and MIME sniffing protection
- strict referrer policy
- minimal browser permissions policy
- content security policy scoped to the portfolio and embedded project previews

## Development Notes

- Keep page files thin: compose sections and own page-level state only.
- Move reusable copy, links, project lists and contact data into `src/data/`.
- Add visible blocks as focused section components under `src/sections/<page>/`.
- Respect reduced-motion users when adding animation.

## License

No open-source license is currently included. All rights reserved unless a license file is added.
