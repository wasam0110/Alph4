# Quantum4 — We Build Digital Futures

A premium dark agency website for **Quantum4**, a next-generation tech agency offering AI agents, mobile apps, web development, and automation.

Built with **TanStack Start**, **React 19**, **Vite 7**, **TypeScript**, and **Tailwind CSS v4**.

---

## ✨ Features

- Cinematic dark hero with animated particle mesh, parallax rings, and a floating VR robot
- Glassmorphism service cards with Lucide icons and hover motion
- Auto-scrolling testimonials and marquee
- Process, Team, Why Us, and Contact sections
- WhatsApp-powered contact form
- Fully responsive, SEO-ready, SSR via TanStack Start

---

## 🧰 Tech Stack

| Layer      | Tech                                          |
| ---------- | --------------------------------------------- |
| Framework  | TanStack Start v1 (React 19 + SSR)            |
| Bundler    | Vite 7                                        |
| Styling    | Tailwind CSS v4 (`src/styles.css`)            |
| Icons      | lucide-react                                  |
| Fonts      | Syne · DM Sans · Fira Code (Google Fonts)     |
| Language   | TypeScript (strict)                           |

---

## 📁 Project Structure

```
src/
├── assets/                 # Images (logo, hero robot)
├── components/
│   ├── quantum/            # Site sections (Hero, Services, Team, ...)
│   └── ui/                 # shadcn/ui primitives
├── hooks/                  # React hooks
├── lib/                    # Utils & error reporting
├── routes/
│   ├── __root.tsx          # Root layout, <head>, providers
│   └── index.tsx           # Home page
├── router.tsx              # Router bootstrap
├── server.ts               # SSR entry (Cloudflare Worker)
├── start.ts                # TanStack Start config
└── styles.css              # Design tokens + Tailwind v4
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 20 (or **Bun** ≥ 1.1 — recommended)

### Install

```bash
bun install
# or
npm install
```

### Run in development

```bash
bun run dev
```

The app runs at **http://localhost:8080**.

### Type-check

```bash
bunx tsgo --noEmit
```

### Lint

```bash
bun run lint
```

---

## 🏗️ Build

```bash
bun run build
```

Outputs a production bundle targeting the **Cloudflare Workers** runtime (via Nitro), configured in `vite.config.ts`.

Preview the built app locally:

```bash
bun run start
```

---

## ☁️ Deployment

### Option 1 — Publish via Lovable (easiest)

Click **Publish** in the Lovable editor. Your site goes live at `https://<your-slug>.lovable.app`. A custom domain can be added from **Project Settings → Domains** after publishing.

### Option 2 — Cloudflare Workers

The build already targets Workers. After `bun run build`, deploy the generated `.output/` bundle with `wrangler`:

```bash
bunx wrangler deploy
```

### Option 3 — Any Node host (Vercel, Fly, Render, ...)

TanStack Start's Nitro build supports multiple presets. Set the preset in `vite.config.ts` under `tanstackStart` if targeting a non-Cloudflare host, then follow that provider's deploy flow.

See the [TanStack Start deployment docs](https://tanstack.com/start/latest/docs/framework/react/hosting) for the full list of targets.

---

## 🔐 Environment Variables

None required for the current build. If you add any:

- **Public** (browser-safe): prefix with `VITE_` and read via `import.meta.env.VITE_*`
- **Secret** (server-only): read inside a server function handler via `process.env.*`

---

## 🎨 Design System

All colors, gradients, shadows, and fonts are defined as semantic tokens in `src/styles.css`. Do not hardcode colors in components — extend the tokens instead.

Base palette:

- Background `#03040a`
- Primary purple `#7c3aed`
- Accent cyan `#06b6d4`
- Typography: **Syne** (display), **DM Sans** (body), **Fira Code** (mono)

---

## 📄 License

© Quantum4. All rights reserved.
