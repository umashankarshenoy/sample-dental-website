# Lumina Dental Studio — Sample Website

A modern, fictional dental clinic website concept created by RBSolutions. It demonstrates an image-led homepage, responsive patient actions, service navigation, FAQs, a demo appointment request and a clinic-information assistant.

> This is a demonstration website. Lumina Dental Studio, its address, contact details, reviews and offers are fictional. The appointment form does not transmit or store information, and the assistant provides general sample content rather than medical advice.

## Technology

- React and TypeScript
- Next.js App Router-compatible structure
- Vinext/Vite build for Cloudflare Workers
- Responsive CSS

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by the development server.

## Production build

```bash
npm run build
npm run start
```

## Deployment

The generated application is compatible with Cloudflare Workers. Review Cloudflare's current deployment documentation and configure the project for your own account before publishing.

## Main files

- `app/page.tsx` — homepage and interactions
- `app/globals.css` — design system and responsive styling
- `app/layout.tsx` — page metadata and social sharing configuration
- `public/` — independent Lumina sample imagery

## License and usage

This repository is a website demonstration. Confirm image licensing and replace all sample clinic content with verified client information before using it for a real dental practice.
