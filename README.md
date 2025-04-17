# Portfolio Website

A personal portfolio website built with Next.js and Chakra UI, designed with a focus on performance, maintainability, and clean design.


## Tech Stack

### Framework: [Next.js (App Router)](https://nextjs.org/docs/app)
- Built-in support for SSG and CSR
- SEO-friendly out of the box
- High performance (automatic code splitting, image optimization)
- Free tier available via [Vercel](https://vercel.com)
- Strong community and documentation

### Rendering Strategy: SSG + Client-Side Rendering
- Static site generation (SSG) used by default for performance and SEO
- Client components (via `use client`) used only when interactivity is needed (e.g., `useState`, `useEffect`)

### Component Library: [Chakra UI v3](https://chakra-ui.com)
- Custom Chakra theme
- Accessible, responsive, customizable components
- Simple and lightweight for this project’s needs
- v3 supports SSR


## Design

### Animations
- Used plain CSS keyframes for better performance and SSR compatibility
- Chose not to use Framer Motion or `@emotion/react` because only simple animations are included

### Images
- Custom SVG illustrations created in Figma
- Lightweight, scalable, and easy to style in code

### Prototyping & UI/UX Process
- Designs created in [Figma](https://figma.com) following a structured design process:
  - Wireframes → Branding → Prototypes → User Testing → High-fidelity
  - Referenced design methods: Double Diamond, Design Thinking, User-Centred Design
  - Applied principles: Visual Hierarchy, Gestalt, Fitts' Law, UX Honeycomb


## Deployment

- Hosted on [Vercel](https://vercel.com)


## Project Management

- UI/UX research and planning documented in [Coda](https://coda.io)
- Design & tech documentation managed via personal templates created in Google Docs
- Process focused on structure, consistency, and clarity


## Todos

- [ ] Finalize accessibility improvements
- [ ] Run and implement performance audits
- [ ] Improve component reusability
