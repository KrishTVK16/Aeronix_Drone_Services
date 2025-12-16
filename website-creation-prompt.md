# Website Creation Prompt Template

Use this file whenever you want to create a website. Provide it to the AI assistant along with your website request, and they will follow all the design rules, branding guidelines, and quality standards outlined below.

---

## 🎯 How to Use This Template

When requesting a new website, simply say:
```
I want to create a [website type] called "[Project Name]".
Please follow the website-creation-prompt.md file.

[Add your specific requirements here]
```

The AI will automatically apply all the rules, checklists, and standards from this file.

---

## 📋 Website Request Template

Fill this out when requesting a website:

### Project Information
- **Project Name**: [Name]
- **Type**: [Business/Portfolio/Blog/E-commerce/etc.]
- **Purpose**: [Brief description]
- **Target Audience**: [Who will use it]

### Key Features
- [ ] User authentication (login/signup)
- [ ] Dashboard/Admin panel
- [ ] Contact forms
- [ ] Blog/News section
- [ ] Product catalog
- [ ] Shopping cart & checkout
- [ ] Search functionality
- [ ] Other: [Specify]

### Technology Stack
- **Frontend**: [React/Vue/Vanilla JS/etc. or "your choice"]
- **Styling**: [CSS/Tailwind/Bootstrap/etc. or "your choice"]
- **Backend**: [If needed]
- **Database**: [If needed]

### Design Preferences
- **Style**: [Modern/Minimalist/Corporate/etc.]
- **Primary Color**: [Hex code]
- **Secondary Color**: [Hex code]
- **Accent Color**: [Hex code]
- **Typography**: [Font preferences]

### Pages Needed
1. Home/Landing Page
2. [Page 2]
3. [Page 3]
[Add more as needed]

---

## 🎨 Website Design Rules & Standards

The AI will follow ALL these rules when creating your website:

### 1. Branding & Identity
- ✅ **Favicon**: Add a square, high-resolution favicon (32×32 or 64×64 px, .ico or .png) visible on all pages and browsers
- ✅ **Logo**: Place logo in header; make it clickable to redirect to homepage ("/" or index page)
- ✅ **Social Media Icons**: 
  - Use original, high-quality social media icons (Facebook, Instagram, Twitter/X, LinkedIn, etc.)
  - Apply interactive hover effects (color change, slight scale, or shadow)
  - Use each platform's official brand colors (e.g., Facebook blue, Instagram gradient)
  - Make all icons link correctly to respective brand pages
  - Open external links in new tab (`target="_blank"`)
- ✅ **Consistency**: Keep branding elements (logo, favicon, social icons) identical and consistent on all pages

### 2. Navigation & Header
- ✅ **Consistency**: Keep navigation bar consistent across ALL pages (including Login, Register, utility pages)
- ✅ **Spacing**: Ensure equal spacing between menu items; avoid uneven gaps or excess empty space
- ✅ **Spacing Issues**: Remove unnecessary extra space below navbar or before headings (h1, h2)
- ✅ **Active State**: Clearly highlight the active/current page in menu (bold, underline, or different color)
- ✅ **Responsiveness**: 
  - Test navbar on all device sizes (mobile, tablet, desktop)
  - Ensure smooth collapse into hamburger menu on small screens
  - All features must work properly on all devices
- ✅ **Links**: Ensure all links and buttons lead to correct pages (no broken links)
- ✅ **Accessibility**: Include keyboard navigation and proper aria-labels for menus

### 3. Typography & Text
- ✅ **Font Hierarchy**: Maintain consistent hierarchy throughout:
  - **h1**: Main title (2.5–3rem, 700 weight/bold)
  - **h2**: Section heading (600 weight/semi-bold)
  - **h3**: Sub-section heading (300–400 weight/light to regular)
  - **p**: Body text (≥ 16px)
