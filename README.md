# Mycelis + Verdelis static website

This is a dependency-free static website for GitHub Pages. It contains the Mycelis and Verdelis product pages, an about page, and a non-submitting waitlist interface prepared for a future form provider.

## Preview locally

Open `index.html` in a browser, or serve this directory with any static file server.

## Publish with GitHub Pages

1. Put the contents of this directory at the root of a GitHub repository.
2. In **Settings → Pages**, choose **Deploy from a branch**.
3. Select branch `main`, folder `/ (root)`, then save.

The site uses only relative URLs, so it works on the repository's GitHub Pages URL without a custom domain.

## Future waitlist integration

The waitlist UI intentionally does not submit or store emails. Connect the form in `index.html` to the selected provider when ready, and update `privacy.html` to describe the data collection and retention details.

## Assets

Mycelis imagery and locally hosted font files are retained in `assets/`. No Verdelis product image has been supplied, so the Verdelis pages deliberately use restrained editorial status panels rather than fabricated product renders. Replace those panels with approved Verdelis photography or renders when available.
