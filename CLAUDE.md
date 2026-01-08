# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Working Principles

Always avoid exaggeration; think and answer realistically and objectively. Always think step by step and break down the logic behind the answer. If the context is unclear or you do not know the answer, explicitly state that and ask clarifying questions instead of guessing or making up information. Furthermore, adopt a critical perspective: critique my assumptions and point out potential risks, and also critique your own answer for potential biases or logical fallacies before responding.

## Project Overview
This is a static academic portfolio website for Jon Barron (jonbarron.info), hosted on GitHub Pages. It's a single-page HTML site showcasing research publications, bio, and contact information.

## Architecture
Pure static site with no build process:
- **Frontend**: HTML5 with inline CSS and vanilla JavaScript
- **Hosting**: GitHub Pages (master branch auto-deploys)
- **No dependencies**: No package.json, no build tools, no frameworks

## File Structure
- `index.html` - Main entry point containing all content (bio, publications list)
- `stylesheet.css` - Global styles and Lato font definitions
- `images/` - All visual assets (thumbnails, videos, profile photo)
- `data/` - BibTeX files (`.bib`) for each publication and CV (`.pdf`)
- `mipnerf/`, `mipnerf360/`, `zipnerf/` - Standalone project pages with their own assets

## Publication Entry Pattern
Each research paper in `index.html` follows a strict two-column table row pattern:

**Left cell (20-25% width)**: Interactive visual teaser
- Uses nested `<div>` structure with class `one` (container) and `two` (overlay)
- JavaScript hover handlers toggle between static image and animated content
- Pattern: `onmouseout="UNIQUEID_stop()" onmouseover="UNIQUEID_start()"`
- Each entry requires unique function names (e.g., `radmesh_start()`, `radmesh_stop()`)

**Right cell (75-80% width)**: Publication metadata
- Title wrapped in `<a>` with class `papertitle`
- Authors as individual `<a>` links (current author in `<strong>`)
- Conference/journal, year
- Links (project page, arXiv, video, etc.)
- Brief abstract in `<p>` tags

**Highlighted publications**: Add `bgcolor="#ffffd0"` to the `<tr>` tag

## JavaScript Hover Effect Template
Each publication requires unique JavaScript functions:
```javascript
function UNIQUEID_start() {
  document.getElementById('UNIQUEID_image').style.opacity = "1";
}

function UNIQUEID_stop() {
  document.getElementById('UNIQUEID_image').style.opacity = "0";
}
UNIQUEID_stop()
```
Replace `UNIQUEID` with a descriptive identifier (e.g., paper name).

## CSS Animation System
The hover effect relies on CSS classes in `stylesheet.css`:
- `.one` - 160x160px container with relative positioning
- `.two` - Absolute positioned overlay with opacity transition (0.2s ease-in-out)
- `.highlight` - Yellow background (#ffffd0) for emphasized publications

## Testing
Open `index.html` directly in a browser. No server or build step required.

## Deployment
Push to `master` branch - GitHub Pages auto-deploys immediately.

## Common Modifications

### Adding a new publication
1. Prepare assets in `images/` (thumbnail JPG/PNG, optional video MP4)
2. Add BibTeX file to `data/`
3. Insert new `<tr>` at top of publications table (line ~56, after `<tbody>`)
4. Use publication entry pattern above with unique IDs
5. Maintain reverse chronological order

### Updating profile/bio
Edit the first `<table>` section in `index.html` (~lines 16-44)
