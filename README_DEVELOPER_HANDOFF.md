# Sovereignty Logistics — Production Handoff

Preferred public URL: `https://www.sovereigntylogistics.com`
Intended contact mailbox: `operations@sovereigntylogistics.com` (owner must create and verify it)

## Deployment options
- **Netlify:** deploy this folder directly. The service-assessment form is already marked up for Netlify Forms. Enable form notifications in the dashboard.
- **Apache/cPanel/GoDaddy hosting:** the included `.htaccess` provides HTTPS/www redirects, a custom 404 and security headers. The form still needs a server-side endpoint because Netlify Forms will not operate there.
- **Cloudflare Pages:** deploy the static site, retain the static assets and redirects, and connect the form to a Pages Function or other backend.

## Non-negotiable brand controls
- Use only the exact approved Sovereignty Logistics logo supplied in `assets/images/sovereignty-logistics-logo.png`; do not redraw or reinterpret it.
- Orange diplomatic cases must carry the approved Sovereignty Logistics logo and wording, with no invented locks or seals.
- Blue diplomatic pouches must match the approved supplied design.
- Uniform logos must remain undistorted and positioned wholly between reflective strips.
- Keep authorised access out of public navigation. It is a holding page, not an authentication system.

## Form handling
The public form posts as `service-assessment`, includes a honeypot, records declaration fields and shows success only after the host confirms receipt. Never accept classified, protectively marked or sensitive operational documents through this public form.

See `LAUNCH_CHECKLIST.md` for the remaining owner and developer tasks.
