# Mycelis + Virelis website

A lightweight, dependency-free static website for GitHub Pages.

## Routes

- `index.html` — product-family homepage and waitlist preview
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

- The waitlist interface is deliberately unconnected. It does not submit or store email addresses.
- No finished Virelis render or photography has been supplied. Clearly labelled concept placeholders now fill the Virelis homepage and product-page image positions, with separate landscape and portrait crops for desktop and mobile.
- The homepage and Mycelis hero use the supplied green development render. The homepage also identifies the supplied black-and-white machine as the current September 2026 prototype.

When a real mailing-list service is connected, update `privacy.html` at the same time.
