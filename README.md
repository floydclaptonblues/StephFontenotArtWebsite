# Steph Fontenot Art Website

A responsive static portfolio site for Gulf Coast visual artist Steph Fontenot.

## Design

- Periwinkle-marble visual system built with layered CSS gradients
- Responsive artwork gallery with category filters
- Keyboard-accessible lightbox
- Commission, mural, artist bio, and contact sections
- Search and social metadata for `stephfontenot.com`

## Artwork assets

The site expects the optimized WebP files listed in `ASSET_MANIFEST.md`. A complete build containing those images is maintained alongside this repository during the migration from the current site.

## Local preview

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

The included GitHub Actions workflow publishes the repository root to GitHub Pages. In repository settings, choose **GitHub Actions** as the Pages source. The `CNAME` file is configured for `stephfontenot.com`; DNS still needs to point the domain to GitHub Pages when the site is ready to go live.

## Copyright

All artwork, photographs, and related visual material are © Steph Fontenot. They are included only for this portfolio and are not licensed for reuse.
