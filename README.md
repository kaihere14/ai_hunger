# 🤖 AI Hunger  
![Next.js](https://img.shields.io/badge/Next.js-15.0.0-000000?logo=nextdotjs) ![React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react) ![MongoDB](https://img.shields.io/badge/MongoDB-6.0-47A248?logo=mongodb) ![License](https://img.shields.io/badge/License-MIT-green) ![Version](https://img.shields.io/badge/Version-0.1.1-blue)

**AI Hunger** is a Next.js demo application for managing AI characters with CRUD operations and a demolition counter. Built with TypeScript, Tailwind CSS, and MongoDB, it demonstrates a clean architecture with API-first design and component-based UI.

> **Demo:** Deploy to Vercel instantly or run locally for development.

---

## 📚 Table of Contents
- [Overview](#overview)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Architecture](#architecture)  
- [Getting Started](#getting-started)  
- [Usage](#usage)  
- [Development](#development)  
- [Deployment](#deployment)  
- [Contributing](#contributing)  
- [Roadmap](#roadmap)  
- [License](#license)  

---

## 🚀 Overview  
AI Hunger enables users to:  
- Create/delete AI characters with metadata (name, image, personality)  
- Track global demolition counter in MongoDB  
- Display responsive card layouts with real-time updates  

---

## 📌 Features  
| Feature | Status | Description |
|---------|--------|-------------|
| **AI CRUD** | ✅ Stable | Create, read, and delete AI entries with metadata |
| **Demolition Counter** | ✅ Stable | Global counter (`totalAiDemolished`) increments on deletions |
| **Responsive UI** | ✅ Stable | Tailwind CSS card layouts for desktop/mobile |
| **API-first Design** | ✅ Stable | RESTful API routes for all data operations |
| **Context API** | ✅ Stable | Centralized state management for answers |
| **Job Queue** | ⚙️ Planned | Background processing via `/api/ai-worker` |
| **Tests** | ⚙️ Planned | Jest/React Testing Library integration |

---

## 🛠️ Tech Stack  
| Layer | Tech | Purpose |
|-------|------|---------|
| **Framework** | Next.js (App Router) | SSR, API routes, routing |
| **Language** | TypeScript | Type-safe front-end/back-end |
| **UI** | React 19 + Tailwind CSS | Modern component model and styling |
| **Database** | MongoDB (Mongoose) | Document storage for AI profiles and counters |
| **Tooling** | ESLint | Code quality enforcement |

---

## 🧠 Architecture  
```
ai_hunger/
├─ app/              # Pages and API routes
├─ components/       # Reusable UI elements
├─ utils/            # Business logic (DB, queue, context)
├─ public/           # Static assets
```

**Key Layers:**  
- **API Layer:** REST endpoints via `app/api/*.route.tsx`  
- **Queue Layer:** In-process job queue in `utils/ai-worker/`  
- **Data Layer:** Mongoose models for AI, Counter, and Round entities  
- **UI Layer:** React components consuming API data via `fetch`  
- **State Layer:** `AnswerContext` for global answer state  

---

## 🧪 Getting Started  
### Prerequisites  
| Tool | Version |
|------|---------|
| Node.js | 20.x |
| npm/yarn | 10.x |
| MongoDB | 6.0+ (local or Atlas) |

### Setup  
```bash
git clone https://github.com/kaihere14/ai_hunger.git
cd ai_hunger
npm ci
```

### Configuration  
Create `.env.local`:  
```env
MONGODB_URI=mongodb+srv://<user>:<pass>@<cluster>.mongodb.net/ai_hunger
PORT=3000
```

---

## 🧰 Usage  
### Dev Server  
```bash
npm run dev
# Visit http://localhost:3000
```

**UI Components:**  
1. **CardContainer** – Displays AI profiles from `/api/ai`  
2. **Counter** – Shows demolition count from `/api/counter`  
3. **InputContainer** – Placeholder for future AI creation (currently fake)  

### API Endpoints  
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/ai` | Fetch all AI entries |
| `POST` | `/api/ai` | Create new AI with metadata |
| `DELETE` | `/api/ai` | Delete by `slotNumber`, increments counter |
| `GET` | `/api/counter` | Get demolition count |
| `POST` | `/api/ai-worker` | Enqueue background jobs |

---

## 🛠️ Development  
| Task | Command |
|------|---------|
| Lint | `npm run lint` |
| Build | `npm run build` |
| Start | `npm start` |

**Code Style:**  
- ESLint + Prettier (recommended but not enforced)  
- Avoid `any` types in TypeScript  

---

## 🚀 Deployment  
### Vercel (Recommended)  
1. Push to GitHub  
2. Import to Vercel  
3. Set `MONGODB_URI` in environment variables  

### Docker  
```dockerfile
# Example Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

---

## 🤝 Contributing  
1. Fork the repo  
2. Create a branch: `git checkout -b feat/your-feature`  
3. Run `npm ci`  
4. Commit changes with clear messages  
5. Open a PR against `main`  

**Guidelines:**  
- Maintain type safety  
- Keep UI components stateless  
- Update README for new features  

---

## 🗺️ Roadmap  
- [ ] Add Jest/React Testing Library tests  
- [ ] Implement Docker and CI/CD pipeline  
- [ ] Add JWT-based authentication  
- [ ] Add real-time updates via WebSockets  
- [ ] Admin dashboard for stats  

---

## 📄 License  
MIT © 2024 kaihere14  
See `LICENSE` for full text.

---

*Happy hacking! 🚀*