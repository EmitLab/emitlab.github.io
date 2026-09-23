# VLDB website concept

A responsive, dependency-free static prototype for review. The home page contains the proposed menu, news and calls, a tabbed popular-content area, and landing sections for About, Conferences, Publications, Awards, Community, Governance, Resources, Archives, and Contact.

## Deploy on GitHub Pages

1. Create a GitHub repository and place **all files in this folder** at the repository root (`index.html`, `styles.css`, `script.js`, and `assets/vldb-mark.png`).
2. In the repository, open **Settings → Pages**, select **Deploy from a branch**, and choose the `main` branch and `/ (root)` folder.
3. Once Pages finishes building, open the displayed URL. The site also works by opening `index.html` locally. No build step is required.

## Content to connect before an official launch

- The news list and featured story are explicitly example entries. Feed verified news items and dates from the official editorial workflow.
- The “Popular with the community” tabs demonstrate presentation only. Replace entries with actual ranked papers, artifacts, and media; define metrics, time window, and refresh schedule. The prototype does not claim usage or citation rankings.
- Calls currently include placeholders without invented deadlines. Add accurate dates and approved destinations.
- Placeholder links marked “Link pending” or shown as placeholders in the UI display a short message when clicked. Assign their real destinations in `index.html` before launch.
- Conference, publication, awards, and organization links point to existing sites where available. Audit URLs and editorial text before making this the official website.

## Files

- `index.html`: content and navigation
- `styles.css`: branding and responsive layouts
- `script.js`: mobile menu, accessible popular-content tabs, and placeholder-link notices
- `assets/vldb-mark.png`: logo image supplied for this concept

The typography uses Google Fonts when available and falls back to local system fonts. All other assets are local.
