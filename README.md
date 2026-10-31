# Mycelis + Virelis website

A lightweight, dependency-free static website for GitHub Pages.

## Routes

- `index.html` — product-family homepage and EmailOctopus mailing list
- `mycelis.html` — Mycelis product story
- `virelis.html` — Virelis product story
- `about.html` — development approach
- `contact.html` — contact details
- `privacy.html` — privacy information

## Preview

Open `index.html` directly or serve this directory with a static file server.

## GitHub Pages

Place this directory's contents at the repository root. In **Settings → Pages**, choose **Deploy from a branch**, then select `main` and `/ (root)`.

All internal paths are relative and require no backend, build process, package installation, or environment variables.

## Current limitations

- The mailing list uses the supplied EmailOctopus inline form. Its fields and confirmation behaviour are managed in EmailOctopus; `privacy.html` describes this connection.
- Product renders and prototype photos use matched 1000 × 1250 (4:5) photographic crops on the homepage and product pages, retaining the supplied machines and their original settings. The Virelis prototype carries a November 2026 corner label. Earlier Virelis placeholder renders are no longer used on either page.
- The homepage and Mycelis hero use the supplied green development render. Both pages use the new supplied photo of pink oyster mushrooms growing in the black-and-white machine as the current October 2026 prototype. Mycelis is nearly ready for its first in-person showing; a date has not been announced.

Keep `privacy.html` aligned with any future mailing-list service changes.

## Layout

The active pages share a 1280px maximum width, consistent columns and spacing, and responsive type sizes. Product images share the same frame proportions. Layout has been checked on all six pages at 1920, 1440, 1024, 820, 390 and 320px, including the mobile navigation; the existing EmailOctopus embed was also checked on desktop and mobile without submitting data.

## Content

The pages explain the side-loading magnetic Mycelis window, ready-to-grow cartridges, Virelis shelves and current screen controls, prototype progress, and practical questions about using or ordering a machine. Copy uses a conversational brand voice. Final specifications, prices, seed/cartridge ranges and release dates are not invented; unconfirmed details are identified as such. FAQ answers use native HTML details elements and work without JavaScript.
