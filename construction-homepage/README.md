# Construction 2 - Modern Construction Company Homepage UI

A pixel-accurate, high-performance, and responsive recreation of the [XTRA Construction 2 Elementor Website](https://xtratheme.com/elementor/construction-2/). Built with **React.js**, **Vite**, **CSS3 (Vanilla CSS)**, and **Lucide React**.

---

## 1. Project Overview

This project is a frontend recreation of the modern, professional construction company homepage. It incorporates all sections in their exact visual hierarchy, using authentic color palettes (Construction Amber `#f4c03b`, Deep Navy `#243344`, Slate `#2e3e52`), original typography, authentic imagery, responsive layouts, micro-animations, flip cards, and interactive UI states.

---

## 2. Features

- **Top Information Bar**: Displays direct customer care telephone number (`+1 (818) 23 45 678`), business inquiry contact, and social channel links.
- **Header & Navigation**:
  - Sticky navigation bar with company logo.
  - Interactive navigation menu with smooth section scroll.
  - Multi-level dropdown menus (Pages with sub-items and nested flyouts).
  - Search trigger modal with search inputs and trending search keywords.
  - Quick "Free Consultation" call-to-action button.
  - Mobile slide-out drawer (offcanvas menu) with search, navigation, quick phone call, and social links.
- **Hero Slider**:
  - 2-slide interactive hero carousel.
  - Slide 1: Bold typography headline ("START NEW PROJECTS"), supporting copy, original construction engineer model visual (`man-model.png`), 25+ years experience badge, and interactive modal video player.
  - Slide 2: High-resolution construction backdrop (`slide-2.jpg`), dark overlay, and call-to-action buttons.
  - Carousel navigation controls (previous/next arrows, dot indicators, automatic rotation).
- **Features At A Glance**:
  - Dark textured background with `row-bg.jpg`.
  - 3 interactive 3D flip cards: *Building Engineering*, *Safety First*, and *Road Construction*.
  - Front view showcases high-resolution imagery and titles; hover state flips to golden yellow card with detailed descriptions and "Learn More" links.
- **About Our Company**:
  - Company overview, mission, and background copy.
  - 2-column checklist covering core strengths (*Excellent engineering*, *Modern & up to date*, *Grade #1 materials*, *Structures with long life*).
  - Side visual featuring offset golden accent block and floating "28 Years of Working Experience" badge.
- **Services**:
  - 3 elevated service cards (*Building*, *Road Construction*, *Maintenance*).
  - Hover micro-interactions: card background transitions to golden yellow, title underline flips to white, typography updates cleanly.
  - Prominent callout banner (*"Building a dream shouldn't be a nightmare!"*) with safety icon and Free Consultation link.
- **Process of Construction**:
  - 3 sequential workflow steps (*01 Agency / Bidding*, *02 Construction*, *03 Project Execution*).
  - High-impact step number badges and project imagery.
- **Projects Gallery**:
  - Interactive category filter tabs (*All*, *Architecture*, *Building*, *Construction*, *Maintenance*, *Road Construction*).
  - 8 project cards with image hover overlay, yellow tint, and zoom effects.
  - Lightbox modal displaying project details, completion date, location, and inquiry options.
- **Quote Form**:
  - Side-by-side design featuring left dark consultation information panel and right golden inquiry form.
  - Full client-side input validation for required fields, valid email format, department selection, and message.
  - Clear user feedback alerts upon submission or validation errors.
- **Testimonials**:
  - Testimonial carousel featuring client feedback, star ratings, and custom avatar cards with yellow offset shadow blocks.
  - Manual arrow navigation and dot indicators.
- **Client Logos**:
  - 5 client/partner brand logos in a highlighted yellow banner with subtle hover lift effects.
- **Footer**:
  - Center brand logo, company legal structure description, and social media buttons.
  - Sub-footer with copyright text and quick links (*Contact Us*, *About*, *Privacy Policy*).
  - Floating back-to-top button with smooth scrolling.

---

## 3. Technology Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: JavaScript (JSX, ESNext)
- **Styling**: Vanilla CSS3 (Custom Design System in `src/index.css`)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG brand icons
- **Fonts**: Google Fonts (`Roboto`, `Roboto Slab`)

---

## 4. Project Folder Structure

```
construction-homepage/
├── public/
│   └── images/
│       ├── about-company.jpg
│       ├── footer-logo-construction.png
│       ├── logo-1.png ... logo-5.png
│       ├── logo-construction.png
│       ├── man-model.png
│       ├── process.jpg
│       ├── project-1.jpg ... project-8.jpg
│       ├── row-bg.jpg
│       ├── s1.png, s2.png, s3.png
│       ├── safety-icon.png
│       ├── service-1.jpg ... service-3.jpg
│       ├── slide-2.jpg
│       └── team1.jpg ... team3.jpg
├── src/
│   ├── assets/
│   │   └── .gitkeep
│   ├── components/
│   │   ├── About.jsx
│   │   ├── ClientLogos.jsx
│   │   ├── FeatureSection.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Icons.jsx
│   │   ├── Process.jsx
│   │   ├── Projects.jsx
│   │   ├── QuoteForm.jsx
│   │   ├── Services.jsx
│   │   └── Testimonials.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

---

## 5. Prerequisites

Before running the project locally, ensure you have installed:
- [Node.js](https://nodejs.org/) (version `v18.0.0` or higher recommended; developed and tested on `v22.17.0`)
- [npm](https://www.npmjs.com/) (version `9.0.0` or higher)

---

## 6. Installation Instructions

1. Clone or navigate to the project directory:
   ```bash
   cd construction-homepage
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## 7. Available Scripts

- **Development Server**:
  Starts the local Vite development server with Hot Module Replacement (HMR).
  ```bash
  npm run dev
  ```
  Open `http://localhost:3000` (or the port specified in terminal) in your browser.

- **Production Build**:
  Compiles and minifies assets into the `dist/` directory.
  ```bash
  npm run build
  ```

- **Production Preview**:
  Serves the production build locally to test performance and assets.
  ```bash
  npm run preview
  ```

---

## 8. GitHub Repository Setup

To push this codebase to a remote GitHub repository:

1. Initialize git (if not already initialized in your target folder):
   ```bash
   git init
   git add .
   git commit -m "feat: complete construction homepage recreation"
   ```

2. Link to your GitHub repository:
   ```bash
   git branch -M main
   git remote add origin <YOUR_GITHUB_REPOSITORY_URL>
   git push -u origin main
   ```

---

## 9. Vercel Deployment Instructions

To deploy this project to [Vercel](https://vercel.com/):

### Option A: Via Vercel Web Dashboard
1. Push your repository to GitHub or GitLab.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Set the **Root Directory** to `construction-homepage` if the repository contains root subdirectories, or leave as `./` if cloned directly.
5. Framework Preset: **Vite**.
6. Build Command: `npm run build`
7. Output Directory: `dist`
8. Click **Deploy**.

### Option B: Via Vercel CLI
1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```
2. Run from within `construction-homepage/`:
   ```bash
   vercel
   ```
3. Follow the CLI prompts to deploy to preview, or deploy to production:
   ```bash
   vercel --prod
   ```

---

## 10. Environment Variables and Configuration

This project is a static React application and **does not require any special `.env` variables** to run. All assets are self-contained in `public/images/`.

If integrating third-party email APIs (e.g., EmailJS, SendGrid, Formspree), you can add a `.env` file with:
```env
# Optional Third-Party Services
# VITE_CONTACT_FORM_ENDPOINT=https://your-api-endpoint.com/api/quote
```

---

## 11. API Documentation & Backend Notice

> **Note**: **No backend API or database is currently implemented.**
> The Quote Form in `QuoteForm.jsx` performs frontend client-side validation only (validating that the name, email, and message are non-empty and formatted correctly). Form submissions display interactive success and feedback states without persisting data or contacting a live mail server.

---

## 12. Assumptions

1. The reference website is [XTRA Construction 2 Elementor Demo](https://xtratheme.com/elementor/construction-2/).
2. All original image assets from the reference demo have been downloaded directly into `public/images/` to prevent external CDN link breakage.
3. YouTube video modal in `Hero.jsx` embeds a demonstration video placeholder.

---

## 13. Known Limitations

- Submenu links under the "Pages" dropdown and secondary legal links navigate to relevant sections or demo alerts, as those secondary landing pages are outside the single homepage scope.
- Inquiries submitted via the Quote form are processed on the client side only; connection to a mail service or CMS is required for live delivery.
