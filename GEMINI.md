# Jon Barron's Academic Website

## Project Overview
This repository contains the source code for Jon Barron's public academic website ([jonbarron.info](https://jonbarron.info/)). It is a static website hosted on GitHub Pages, designed to showcase research publications, bio, and contact information.

## Architecture
The project is a pure static site with no build process or backend.
*   **Frontend:** HTML5, CSS3, and vanilla JavaScript (inline).
*   **Hosting:** GitHub Pages (configured via `CNAME`).

## Directory Structure
*   **`index.html`**: The main entry point. Contains all the content, including the bio and the list of research publications.
*   **`stylesheet.css`**: Global styles for the website.
*   **`images/`**: Stores all visual assets, including project thumbnails, videos (mp4), and the profile picture.
*   **`data/`**: Contains auxiliary data such as BibTeX files (`.bib`) for each publication and the CV (`.pdf`).
*   **`mipnerf/`, `mipnerf360/`, `zipnerf/`**: Sub-directories for specific project pages.

## Common Tasks

### Adding a New Publication
To add a new research paper to the list:

1.  **Prepare Assets:**
    *   Add a thumbnail image (JPG/PNG) and optionally a video (MP4) to the `images/` directory.
    *   Add the BibTeX file to the `data/` directory.

2.  **Edit `index.html`:**
    *   Locate the `<table style="width:100%...>` section containing the research entries.
    *   Insert a new `<tr>` element at the top of the table (below the `<tbody>` tag) to ensure reverse chronological order.
    *   **Structure of a Row:**
        *   **Left Cell (25%):** Contains the visual teaser. It usually uses a `<div>` with `onmouseover`/`onmouseout` events to toggle between a static image and a video/animated image.
        *   **Right Cell (75%):** Contains the Title, Authors (with links), Conference/Journal details, Links (arXiv, Project Page, etc.), and a brief abstract.

    *   **JavaScript Template for Hover Effect:**
        Ensure the `id`s for the image/video elements and the JavaScript function names are unique for each entry (e.g., `papertitle_start()`, `papertitle_stop()`).

### Updating Profile
*   Edit the first `<table>` in `index.html` to update the bio text, profile links, or contact info.

## Development
*   **Testing:** Since it's a static site, you can view it by simply opening `index.html` in a web browser.
*   **Deployment:** Changes pushed to the `master`/`main` branch are automatically deployed by GitHub Pages.
