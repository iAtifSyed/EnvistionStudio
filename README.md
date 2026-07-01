# Envision Studio - Premium Standalone HTML Website Template

Envision Studio is a world-class, premium, highly responsive HTML5 template designed for technology companies, software agencies, and digital transformation consulting firms. It is built entirely with pure HTML5, modern CSS3 variables, and high-performance Vanilla JavaScript, with zero heavy external dependencies.

This codebase is crafted to represent the absolute peak of visual design and front-end craftsmanship—suitable for direct commercial launch or listing on premium marketplaces like ThemeForest.

---

## 🎨 Visual Quality & Design Architecture

- **Thematic Balance**: Uses generous whitespace, high-contrast dark/light integrated schemas, and modern glassmorphism backdrops.
- **Color Palette**:
  - Primary (Enterprise Blue): `#2563EB`
  - Secondary (Digital Cyan): `#06B6D4`
  - Accent (Modern Violet): `#8B5CF6`
  - Canvas Light Background: `#FFFFFF` / `#F8FAFC`
  - Canvas Dark Background: `#0F172A` / `#020617`
  - Text: `#1E293B` / `#F8FAFC`
- **Typography Pairing**: Elegant display font `Space Grotesk` paired with the ultra-legible, pixel-perfect sans-serif `Inter` for regular text, and `JetBrains Mono` for code and status badges.
- **Performance-Optimized Icons**: High-fidelity, vector-based inline SVGs are embedded directly within the markup. This ensures the template remains 100% standalone, operates offline, has zero external network latency, and renders instantly.

---

## 📂 Project Structure

Following the exact layout parameters specified in the guidelines:

```text
/
├── index.html          # Homepage (Hero, Stats, Services teaser, Timeline, FAQs)
├── about.html          # About Us (Philosophy, Team, Core Values)
├── services.html       # Services Catalog (6 Tech divisions, Pricing tiers)
├── portfolio.html      # Case Studies (Filterable project grids)
├── contact.html        # Contact Desk (Discovery form, Custom maps placeholder)
│
└── assets/
    ├── css/
    │   └── style.css   # Unified responsive design system, variables, animations
    └── js/
        └── main.js     # Sticky header, Dark Mode, Counters, Filters, Form validation
```

---

## ⚡ Interactivity & Animations

Our customized Vanilla JavaScript engine handles multiple premium interactive animations:
1. **Preloader Screen**: Smooth transition fading on initial window load.
2. **Glassmorphic Sticky Header**: Shrinks and adds blur/borders when scrolling down.
3. **Double-Action Dark Mode**: Toggle button dynamically adds `.dark-mode` to `<html>` and stores user preference in `localStorage`.
4. **Scroll Reveal Animations**: Leverages high-performance `IntersectionObserver` to trigger fade-in and slide-up transitions as elements enter the viewport.
5. **Real-time Stat Counters**: Counts up from 0 to targets (e.g., `150+`, `99%`) utilizing a quad-easing progress formula when stats scroll into view.
6. **Case Study Category Filter**: Instantly filters portfolio items with a custom scaling and opacity fading transition.
7. **Accordion Collapses**: Opens FAQs with dynamic, auto-calculated height metrics, closing adjacent elements.
8. **Contact Validation & Feedback**: Intercepts project requests, runs regex email validation, handles loading state spinner, and renders timed success alerts.

---

## 🛠️ Execution & Deployment

### Mode A: Standalone Pure HTML (No tools needed)
You can double-click any `.html` file (or open them in any browser) to view them directly. No build tools, compilers, or local Node servers are required!

### Mode B: Optimized Dev Server (Vite)
To run the project with our optimized Vite development server and auto-refresh:
1. Ensure [Node.js](https://nodejs.org) is installed.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Boot the development server:
   ```bash
   npm run dev
   ```
4. Build the final production bundles:
   ```bash
   npm run build
   ```
   All static assets and minified HTML files will compile cleanly into the `/dist` directory.

---

## 👨‍💻 Developer Credit

Included on every page footer:

- **Developed by**: Atif Syed
- **Portfolio Website**: [iatifsyed.github.io](https://iatifsyed.github.io/)
- **GitHub**: [github.com/iatifsyed](https://github.com/iatifsyed)
- **WhatsApp**: `+92-3004860591`
- **Email**: [atifsyedlive@gmail.com](mailto:atifsyedlive@gmail.com)
