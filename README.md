
# 🤖 AI Hunger  
![Next.js](https://img.shields.io/badge/Next.js-15.0.0-000000?logo=nextdotjs) ![React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react) ![MongoDB](https://img.shields.io/badge/MongoDB-6.0-47A248?logo=mongodb) ![License](https://img.shields.io/badge/License-MIT-green) ![Version](https://img.shields.io/badge/Version-0.1.1-blue)

**AI Hunger** is a lightweight Next.js demo that lets you create, list, and “demolish” AI characters. Each deletion increments a global counter (`totalAiDemolished`) stored in MongoDB. The project features a clean, component-based architecture using the Next.js App Router.

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

## 🚀 Features
| Feature | Description | Status |
|---------|-------------|--------|
| **AI CRUD** | Create, read, and delete AI entries (name, image, description, personality, slot number). | ✅ Stable |
| **Demolition Counter** | Global counter (`totalAiDemolished`) that increments on each AI deletion. | ✅ Stable |
| **Responsive UI** | Card‑based layout with Tailwind CSS, ready for mobile & desktop. | ✅ Stable |
| **Context API** | Centralised answer handling via `AnswerContext`. | ✅ Stable |
| **API‑first design** | All data operations are performed through Next.js API routes (`/api/ai`, `/api/counter`). | ✅ Stable |
| **Docker ready** | Dockerfile (example) for containerised deployments. | ⚙️ Planned |
| **Tests** | Jest + React Testing Library scaffold. | ⚙️ Planned |

---
## 🛠️ Tech Stack
| Layer | Technology | Reason |
|-------|------------|--------|
| **Framework** | **Next.js** (App Router) | Server‑side rendering, API routes, and file‑system routing |
| **Language** | **TypeScript** | Type safety across front‑ and back‑end |
| **UI** | **React 19**, **Tailwind CSS** | Modern component model + utility‑first styling |
| **Database** | **MongoDB** (via **Mongoose**) | Document store for AI profiles and global counters |
| **Linting** | **ESLint** | Consistent code style and best practices |
| **Build / Deploy** | **Vercel** | Optimized hosting for Next.js applications |

---
## Architecture
```
ai_hunger/
├─ app/
│  ├─ api/
│  │  ├─ ai/               # CRUD endpoints for AI documents
│  │  ├─ counter/          # GET endpoint for demolition counter
│  │  └─ ai-worker/        # Queue endpoint for background AI jobs
│  ├─ layout.tsx
│  └─ page.tsx
├─ components/
│  ├─ Card.tsx
│  ├─ CardContainer.tsx
│  ├─ Center.tsx
│  ├─ Counter.tsx
│  ├─ FinalAnswer.tsx
│  └─ InputContainer.tsx   # now only sets a fake answer (placeholder)
├─ utils/
│  ├─ ai‑worker/
│  │   └─ queue.ts         # simple job queue implementation
│  ├─ context/
│  │   └─ AnswerContext.tsx
│  ├─ db/
│  │   └─ connectDB.tsx
│  └─ models/
│      ├─ ai.model.tsx
│      ├─ counter.model.tsx
│      └─ round.model.tsx   # schema for a “round” of AI processing
├─ public/
├─ tailwind.config.ts
├─ tsconfig.json
└─ package.json
```

* **API Layer** – `app/api/*/route.tsx` files expose REST‑style endpoints using the Next.js Server Actions API.  
* **Queue Layer** – `utils/ai‑worker/queue.ts` provides an in‑process job queue; jobs are triggered via the `/api/ai‑worker` route.  
* **Data Layer** – Mongoose models (`AIModel`, `CounterModel`, `RoundModel`) encapsulate MongoDB documents.  
* **Presentation Layer** – React components consume the API via `fetch`/`axios` and render cards, counters, and input forms.  
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

The UI loads with three main sections:

1. **CardContainer** – displays all stored AI cards (fetched from `/api/ai`).  
2. **Center** – shows the current demolition counter (`/api/counter`).  
3. **InputContainer** – currently a placeholder that sets a fake answer (`"This is a fake answer for now!"`) and clears the input field. Future work will wire this up to the AI creation endpoint.

### API Reference

All endpoints return JSON and are built with Next.js’ `NextResponse`.

| Method | Endpoint | Description | Request Body | Example `curl` |
|--------|----------|-------------|--------------|----------------|
| `GET` | `/api/ai` | Retrieve **all** AI documents. | – | `curl -X GET http://localhost:3000/api/ai` |
| `POST` | `/api/ai` | Create a new AI entry. | `{ name, image, description, personality, slotNumber }` | `curl -X POST http://localhost:3000/api/ai -H "Content-Type: application/json" -d '{"name":"HAL","image":"/hal.png","description":"Space‑faring AI","personality":"Logical","slotNumber":1}'` |
| `DELETE` | `/api/ai` | Delete an AI by its `slotNumber`. Increments the demolition counter. | `{ slotNumber }` | `curl -X DELETE http://localhost:3000/api/ai -H "Content-Type: application/json" -d '{"slotNumber":1}'` |
| `GET` | `/api/counter` | Get the total number of demolished AIs. | – | `curl -X GET http://localhost:3000/api/counter` |
| `POST` | `/api/ai-worker` | Enqueue a background job (e.g., heavy AI computation). | `{ type, payload }` | `curl -X POST http://localhost:3000/api/ai-worker -H "Content-Type: application/json" -d '{"type":"processRound","payload":{"roundId":"abc123"}}'` |
| `GET` | `/api/ai-worker/status` | Retrieve the status of queued jobs. | – | `curl -X GET http://localhost:3000/api/ai-worker/status` |

#### Sample Front‑end fetch (React)

```tsx
// Fetch all AIs
const fetchAis = async () => {
  const res = await fetch('/api/ai');
  return await res.json(); // array of AI objects
};

// Delete an AI
const deleteAi = async (slotNumber: number) => {
  await fetch('/api/ai', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ slotNumber })
  });
};

// Enqueue a job
const enqueueJob = async (type: string, payload: any) => {
  await fetch('/api/ai-worker', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type, payload })
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
* Queue‑related logs are emitted from `utils/ai‑worker/queue.ts`.

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
* Ensure **type safety** – avoid `any` unless absolutely necessary.  
* Keep UI components **stateless** where possible; use `AnswerContext` for shared state.  
* Update the **README** if you add new endpoints, UI components, or queue jobs.  
* Follow the existing folder conventions (`app/`, `components/`, `utils/`).  

---

## 🗺️ Roadmap
- [ ] Add **unit & integration tests** (Jest + React Testing Library).  
- [ ] Implement **Dockerfile** and CI/CD pipeline (GitHub Actions).  
- [ ] Provide **authentication** (JWT) for protected AI modifications.  
- [ ] Introduce **real‑time updates** via WebSockets or Server‑Sent Events.  
- [ ] Expand UI with **search & pagination** for large AI collections.  
- [ ] Add **admin dashboard** to monitor demolition statistics.  

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