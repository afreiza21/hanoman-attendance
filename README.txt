HANOMAN ATTENDANCE - CLOUDFLARE PAGES

FILES
- Index.html = frontend Hanoman Attendance
- functions/api.js = Cloudflare Pages Function proxy to Google Apps Script
- Code.gs = backend Google Apps Script (outside this folder)

CLOUDFLARE ENVIRONMENT VARIABLE
GAS_API_URL = URL Web App Google Apps Script, e.g.
https://script.google.com/macros/s/DEPLOYMENT_ID/exec

GOOGLE APPS SCRIPT
1. Paste updated Code.gs.
2. Run setupDatabase once.
3. Deploy > New deployment > Web app.
4. Execute as: Me.
5. Who has access: Anyone.
6. Copy /exec URL into Cloudflare variable GAS_API_URL.

CLOUDFLARE PAGES
1. Create a Pages project and upload the contents of this folder, or connect a Git repository.
2. No build command is required for this static frontend + Pages Function.
3. Add Environment Variable GAS_API_URL for Production (and Preview if testing there).
4. Deploy.

IMPORTANT
- Open the Cloudflare URL directly in Chrome/Edge/Safari. Do not embed the attendance page in Google Sites.
- Google Sites should only have a button/link to the Cloudflare attendance URL.
- Camera and GPS are requested from the Cloudflare HTTPS origin.
- The Pages Function proxies API requests to Apps Script, avoiding browser CORS issues.
