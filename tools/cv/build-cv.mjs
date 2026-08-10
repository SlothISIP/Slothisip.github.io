/**
 * Renders tools/cv/cv.html to src/data/CV_JuO_Kim.pdf using headless Chrome.
 *
 * The CV used to live in the repo as a PDF binary with no source, so typos in it
 * (a leaked `&mdash;` entity, a stale proficiency level) could not be fixed
 * without re-exporting by hand. Keep cv.html as the single source of truth and
 * regenerate with `npm run build:cv`.
 */

import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, rmSync, statSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..', '..');
const input = path.join(here, 'cv.html');
const output = path.join(root, 'src', 'data', 'CV_JuO_Kim.pdf');

const CANDIDATES = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  '/usr/bin/google-chrome',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
].filter(Boolean);

const chrome = CANDIDATES.find((p) => existsSync(p));
if (!chrome) {
  console.error('No Chrome/Edge binary found. Set CHROME_PATH to one.');
  process.exit(1);
}

// A throwaway profile: printing into the user's live profile fails when Chrome
// is already running.
const profile = mkdtempSync(path.join(tmpdir(), 'cv-chrome-'));

try {
  execFileSync(
    chrome,
    [
      '--headless=new',
      '--disable-gpu',
      '--no-sandbox',
      `--user-data-dir=${profile}`,
      '--no-pdf-header-footer',
      '--run-all-compositor-stages-before-draw',
      '--virtual-time-budget=4000',
      `--print-to-pdf=${output}`,
      pathToFileURL(input).href,
    ],
    { stdio: ['ignore', 'inherit', 'inherit'] },
  );
} finally {
  // Chrome can still hold locks on its profile files right after exit (EBUSY on
  // Windows); a leftover temp dir is not worth failing the build over.
  try {
    rmSync(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
  } catch {
    /* ignore */
  }
}

const { size } = statSync(output);
console.log(`Wrote ${path.relative(root, output)} (${(size / 1024).toFixed(1)} KB)`);
