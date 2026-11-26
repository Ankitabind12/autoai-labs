# AUTOAI LABS

> **Where Automation Meets Intelligence.**  
> A unified technology ecosystem and marketplace connecting industrial automation, robotics, IoT, sensors, electronic components, and AI hardware.

---

## 1. Overview & Positioning

**AutoAI Labs** is an early-stage startup building the technology layer behind intelligent systems.

The future of hardware engineering requires continuous convergence:
- **Industrial Automation:** Control systems, PLCs, safety logic, and industrial fieldbus protocols.
- **Robotics & Kinematics:** Actuators, harmonic gearing, brushless servos, and motor controllers.
- **IoT & Sensors:** Telemetry gateways, edge perception, LiDAR, depth cameras, and environmental transducers.
- **AI Hardware:** Edge neural processing units (NPUs), vision accelerators (VPUs), System-on-Modules (SoMs), and tensor coprocessors.
- **Electronic Components:** Power regulation, isolated transceivers, and precision semiconductor circuitry.

### Launch Status: Ecosystem Preparation
AutoAI Labs is currently in its foundational phase, actively building direct relationships with verified hardware manufacturers and certified distributors. **This platform is in pre-launch mode and is not yet a live e-commerce store with public inventory.**

Transaction model upon launch:
$$\text{Customer} \longrightarrow \text{AutoAI Labs} \longrightarrow \text{Supplier} \longrightarrow \text{Customer}$$

---

## 2. Technology Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, React 19, Static Site Generation)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (custom dark-first aesthetic, glowing accents, glassmorphism)
- **Icons:** Lucide React
- **Typography:** Modern technical system sans-serif with monospace telemetry indicators
- **SEO & Meta:** OpenGraph metadata, Twitter Cards, robots.txt, sitemap.xml, custom SVG favicon
- **Accessibility:** Semantic HTML5, accessible color contrast ratios, keyboard navigation, visible focus indicators

---

## 3. Project Structure

```
AutoAI-Labs/
├── public/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with responsive Navbar, Footer, and Background
│   │   ├── page.tsx           # Homepage (Hero, Visual Node Graph, Pillars, Flow, Roadmap, CTA)
│   │   ├── globals.css        # Tailwind styling, tech-grid, and glassmorphic utilities
│   │   ├── icon.svg           # Vector geometric favicon
│   │   ├── robots.ts          # Automated SEO robots.txt generator
│   │   ├── sitemap.ts         # Automated SEO sitemap.xml generator
│   │   ├── not-found.tsx      # Custom futuristic 404 handler
│   │   ├── about/             # Mission, industry problem, and engineering principles
│   │   ├── solutions/         # Deep dive into all 6 technology disciplines
│   │   ├── coming-soon/       # Pre-launch status, category directory, and notification signup
│   │   ├── partners/          # Supplier onboarding & verified supplier inquiry application
│   │   └── contact/           # Direct contact channels & inquiry routing
│   ├── components/
│   │   ├── Navbar.tsx         # Responsive navbar with scroll state & mobile drawer
│   │   ├── Footer.tsx         # Standardized technical footer with directory links
│   │   ├── HeroVisual.tsx     # Original SVG/CSS animated central core & orbital telemetry nodes
│   │   ├── AnimatedBackground.tsx # Multi-layered radial gradients & subtle tech grid
│   │   ├── SectionHeading.tsx # Reusable eyebrow, title, and description typography component
│   │   ├── EcosystemCard.tsx  # Interactive cards with microinteractions for core pillars
│   │   ├── FlowDiagram.tsx    # Visual pipeline: Suppliers -> AutoAI Labs -> Ecosystem -> Builders
│   │   ├── ComingSoonSection.tsx # Category onboarding cards & foundational supplier callout
│   │   ├── RoadmapSection.tsx # Transparent 4-phase rollout (Foundation to Intelligent Platform)
│   │   ├── CTASection.tsx     # High-conversion closing section
│   │   ├── SupplierForm.tsx   # Verified supplier application with validation and safe state
│   │   └── ContactForm.tsx    # General & partnership inquiry form
│   └── lib/
│       └── utils.ts           # Class merging utilities
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

---

## 4. Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

3. **Production build:**
   ```bash
   npm run build
   ```

4. **Production preview:**
   ```bash
   npm run start
   ```

---

## 5. Deployment Guide (Vercel)

The project is fully optimized for zero-configuration deployment to [Vercel](https://vercel.com).
All routes pre-render as static HTML with optimized first-load JavaScript bundles.

To deploy via Vercel CLI:
```bash
vercel
```

---

## 6. License & Copyright

&copy; AUTOAI LABS. All rights reserved. Built for the next generation of intelligent systems.
