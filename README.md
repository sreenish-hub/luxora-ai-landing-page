# LUXORA AI - Premium Landing Page

A high-budget, luxury AI company landing page featuring cinematic scroll-driven animations and enterprise-grade design.

![LUXORA AI Hero](hero-background.png)

## 🎨 Design Philosophy

**Quiet Luxury Meets Premium Technology**

LUXORA AI represents the intersection of refined aesthetics and intelligent technology. The landing page embodies:
- Deep dark aesthetic with platinum (#E8E6E3) and electric blue (#00D4FF) accents
- Large, editorial typography with generous spacing
- Scroll-driven storytelling using GSAP animations
- 60fps performance-optimized animations
- Enterprise-grade visual experience

## ✨ Features

### Premium Animations
- **Hero Section**: Smooth text reveals with parallax background movement
- **Horizontal Scroll**: Features section scrolls horizontally triggered by vertical scroll (desktop only)
- **Parallax Effects**: Multi-layer depth in use cases section
- **Data Visualization**: Animated SVG charts with continuous pulse effects
- **Micro-interactions**: Subtle hover effects optimized for performance

### Technical Highlights
- ⚡ **60fps Performance**: GPU-accelerated animations using transform/opacity only
- 📱 **Fully Responsive**: Desktop (1440px+) to mobile (375px+)
- ♿ **Accessible**: WCAG compliant with keyboard navigation and focus states
- 🎯 **Production Ready**: No console errors, optimized loading, clean code
- 🎬 **GSAP Powered**: Industry-standard animation library with ScrollTrigger

## 🚀 Quick Start

### Option 1: Direct File Open
```bash
# Simply open index.html in a modern browser
open index.html  # macOS
start index.html # Windows
```

### Option 2: Local Server (Recommended)
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

Then navigate to: `http://localhost:8000`

## 📦 Project Structure

```
LUXORA-AI/
├── index.html          # Main HTML structure
├── styles.css          # Complete design system & styles
├── script.js           # GSAP animations & interactions
├── hero-background.png # Hero section background image
├── README.md           # This file
└── .gitignore         # Git ignore rules
```

## 🎨 Design System

### Color Palette
```css
Primary Background:   #0A0A0F (deep dark with blue undertone)
Secondary Background: #121218 (elevated panels)
Elevated Background:  #1A1A24 (cards and feature boxes)

Text Primary:         #E8E6E3 (platinum)
Text Secondary:       #8B8986 (muted gray)
Text Muted:          #5A5856 (labels and metadata)

Accent Electric:      #00D4FF (primary accent)
Accent Subtle:        #1A4D5C (dark teal)
```

### Typography
- **Display Font**: Playfair Display (700) - Elegant serif for headlines
- **Body Font**: Inter (300, 400, 600) - Clean modern sans-serif
- **Fluid Scaling**: Responsive from 16px to 96px using CSS `clamp()`

### Spacing Scale
Based on 8px grid: 8, 16, 24, 32, 48, 64, 96, 128, 192, 256px

## 📱 Responsive Breakpoints

| Breakpoint | Width | Features |
|------------|-------|----------|
| Desktop XL | 1440px+ | Full cinematic experience, all animations |
| Desktop | 1024-1439px | Optimized spacing, maintains all effects |
| Tablet | 768-1023px | Single column layouts, simplified horizontal scroll |
| Mobile | 375-767px | Vertical-only scrolling, optimized animations |

## 🎬 Animation Details

### GSAP ScrollTrigger Configuration
All scroll-based animations use GSAP 3.12.5 with ScrollTrigger plugin:

**Key Animation Features:**
- Hero text reveals with staggered timing
- Parallax backgrounds at varying speeds (0.3x - 1x)
- Horizontal scroll section pinned during animation
- SVG path animation using stroke-dashoffset
- Visibility-controlled continuous animations

**Performance Optimizations:**
- GPU-accelerated properties only (`transform`, `opacity`)
- Animations stop when sections leave viewport
- Debounced resize handler (250ms)
- No layout thrashing
- Respects `prefers-reduced-motion`

## ♿ Accessibility

- ✅ Semantic HTML5 structure
- ✅ Keyboard navigation with visible focus states
- ✅ Alt text on all images
- ✅ ARIA attributes on decorative elements
- ✅ Reduced motion support
- ✅ Color contrast meets WCAG AA standards

## 🌐 Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## ⚙️ Customization

### Modify Colors
Edit CSS custom properties in `styles.css`:
```css
:root {
    --color-accent-electric: #00D4FF; /* Change accent color */
    --color-bg-primary: #0A0A0F;      /* Change background */
}
```

### Adjust Animation Timing
Edit configuration in `script.js`:
```javascript
const config = {
    duration: {
        fast: 0.4,    // Quick transitions
        medium: 0.8,  // Standard animations
        slow: 1.2     // Hero reveals
    }
};
```

### Modify Content
All content is in `index.html` with clear semantic structure and section comments.

## 📊 Performance Targets

Based on Lighthouse audit guidelines:

| Metric | Target | Notes |
|--------|--------|-------|
| Performance | 95+ | Optimized assets, preloading |
| Accessibility | 100 | WCAG compliant |
| Best Practices | 100 | Modern standards |
| SEO | 100 | Semantic HTML, meta tags |
| FCP | < 1.5s | First Contentful Paint |
| LCP | < 2.5s | Largest Contentful Paint |
| FPS | 60fps | Smooth animations |

## 🔧 Technical Stack

- **HTML5** - Semantic structure with SEO optimization
- **CSS3** - Custom properties, Grid, Flexbox, fluid typography
- **JavaScript ES6+** - Modern syntax with modular patterns
- **GSAP 3.12.5** - Professional animation library
- **ScrollTrigger** - Scroll-based animation control
- **Google Fonts** - Inter & Playfair Display

## 📝 License

This project is created for LUXORA AI. All rights reserved.

## 🤝 Contributing

This is a production landing page. For questions or customization requests, contact the development team.

## 📧 Contact

- **Email**: contact@luxora.ai
- **Website**: [LUXORA AI](#)

---

**Built with precision. Designed for impact. Animated with purpose.**

*LUXORA AI - Intelligence Refined*
