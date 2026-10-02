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
- No finished Virelis render or photography has been supplied. Clearly labelled concept placeholders now fill the Virelis homepage and product-page image positions, with separate landscape and portrait crops for desktop and mobile.
- The homepage and Mycelis hero use the supplied green development render. Both pages use the new supplied photo of pink oyster mushrooms growing in the black-and-white machine as the current October 2026 prototype. Mycelis is nearly ready for its first in-person showing; a date has not been announced.

Keep `privacy.html` aligned with any future mailing-list service changes.
