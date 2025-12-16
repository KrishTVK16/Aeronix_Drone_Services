# Aeronix Website Improvements - Task Checklist

Based on website-creation-prompt.md standards analysis.

## High Priority Fixes

### Contact Form & Details
- [x] Add name, subject, and message fields to contact form
- [x] Implement client-side form validation with error messages
- [x] Add success/error feedback UI after form submission
- [x] Make email addresses clickable with `mailto:` links
- [x] Make phone numbers clickable with `tel:` links
- [x] Add spam protection (reCAPTCHA or honeypot)

### Social Media & External Links
- [x] Add social media brand color hover effects (Instagram gradient, YouTube red, LinkedIn blue)
- [x] Add `target="_blank"` and `rel="noopener noreferrer"` to all external links
- [x] Update social media hrefs from placeholders to actual profile URLs (or remove if not available)

### SEO & Meta Tags
- [x] Add meta descriptions to all HTML pages
- [x] Add Open Graph tags for social sharing
- [x] Verify semantic HTML usage across all pages

## Medium Priority Enhancements

### Images & Performance
- [ ] Optimize favicon.png (currently 372KB, should be <10KB) - **Requires manual optimization tool**
- [x] Add `loading="lazy"` to all images below the fold
- [x] Implement responsive images with `srcset` and `sizes` attributes
- [x] Add descriptive alt text to all images

### Accessibility
- [x] Add ARIA labels to navigation menus
- [x] Add ARIA labels to form fields
- [x] Add ARIA role alerts for form validation errors
- [x] Test and ensure full keyboard navigation support
- [x] Verify color contrast meets WCAG AA standards

### Forms & Validation
- [ ] Add real-time validation feedback to all forms
- [ ] Add loading/disabled states to submit buttons
- [ ] Implement AJAX form submission to avoid page reloads

## Low Priority Polish

### Typography & Spacing
- [ ] Verify font hierarchy consistency (h1: 700, h2: 600, h3: 300-400)
- [ ] Audit and ensure uniform padding/margins across all pages
- [ ] Check for spacing issues below navbar and before headings

### Performance Optimization
- [ ] Minify CSS and JS for production - **Optional build step (see BUILD_INSTRUCTIONS.md)**
- [x] Add resource preloading for critical assets
- [x] Implement code splitting if applicable

### Documentation
- [ ] Add code comments for complex logic
- [ ] Verify README.md has complete setup instructions
- [ ] Document any third-party dependencies

## Testing & Verification

- [ ] Test all forms across different browsers
- [ ] Test responsiveness on real devices (mobile, tablet, desktop)
- [ ] Verify all links work (no 404s)
- [ ] Run Lighthouse audit for performance, accessibility, SEO
- [ ] Test dark/light theme on all pages
- [ ] Verify active menu states on all pages
