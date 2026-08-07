# Sovereignty Logistics — Launch Checklist

## Already completed in this package
- All public website references updated to `www.sovereigntylogistics.com`.
- Intended public mailbox updated to `operations@sovereigntylogistics.com`.
- Page-specific titles, meta descriptions, canonical URLs, Open Graph and social-sharing metadata.
- XML sitemap and robots.txt.
- Branded favicon, mobile icons, web manifest and social-sharing image using the approved logo artwork.
- Custom 404 page.
- HTTPS/canonical-domain redirects and security-header configurations for Netlify and Apache/cPanel hosting.
- Search-engine exclusion for the authorised-access holding page.
- Contact form upgraded for Netlify Forms with named fields, honeypot, consent records, validation and genuine success/error handling.
- Design-review pages, portal demonstration, screenshots and mockup folders removed from the public deployment package.
- Internal link and asset audit completed.

## Owner tasks before launch
1. Create and verify `operations@sovereigntylogistics.com` in your chosen email provider.
2. Decide whether the preferred live address is `www.sovereigntylogistics.com` (configured in this package) or the non-www domain.
3. Approve every public service, experience, security and government-related claim.
4. Have the Privacy Notice, Website Terms and service-form declarations reviewed for the final legal entity.
5. Confirm commercial usage rights for every photographic or generated visual used on the live site.
6. Provide the final legal entity name, ABN/ACN and postal/contact details if these must appear in legal pages.

## Developer / hosting tasks still required
1. Deploy to a staging site and run final mobile/browser testing.
2. Connect both `sovereigntylogistics.com` and `www.sovereigntylogistics.com`; preserve the configured redirect to www.
3. Enable HTTPS and confirm security headers do not block required hosting features.
4. On Netlify, enable Forms and set submission notifications to the verified operations mailbox. On another host, replace the form submission endpoint with the chosen backend.
5. Configure SPF, DKIM and DMARC for the email provider.
6. Add privacy-respecting analytics only after consent/legal requirements are confirmed.
7. Create Search Console and submit `/sitemap.xml` after launch.
8. Keep the client portal as a separate authenticated application; do not treat `authorised-access.html` as a security control.