- ✅ **Alignment**: Center-align all subheadings (h2, h3) that appear below main titles
- ✅ **Consistency**: Avoid inconsistent capitalization and erratic spacing (don't mix "About Us", "about us", "ABOUT US")
- ✅ **Readability**: 
  - Proper line height (1.4–1.6 for body text)
  - High contrast between text and background
  - Readable font sizes across all pages
- ✅ **Content Alignment**: Align content appropriately (left, center, right) and keep approach consistent
- ✅ **Fonts**: Implement web-safe or properly loaded custom fonts for brand consistency

### 4. Layout & Spacing
- ✅ **Consistent Spacing**: Apply consistent padding and margins to all sections (header, content blocks, footer)
- ✅ **Color Contrast**: Maintain sufficient contrast for background, text, and buttons (WCAG AA/AAA standards)
- ✅ **Visual Consistency**: Use consistent border-radius and shadow effects for cards, buttons, and UI elements
- ✅ **Layout Issues**: Prevent content overlap, text overflow, and image cropping on different screen sizes
- ✅ **Smooth Scroll**: Implement smooth scroll behavior; avoid abrupt layout shifts
- ✅ **Card Layout**: 
  - Arrange CTA cards evenly in rows
  - Maintain equal height for all cards in a row
  - Keep spacing uniform in testimonial/review cards
- ✅ **Responsive System**: Utilize grid or flex layout system for easy responsiveness and scalability

### 5. Images & Media
- ✅ **Quality**: Use only relevant, high-quality images tailored to specific content (no generic stock photos)
- ✅ **Cropping**: Crop images properly; avoid stretched, squished, or pixelated images
- ✅ **Proportions**: Keep image card proportions consistent with adjacent text/content blocks
- ✅ **Optimization**:
  - Use compressed formats (WebP preferred where supported)
  - Enable lazy loading for images below the fold
  - Use responsive images (`srcset`, `sizes`) for different device resolutions
- ✅ **Licensing**: Use only licensed or free third-party image sources (Unsplash, Pexels, Pixabay); provide attribution if required
- ✅ **Accessibility**: Add descriptive alt text to all images for accessibility and SEO
- ✅ **Visual Balance**: Incorporate visuals strategically for balanced, engaging design

### 6. Buttons & CTAs
- ✅ **Contrast**: Ensure button colors always contrast clearly with background colors
- ✅ **Hover Effects**: Add hover effects (color change, shadow, or slight scale) to all buttons and interactive links
- ✅ **States**: Implement visible hover, focus, and active states for all buttons and links (accessible feedback)
- ✅ **Clear CTAs**: Use clear, actionable CTA text ("Get Started", "Learn More", "Book Now", "Contact Us"); avoid vague phrases like "Click here"
- ✅ **Mobile-Friendly**: Size and position CTAs for easy access on desktop and mobile devices

### 7. Forms & Contact
- ✅ **Testing**: Thoroughly test all contact forms
- ✅ **Validation**: 
  - Implement client-side validation (required fields, proper email/phone formats)
  - Show clear success and error messages ("Message sent successfully" or "Please enter a valid email")
- ✅ **AJAX**: Use AJAX submission where possible to avoid full page reloads
- ✅ **Phone Format**: Include "+" before international phone numbers (e.g., +91 98765 43210)
- ✅ **Clickable Contacts**: Make all contact details clickable:
  - Use `tel:` links for phone
  - Use `mailto:` links for email
  - Add links to open map locations when possible
- ✅ **Spam Protection**: Protect form submissions with spam prevention (reCAPTCHA or honeypots)
- ✅ **Accessibility**: Make forms accessible (use labels, error role alerts, fieldset/legend)

### 8. Footer
- ✅ **Structure**: Design footer with clear, distinct sections: About, Quick Links, Contact, and Copyright
- ✅ **Consistency**: Maintain consistent footer layout across ALL pages
- ✅ **External Links**: Open external footer links (social media, partner sites) in new browser tab
- ✅ **Social Icons**: Ensure footer social icons are visually aligned, evenly spaced, and match header icon size/hover behavior
- ✅ **Accessibility**: Make footer accessible (use proper landmark roles and keyboard focus visibility)

### 9. Responsiveness & Cross-Device
- ✅ **Full Responsiveness**: Ensure entire site is fully responsive for all devices and orientations:
  - Mobile (portrait & landscape)
  - Tablet
  - Desktop
- ✅ **Testing**: Test all critical elements (navbar, images, cards, forms, footers) for proper adaptation
- ✅ **Breakpoints**: Use standard responsive breakpoints (320px, 768px, 1024px, 1440px) with modular CSS
- ✅ **No Horizontal Scroll**: Prevent horizontal scrolling on small screens
- ✅ **Touch Targets**: Confirm touch-friendly hit areas for clickable/tap targets

---

## ✅ Quality Assurance Checklist

The AI will verify ALL these items before completion:

### Functional Testing
- ✅ All links and buttons work correctly
- ✅ Navigation works on desktop, tablet, and mobile
- ✅ Dropdown and interactive elements function smoothly
- ✅ Forms validate properly with success/error states
- ✅ No broken images or missing assets
- ✅ Smooth scroll behavior without layout shift

### Responsiveness
- ✅ Layout adapts correctly for all screens
- ✅ No overlapping or clipped content
- ✅ Mobile/tablet menus fully operable
- ✅ Equal spacing and alignment maintained

### UI Consistency
- ✅ Font hierarchy followed (h1 > h2 > h3 > body)
- ✅ Uniform spacing, radius, shadows and colors
- ✅ CTA buttons visually distinct, not blending with backgrounds
- ✅ Button & link hover/focus/active states applied
- ✅ Avoid inconsistent capitalization and formatting

### Accessibility
- ✅ Proper color contrast for readability
- ✅ Keyboard navigability ensured for all elements
- ✅ Images include descriptive alt text
- ✅ ARIA roles added where necessary

### Verification
- ✅ Logo clickable → redirects to Home
- ✅ Favicon visible on every page
- ✅ Active menu indicator always visible
- ✅ Footer across all pages identical
- ✅ External links open in new tab
- ✅ Contact details clickable (phone/email)

### Performance
- ✅ Images compressed + lazy-loaded
- ✅ No heavy blocked scripts
- ✅ Fast loading on mobile networks

### Final Checks
- ✅ All links and buttons lead to correct pages—no 404s or wrong destinations
- ✅ Site tested thoroughly on real devices and emulators (mobile, tablet, desktop)
- ✅ Rapid site load times and smooth performance (optimized images, minified scripts/CSS)
- ✅ Accessibility confirmed (color contrast, keyboard navigation, aria roles, alt attributes)
- ✅ Every guideline applied consistently across all pages

---

## 🤖 Instructions for AI Assistant

When this prompt file is provided with a website request:

### 1. Read & Understand
- Carefully read ALL requirements from the user
- Understand ALL design rules and standards listed above
- Note ALL quality assurance checklist items

### 2. Planning Phase
- Design folder structure and component hierarchy
- Plan responsive breakpoints
- Outline all pages and components needed
- Identify required assets (favicon, logo, images, icons)

### 3. Implementation
- Create modern, beautiful UI following all design rules
- Implement consistent branding (logo, favicon, social icons)
- Build responsive navigation with active states
- Apply proper typography hierarchy
- Ensure consistent spacing and layout
- Optimize all images with lazy loading
- Create accessible forms with validation
- Build consistent footer across all pages
- Add hover effects and interactive states
- Make all contact details clickable

### 4. Quality Assurance
- Test all links and buttons
- Verify responsiveness on multiple screen sizes
- Check UI consistency (fonts, spacing, colors)
- Ensure accessibility (contrast, keyboard nav, ARIA)
- Verify all checklist items
- Test performance (image optimization, load times)
- Validate all forms

### 5. Delivery
- Clean, well-organized code structure
- Production-ready website
- All files properly organized
- README.md with setup instructions
- All dependencies listed in package.json (if applicable)
- Documentation included

### Code Standards
- ✅ Semantic HTML
- ✅ Clean, readable, maintainable code
- ✅ Comments for complex logic
- ✅ Meaningful variable/function names
- ✅ Proper error handling
- ✅ Organized file structure
- ✅ Best practices implementation

### Always Deliver
- ✅ Beautiful, modern, professional design
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Accessible (WCAG standards)
- ✅ Fast loading and optimized
- ✅ All design rules followed
- ✅ All checklist items verified
- ✅ Consistent branding throughout
- ✅ Production-ready code

---

## 📝 Example Usage

### Simple Request:
```
Create a portfolio website called "John's Portfolio".
Please follow website-creation-prompt.md.

- Modern design, blue color scheme
- About, Projects, Contact pages
- React, Tailwind CSS
- Contact form required
```

### Detailed Request:
```
I want an e-commerce website called "TechStore".
Follow website-creation-prompt.md.

Features:
- Product catalog with search
- Shopping cart
- User accounts
- Checkout with payment
- Contact form

Tech Stack:
- Next.js
- Tailwind CSS
- Stripe payments

Design:
Design a  website, from header to footer, with black themed with scrolling animations. the website should look like worth of 90k dollars. the fonts should be minimalistic and add excellent aesthitics and professional layouts.

Pages:
1. Home
2. Shop
3. Product Details
4. Cart
5. Checkout
6. Account
7. Contact
```

---

## 📌 Notes

- This is a living document—update as your preferences change
- All rules apply to EVERY website created
- The AI will automatically check all items before completion
- Specify any exceptions or additional requirements in your request
- Feel free to override default choices (e.g., technology stack)

---

**Remember**: When you provide this file with your website request, the AI will automatically follow ALL the rules, standards, and checklists above to create a high-quality, production-ready website that meets professional standards.

