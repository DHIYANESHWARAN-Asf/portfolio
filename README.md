# Dhiyaneshwaran R - Professional Portfolio

A modern, premium developer portfolio website built with React, Vite, and Tailwind CSS.

## 🌐 Live Preview

The portfolio is currently running at: **http://localhost:5175/**

## ✨ Features

- **Modern Dark Theme**: Professional dark developer aesthetic with subtle animations
- **Fully Responsive**: Works perfectly on mobile, tablet, and desktop devices
- **Smooth Animations**: Powered by Framer Motion for elegant transitions
- **SEO Optimized**: Proper meta tags and Open Graph metadata
- **Accessible**: Semantic HTML and WCAG-compliant design
- **Fast Performance**: Built with Vite for lightning-fast development and production builds
- **Reusable Architecture**: Centralized data structure for easy customization

## 🏗️ Project Structure

```
dhiyaneshwaran-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky navigation with smooth scroll
│   │   ├── Hero.jsx             # Hero section with CTA buttons
│   │   ├── About.jsx            # About section with info cards
│   │   ├── Skills.jsx           # Technical skills organized by category
│   │   ├── Projects.jsx         # Featured project with modal details
│   │   ├── Certifications.jsx   # Professional certifications
│   │   ├── Education.jsx        # Educational timeline
│   │   ├── SoftSkills.jsx       # Soft skills section
│   │   ├── Languages.jsx        # Languages proficiency
│   │   ├── Contact.jsx          # Contact information and CTA
│   │   ├── Footer.jsx           # Footer with navigation and contact
│   │   ├── ScrollToTop.jsx      # Back-to-top button
│   │   └── ScrollProgress.jsx   # Scroll progress indicator
│   ├── data/
│   │   └── portfolio.js         # Centralized portfolio data
│   ├── assets/                  # Static assets
│   ├── App.jsx                  # Main application component
│   ├── main.jsx                 # Application entry point
│   └── index.css                # Global styles with Tailwind
├── index.html                   # HTML template with SEO meta tags
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── vite.config.js              # Vite configuration
└── package.json                # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd dhiyaneshwaran-portfolio
```

2. Install dependencies (already done):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5175`

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization

All portfolio data is centralized in `src/data/portfolio.js`. Update this file to customize:

- **Profile Information**: Name, title, tagline, availability status
- **About Section**: Description and highlights
- **Skills**: Programming languages, databases, hardware skills
- **Projects**: Featured projects with descriptions and technologies
- **Certifications**: Professional certificates with issuers
- **Education**: Academic timeline with institutions and scores
- **Soft Skills**: Personal attributes
- **Languages**: Language proficiency
- **Contact Information**: Email, phone, location

### Adding Project Screenshots

1. Add images to `src/assets/` folder
2. Import them in `src/data/portfolio.js`
3. Add to the `images` array in the project object

### Adding Certificate Links

Update the `link` property in the certifications array with the certificate URL.

### Adding GitHub/Live Demo Links

Update the `github` and `live` properties in the projects array.

## 🎯 Key Sections

1. **Hero Section**: First impression with name, title, and CTAs
2. **About**: Professional introduction with key highlights
3. **Skills**: Technical skills organized by category
4. **Featured Project**: Large project card with detailed modal
5. **Certifications**: Professional certifications grid
6. **Education**: Timeline view of academic journey
7. **Soft Skills**: Personal attributes
8. **Languages**: Language proficiency
9. **Contact**: Multiple contact methods with CTA
10. **Footer**: Site navigation and copyright

## 🔧 Technologies Used

- **React**: UI library
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility Features

- Semantic HTML structure
- Proper heading hierarchy
- Alt text support for images
- Keyboard navigation
- WCAG-compliant color contrast
- Focus states on interactive elements
- Reduced motion support

## 🎨 Color Palette

The portfolio uses a professional accent color system:
- Primary Accent: `#0284c7` (accent-600)
- Dark Background: `#09090b` (zinc-950)
- Card Background: `#18181b` (zinc-900)
- Text: `#fafafa` (zinc-100)

## 📝 Notes

- Resume download functionality requires adding the resume file
- Social media links (LinkedIn, GitHub) are configurable placeholders
- Project screenshots can be added by updating the portfolio data
- Certificate proof links can be added as they become available

## 🌟 Reusable Template

This portfolio is designed to be reusable for multiple team members:

1. Copy the entire project
2. Update `src/data/portfolio.js` with new person's information
3. Replace profile image if available
4. Update meta tags in `index.html`
5. Build and deploy

## 📄 License

© 2026 Dhiyaneshwaran R. All rights reserved.

## 🤝 Support

For issues or questions, contact: dhiyaneshdhiyanesh2@gmail.com

---

**Built with ❤️ using React + Vite + Tailwind CSS**
