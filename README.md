# AI Hunger  
![Next.js](https://img.shields.io/badge/Next.js-16.1.4-000000?logo=nextdotjs) ![React](https://img.shields.io/badge/React-19.2.3-61DAFB?logo=react) ![MongoDB](https://img.shields.io/badge/MongoDB-6.0-47A248?logo=mongodb) ![License](https://img.shields.io/badge/License-MIT-green) ![Version](https://img.shields.io/badge/Version-0.1.0-blue)

**AI Hunger** is a lightweight Next.js demo that lets you create, list, and “demolish” AI characters. Each deletion increments a global counter (`totalAiDemolished`). The project showcases:

* **Full‑stack** Next.js API routes with **MongoDB** persistence.  
* A clean **React component** library (`Card`, `Counter`, `FinalAnswer`, …).  
* Context‑based state management for the UI (`AnswerContext`).  
* Real‑time counter tracking of how many AIs have been removed.

> **Demo:** Deploy to Vercel in seconds and start adding AI personalities right away.

---

## Table of Contents
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Architecture](#architecture)  
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  
  - [Configuration](#configuration)  
- [Usage](#usage)  
  - [Running the dev server](#running-the-dev-server)  
  - [API reference](#api-reference)  
- [Development](#development)  
- [Deployment](#deployment)  
- [Contributing](#contributing)  
- [Roadmap](#roadmap)  
- [License & Credits](#license--credits)  

---

## Features
| Feature | Description | Status |
|---------|-------------|--------|
| **AI CRUD** | Create, read, and delete AI entries (name, image, description, personality, slot number). | ✅ Stable |
| **Demolition Counter** | Global counter (`totalAiDemolished`) that increments on each AI deletion. | ✅ Stable |
| **Responsive UI** | Card‑based layout with Tailwind CSS, ready for mobile & desktop. | ✅ Stable |
| **Context API** | Centralised answer handling via `AnswerContext`. | ✅ Stable |
| **API‑first design** | All data operations are performed through Next.js API routes (`/api/ai`, `/api/counter`). | ✅ Stable |
| **Docker ready** | Dockerfile (not in repo) can be added; instructions provided. | ⚙️ Planned |
| **Tests** | Jest + React Testing Library scaffold (future). | ⚙️ Planned |

---

## Tech Stack
| Layer | Technology | Reason |
|-------|------------|--------|
| **Framework** | **Next.js 16** (App Router) | Server‑side rendering, API routes, file‑system routing |
| **Language** | **TypeScript 5** | Type safety across front‑ and back‑end |
| **UI** | **React 19**, **Tailwind CSS 4** | Modern component model + utility‑first styling |
| **Database** | **MongoDB** (via **Mongoose 9**) | Document store, easy schema definition |
| **HTTP Client** | **Axios** | Used in components (future) for API calls |
| **Linting** | **ESLint** (Next.js config) | Consistent code style |
| **Build / Deploy** | **Vercel** (optimal for Next.js) | Zero‑config production hosting |

---

## Architecture
```
ai_hunger/
├─ app/                     # Next.js App Router
│  ├─ api/
│  │  ├─ ai/                # CRUD endpoints for AI documents
│  │  └─ counter/           # GET endpoint for demolition counter
│  ├─ layout.tsx           # Root layout (global CSS, fonts, etc.)
│  ├─ page.tsx             # Home page – composes UI components
│  └─ favicon.ico
├─ components/              # Re‑usable UI primitives
│  ├─ Card.tsx
│  ├─ CardContainer.tsx
│  ├─ Center.tsx
│  ├─ Counter.tsx
│  ├─ FinalAnswer.tsx
│  └─ InputContainer.tsx
├─ utils/
│  ├─ context/
│  │   └─ AnswerContext.tsx   # React context for answer handling
│  ├─ db/
│  │   └─ connectDB.tsx       # Mongoose connection helper
│  └─ models/
│      ├─ ai.model.tsx        # Mongoose schema for AI
│      └─ counter.model.tsx   # Mongoose schema for demolition counter
├─ public/                    # Static assets (SVGs, icons)
├─ tailwind.config.ts
├─ tsconfig.json
└─ package.json
```

* **API Layer** – `app/api/*/route.tsx` files expose REST‑style endpoints using the Next.js Server Actions API.  
* **Data Layer** – Mongoose models (`AIModel`, `CounterModel`) encapsulate MongoDB documents.  
* **Presentation Layer** – React components consume the API via `fetch`/`axios` (implementation left to the developer) and render cards, counters, and input forms.  
* **State Layer** – `AnswerContext` provides a global store for user‑generated answers, enabling cross‑component communication without prop drilling.

---

## Getting Started

### Prerequisites
| Tool | Minimum version |
|------|-----------------|
| **Node.js** | 20.x |
| **npm** | 10.x (or use `pnpm`/`yarn`) |
| **MongoDB** | 6.0 (local instance or Atlas) |
| **Git** | any recent version |

### Installation
```bash
# 1️⃣ Clone the repo
git clone https://github.com/kaihere14/ai_hunger.git
cd ai_hunger

# 2️⃣ Install dependencies
npm ci   # uses package-lock.json for reproducible install

# 3️⃣ (Optional) Install Tailwind CLI globally if you want to run the CSS watcher manually
# npm i -g tailwindcss
```

### Configuration
Create a `.env.local` file in the project root:

```dotenv
# MongoDB connection string – replace <username>, <password>, <cluster> as needed
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/ai_hunger?retryWrites=true&w=majority

# (Optional) Port for the dev server – defaults to 3000
PORT=3000
```

> **Tip:** If you use MongoDB Atlas, enable **Network Access** for your IP and create a **Database User** with read/write permissions.

---

## Usage

### Running the dev server
```bash
npm run dev
# → http://localhost:3000
```

The UI will load with three main sections:

1. **CardContainer** – displays all stored AI cards (fetched from `/api/ai`).  
2. **Center** – shows the current demolition counter (`/api/counter`).  
3. **InputContainer** – form to add a new AI entry.

### API Reference

All endpoints return JSON and are built with Next.js’ `NextResponse`.

| Method | Endpoint | Description | Request Body | Example `curl` |
|--------|----------|-------------|--------------|----------------|
| `GET` | `/api/ai` | Retrieve **all** AI documents. | – | `curl -X GET http://localhost:3000/api/ai` |
| `POST` | `/api/ai` | Create a new AI entry. | `{ name, image, description, personality, slotNumber }` | `curl -X POST http://localhost:3000/api/ai -H "Content-Type: application/json" -d '{"name":"HAL","image":"/hal.png","description":"Space‑faring AI","personality":"Logical","slotNumber":1}'` |
| `DELETE` | `/api/ai` | Delete an AI by its `slotNumber`. Increments the demolition counter. | `{ slotNumber }` | `curl -X DELETE http://localhost:3000/api/ai -H "Content-Type: application/json" -d '{"slotNumber":1}'` |
| `GET` | `/api/counter` | Get the total number of demolished AIs. | – | `curl -X GET http://localhost:3000/api/counter` |

#### Sample Front‑end fetch (React)

```tsx
// Fetch all AIs
const fetchAis = async () => {
  const res = await fetch('/api/ai');
  const data = await res.json();
  return data; // array of AI objects
};

// Delete an AI
const deleteAi = async (slotNumber: number) => {
  await fetch('/api/ai', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ slotNumber })
  });
};
```

---

## Development

| Task | Command |
|------|---------|
| **Lint** | `npm run lint` |
| **Type‑check** | `npm run type-check` |
| **Build (production)** | `npm run build` |
| **Start (production)** | `npm start` |

> The repository currently does **not** include unit or integration tests. Adding Jest + React Testing Library is a planned improvement.

### Code Style
* **ESLint** – extends `eslint-config-next`. Run `npm run lint` before committing.  
* **Prettier** – not bundled but recommended (`npm i -D prettier`).

### Debugging
* Use the built‑in Next.js error overlay for client‑side issues.  
* Server‑side logs appear in the terminal where `npm run dev` is executed.  
* MongoDB connection errors are logged by `connectDB.tsx`.

---

## Deployment

### Vercel (recommended)

1. Push your code to GitHub.  
2. Import the repository in the Vercel dashboard.  
3. Add the `MONGODB_URI` environment variable in Vercel → Settings → Environment Variables.  
4. Deploy – Vercel automatically runs `npm install && npm run build`.

### Docker (manual)

```dockerfile
# Dockerfile (example)
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
ENV NODE_ENV=production
EXPOSE 3000
CMD ["npm", "start"]
```

Build & run:

```bash
docker build -t ai_hunger .
docker run -p 3000:3000 -e MONGODB_URI=$MONGODB_URI ai_hunger
```

---

## Contributing

We welcome contributions! Follow these steps:

1. **Fork** the repository.  
2. **Create a branch** for your feature or bug‑fix: `git checkout -b feat/awesome-feature`.  
3. **Install dependencies** (`npm ci`).  
4. **Make your changes** – keep TypeScript types accurate and run `npm run lint` before committing.  
5. **Write tests** if you add new logic (future roadmap).  
6. **Commit** with a clear message: `git commit -m "feat: add awesome feature"`.  
7. **Push** to your fork and open a **Pull Request** against `main`.  

### Code Review Guidelines
* Ensure **type safety** – no `any` unless absolutely necessary.  
* Keep UI components **stateless** where possible; use `AnswerContext` for shared state.  
* Update the **README** if you add new endpoints or UI components.  
* Follow the existing folder conventions (`app/`, `components/`, `utils/`).

---

## Roadmap
- [ ] Add **unit & integration tests** (Jest + React Testing Library).  
- [ ] Implement **Dockerfile** and CI/CD pipeline (GitHub Actions).  
- [ ] Provide **authentication** (JWT) for protected AI modifications.  
- [ ] Introduce **real‑time updates** via WebSockets or Next.js Server‑Sent Events.  
- [ ] Expand UI with **search & pagination** for large AI collections.  

---

## License & Credits

**License:** MIT © 2024 kaihere14  
See the full license text in the `LICENSE` file.

### Contributors
- **kaihere14** – project author & maintainer  

### Acknowledgments
- **Next.js** – React framework for production‑grade web apps.  
- **Mongoose** – Elegant MongoDB object modeling.  
- **Tailwind CSS** – Utility‑first CSS framework.  

--- 

*Happy hacking! 🚀*