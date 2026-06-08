# 🤖 AI Hunger  
![Next.js](https://img.shields.io/badge/Next.js-15.0.0-000000?logo=nextdotjs)  
![React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react)  
![MongoDB](https://img.shields.io/badge/MongoDB-6.0-47A248?logo=mongodb)  
![License](https://img.shields.io/badge/License-MIT-green)  

A Next.js demo application demonstrating AI character management with CRUD operations and a demolition counter. Built with TypeScript, Tailwind CSS, and MongoDB, showcasing clean architecture and API-first design.

> **Demo:** Clone and run locally, or deploy to Vercel for instant testing.

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
AI Hunger provides:  
- CRUD operations for AI characters (name, image, personality)  
- A global demolition counter stored in MongoDB  
- Responsive Tailwind CSS card layouts for cross-device compatibility  

---

## 📌 Features  
| Feature | Status | Description |
|---------|--------|-------------|
| **AI Character Management** | ✅ Stable | Create, read, and delete AI profiles with metadata |
| **Demolition Counter** | ✅ Stable | Tracks total AI deletions in MongoDB |
| **Responsive UI** | ✅ Stable | Tailwind CSS-based card layouts for desktop/mobile |
| **API-first Design** | ✅ Stable | RESTful endpoints for all data operations |
| **Background Processing** | ⚙️ Planned | Job queue via `/api/ai-worker` for future tasks |
| **Testing Framework** | ⚙️ Planned | Jest/React Testing Library integration pending |

---

## 🛠️ Tech Stack  
| Layer | Technology | Purpose |
|-------|------------|---------|
| **Framework** | Next.js (App Router) | SSR, API routes, routing |
| **Language** | TypeScript | Type-safe development |
| **UI** | React 19 + Tailwind CSS | Component-based interface and styling |
| **Database** | MongoDB (Mongoose) | AI profile and counter storage |
| **Tooling** | ESLint | Code quality enforcement |

---

## 🧠 Architecture  
```
ai_hunger/
├─ app/              # Pages and API routes
├─ components/       # Reusable UI elements
├─ utils/            # Business logic (database, queue, context)
├─ public/           # Static assets
```

**Core Components:**  
- **API Layer:** REST endpoints in `app/api/*.route.tsx`  
- **Data Layer:** Mongoose models for AI profiles and demolition counter  
- **UI Layer:** React components consuming API data via `fetch`  
- **State Layer:** `AnswerContext` for managing global answer state  

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
# Access at http://localhost:3000
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
| `POST` | `/api/ai-worker` | Enqueue background jobs (planned) |

---

## 🛠️ Development  
| Task | Command |
|------|---------|
| Lint | `npm run lint` |
| Build | `npm run build` |
| Start | `npm start` |

**Code Style:**  
- Use ESLint + Prettier for formatting  
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
1. Fork the repository  
2. Create a feature branch: `git checkout -b feat/your-feature`  
3. Run `npm ci`  
4. Commit changes with clear messages  
5. Submit a PR to `main`  

**Guidelines:**  
- Maintain type safety  
- Keep UI components stateless  
- Update documentation for new features  

---

## 🗺️ Roadmap  
- [ ] Implement Jest/React Testing Library tests  
- [ ] Add JWT-based authentication  
- [ ] Integrate real-time updates via WebSockets  
- [ ] Create admin dashboard for statistics  

---

## 📄 License  
MIT © 2024 kaihere14  
Full license text in `LICENSE`.  

---

*Happy hacking! 🚀*