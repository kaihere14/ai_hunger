# AI Hunger – Next.js Starter Template  

![Next.js](https://img.shields.io/badge/Next.js-16.1.4-black?logo=nextdotjs) ![React](https://img.shields.io/badge/React-19.2.3-blue?logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?logo=typescript) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38B2AC?logo=tailwindcss) ![License](https://img.shields.io/badge/License-MIT-lightgrey)  

**A minimal, production‑ready starter for building modern web apps with Next.js 16, React 19, TypeScript, Tailwind CSS and the Geist font.**  

---  

## Table of Contents  

- [Overview](#overview)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Architecture](#architecture)  
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  
  - [Running the Development Server](#running-the-development-server)  
  - [Building for Production](#building-for-production)  
- [Usage](#usage)  
- [Development](#development)  
- [Deployment](#deployment)  
- [Contributing](#contributing)  
- [Troubleshooting & FAQ](#troubleshooting--faq)  
- [Roadmap](#roadmap)  
- [License & Credits](#license--credits)  

---  

## Overview  

`ai_hunger` is a clean, opinionated starter kit generated with `create‑next‑app`. It ships with:

* **Next.js 16 (App Router)** – file‑system routing, server components, edge‑ready rendering.  
* **Tailwind CSS 4** – utility‑first styling with a pre‑configured dark mode.  
* **TypeScript** – strict typing out of the box.  
* **Geist font** – automatically optimized via `next/font`.  

The project is ready to be deployed on Vercel with a single click, but it works locally and can be containerised if needed.  

---  

## Features  

| Feature | Description | Status |
|---------|-------------|--------|
| **App Router** | File‑based routing using the new `app/` directory. | ✅ Stable |
| **TailwindCSS** | Pre‑configured Tailwind with dark mode and a minimal reset. | ✅ Stable |
| **Geist Font Integration** | Automatic font optimization via `next/font`. | ✅ Stable |
| **TypeScript Support** | Strict TS config (`tsconfig.json`) and type‑checked React components. | ✅ Stable |
| **Responsive Layout** | Flexbox‑based layout that works on mobile, tablet, and desktop. | ✅ Stable |
| **Vercel Deploy Button** | One‑click deployment to Vercel (see *Deployment* section). | ✅ Stable |
| **ESLint + Next.js Config** | Linting rules aligned with Next.js best practices. | ✅ Stable |
| **Ready for Extension** | Simple `app/page.tsx` and `app/layout.tsx` that can be expanded. | ✅ Stable |

---  

## Tech Stack  

| Category | Tool | Version |
|----------|------|---------|
| **Framework** | Next.js | 16.1.4 |
| **UI Library** | React | 19.2.3 |
| **Styling** | Tailwind CSS | ^4 |
| **Language** | TypeScript | ^5 |
| **Font** | Geist (via `next/font`) | – |
| **Package Manager** | npm (works with yarn, pnpm, bun) | – |
| **Linting** | ESLint + `eslint-config-next` | ^9 / 16.1.4 |
| **Build** | Next.js compiler (Webpack/ Turbopack) | – |

---  

## Architecture  

```
ai_hunger/
├─ .gitignore
├─ README.md
├─ package.json
├─ tsconfig.json
├─ next.config.ts
├─ postcss.config.mjs
├─ eslint.config.mjs
├─ public/                # static assets (svg, favicon, …)
│   ├─ next.svg
│   └─ …
└─ app/                    # Next.js App Router root
    ├─ layout.tsx          # Root layout – global fonts, <html>/<body>
    ├─ page.tsx            # Home page – starter UI
    ├─ globals.css        # Tailwind base + custom utilities
    └─ favicon.ico
```

* **`app/layout.tsx`** – Sets up the global HTML skeleton, loads Geist fonts, and applies the `antialiased` class.  
* **`app/page.tsx`** – Minimal landing page that demonstrates Image component, dark‑mode handling, and external links.  
* **`globals.css`** – Tailwind import (`@tailwind base; @tailwind components; @tailwind utilities;`) plus any project‑wide overrides.  

All UI is built with **Tailwind utilities**, making it easy to extend or replace the design system.

---  

## Getting Started  

### Prerequisites  

| Tool | Minimum Version |
|------|-----------------|
| **Node.js** | 18.x |
| **npm** | 9.x (or Yarn 1/2, pnpm, Bun) |
| **Git** | any recent version (for cloning) |

> **Note** – The project does not require any external services or API keys.

### Installation  

```bash
# 1️⃣ Clone the repository
git clone https://github.com/kaihere14/ai_hunger.git
cd ai_hunger

# 2️⃣ Install dependencies
npm install          # or `yarn`, `pnpm install`, `bun install`
```

### Running the Development Server  

```bash
npm run dev          # starts http://localhost:3000
```

Open your browser at **http://localhost:3000** – the page will hot‑reload as you edit files under `app/`.

### Building for Production  

```bash
npm run build        # creates an optimized .next directory
npm start            # runs the production server (default port 3000)
```

You can also preview the production build locally:

```bash
npm run build && npm run start
```

---  

## Usage  

The starter already includes a functional home page (`app/page.tsx`). Typical next steps:

1. **Edit the page** – modify `app/page.tsx` or add new route folders (`app/about/page.tsx`, `app/dashboard/page.tsx`, …).  
2. **Add components** – create a `components/` directory (not present yet) and import them in your pages or layouts.  
3. **Customize Tailwind** – edit `tailwind.config.ts` (generated by `create-next-app`) to extend colors, spacing, etc.  
4. **Deploy** – see the *Deployment* section for a one‑click Vercel button or Docker instructions.

### Example: Adding a New Route  

```bash
# Create a new folder for the route
mkdir -p app/about

# app/about/page.tsx
cat > app/about/page.tsx <<'EOF'
export default function About() {
  return (
    <section className="p-8">
      <h1 className="text-4xl font-bold">About AI Hunger</h1>
      <p className="mt-4 text-lg">
        This page was added to demonstrate the App Router.
      </p>
    </section>
  );
}
EOF
```

Visit **http://localhost:3000/about** to see the new page.

---  

## Development  

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload. |
| `npm run build` | Compile the app for production. |
| `npm run lint` | Run ESLint using the Next.js config. |
| `npm run start` | Run the compiled production build. |

### Code Style  

* **ESLint** – configured via `eslint-config-next`. Run `npm run lint` before committing.  
* **Prettier** – not bundled, but you can add it easily (`npm i -D prettier`) and extend the lint script.

### Debugging  

* Use the browser’s DevTools to inspect React components.  
* Server‑side errors appear in the terminal where `npm run dev` is running.  

---  

## Deployment  

### Vercel (One‑Click)  

The repository includes a **Deploy to Vercel** button that creates a production‑ready deployment in seconds.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new?repo=https://github.com/kaihere14/ai_hunger)

1. Click the button.  
2. Connect your GitHub account (if not already).  
3. Choose the repository and accept the defaults.  
4. Vercel builds and hosts the app at a generated URL.

### Manual Deployment (Docker)  

If you prefer containerisation, a minimal Dockerfile can be added:

```dockerfile
# Dockerfile (optional)
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
EXPOSE 3000
CMD ["npm", "start"]
```

Build & run:

```bash
docker build -t ai_hunger .
docker run -p 3000:3000 ai_hunger
```

---  

## Contributing  

Contributions are welcome! Follow these steps:

1. **Fork** the repository.  
2. **Create a branch** for your feature or bug‑fix: `git checkout -b feat/awesome-feature`.  
3. **Make your changes** and ensure the app still builds (`npm run lint && npm run build`).  
4. **Commit** with a clear message.  
5. **Push** to your fork and open a **Pull Request** against `main`.  

### Development Workflow  

| Step | Command |
|------|---------|
| Install dependencies | `npm install` |
| Run lint before committing | `npm run lint` |
| Run tests (none yet) | `npm test` (placeholder) |

Please adhere to the existing code style (ESLint + TypeScript) and include a brief description in the PR template.

---  

## Troubleshooting & FAQ  

| Issue | Solution |
|-------|----------|
| **`npm run dev` fails with “Cannot find module ‘next’”** | Ensure you ran `npm install` in the project root. |
| **Tailwind styles not applying** | Verify `globals.css` imports Tailwind (`@tailwind base; @tailwind components; @tailwind utilities;`). |
| **Image not showing** | The `next/image` component requires the `src` to be inside the `public/` folder or an allowed external domain (see `next.config.ts`). |
| **Port 3000 already in use** | Change the port: `PORT=4000 npm run dev`. |
| **Dark mode not toggling** | The starter uses CSS media query `prefers-color-scheme`. Add a manual toggle if needed. |

For more help, open an **Issue** on GitHub or ask in the repository’s Discussions (if enabled).

---  

## Roadmap  

- [ ] Add a reusable `components/` directory with UI primitives.  
- [ ] Integrate `next-auth` for authentication scaffolding.  
- [ ] Provide a Dockerfile and GitHub Actions CI workflow.  
- [ ] Add unit & integration tests with Jest & React Testing Library.  
- [ ] Extend Tailwind config with custom color palette.  

---  

## License & Credits  

**License:** MIT © 2024 kaihere14  

This project was generated with **create‑next‑app** and uses the following open‑source resources:

- **Next.js** – https://nextjs.org  
- **React** – https://reactjs.org  
- **Tailwind CSS** – https://tailwindcss.com  
- **Geist Font** – https://vercel.com/font  

---  

*Happy coding!*  