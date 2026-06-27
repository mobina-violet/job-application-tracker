# 🗂️ Job Tracker — My First Next.js Project

A full-stack **Kanban-style job application tracker** built with Next.js 16, MongoDB, and Better Auth.
This is my **first Next.js project**, where I learned App Router, Server Actions, authentication, and drag-and-drop — all in one real-world app.

> 💡 Built by following a YouTube tutorial and customized with my own improvements.

---

## 📸 Preview

![Dashboard Preview](./public/preview.png)

---

## ✨ Features

- 🔐 Sign up & login with email/password (Better Auth)
- 🗃️ Kanban board with 5 columns: **Wish List, Applied, Interviewing, Offer, Rejected**
- 🖱️ Drag & drop job cards between columns (dnd-kit)
- ➕ Add, edit, and delete job applications
- 🌱 Seed script to populate default job data on first run
- 📱 Responsive layout

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Database | MongoDB Atlas + Mongoose |
| Authentication | Better Auth |
| Drag & Drop | dnd-kit |
| UI Components | shadcn/ui + Radix UI |
| Icons | Lucide React |

---

## 📁 Project Structure

```
job-application-tracker/
├── app/
│   ├── api/              # API routes (Better Auth)
│   ├── dashboard/        # Main Kanban board page
│   └── sign-in/          # Login & Sign up pages
├── components/
│   ├── ui/               # shadcn/ui components
│   ├── kanban-board.tsx  # Main Kanban component
│   ├── job-application-card.tsx
│   └── create-job-dialog.tsx
├── lib/
│   ├── actions/          # Server Actions (create, update, delete)
│   ├── auth/             # Better Auth config
│   ├── hooks/            # useBoards custom hook
│   ├── models/           # Mongoose models (Board, Column, JobApplication)
│   └── db.ts             # MongoDB connection
├── scripts/
│   └── seed.ts           # Seed script for default job data
└── .env.local            # Environment variables (not committed)
```

---

## 🚀 Getting Started Locally

### 1. Prerequisites

- Node.js 18 or higher
- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account (free tier is enough)

---

### 2. Clone the repository

```bash
git clone https://github.com/mobina-violet/job-application-tracker.git
cd job-application-tracker
```

---

### 3. Install dependencies

```bash
npm install
```

---

### 4. Set up environment variables

Create a `.env.local` file in the root of the project and add the following:

```env
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_random_secret_string
BETTER_AUTH_URL=http://localhost:3000
```

**MONGODB_URI** — Get this from MongoDB Atlas:
Atlas → Cluster → Connect → Drivers → copy the connection string

**BETTER_AUTH_SECRET** — Any random string. Generate one with:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

---

### 5. Run the development server

```bash
npm run dev
```

Open your browser and go to `http://localhost:3000`

---

### 6. Sign up and seed default data

1. Click **Sign Up** and create an account
2. Go to MongoDB Atlas → `user` collection → copy your `_id`
3. Open `scripts/seed.ts` and update this line:

```ts
const USER_ID = "paste_your_id_here";
```

4. Run the seed script:

```bash
npx tsx --env-file=.env.local scripts/seed.ts
```

5. Refresh the dashboard — you should see 15 default job applications 🎉

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server on localhost:3000 |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🔐 Environment Variables

| Variable | Description |
|---|---|
| `MONGODB_URI` | MongoDB Atlas connection string |
| `BETTER_AUTH_SECRET` | Secret key for Better Auth sessions |
| `BETTER_AUTH_URL` | Base URL of the app (http://localhost:3000 for local) |

---

## 🧠 What I Learned

This was my first Next.js project, and here's what I picked up:

- **App Router** — file-based routing with `page.tsx`, `layout.tsx`, and `loading.tsx`
- **Server Components vs Client Components** — knowing when to use `"use client"`
- **Server Actions** — type-safe data mutations without writing API routes
- **MongoDB + Mongoose** — modeling relationships between Board → Columns → Jobs
- **Better Auth** — email/password auth with database hooks for auto-setup on signup
- **dnd-kit** — drag-and-drop with sortable context and droppable zones
- **Tailwind CSS v4** — utility-first styling with custom CSS classes

---

## 🙋‍♀️ About Me

I'm **Mobina**, a junior frontend developer building my portfolio with React, TypeScript, and Next.js.
This is the first full-stack Next.js project I built — feel free to explore the code!

🔗 GitHub: [@mobina-violet](https://github.com/mobina-violet)

---

## 📄 License

This project was built for learning purposes, following a YouTube tutorial by [@machadop1407](https://github.com/machadop1407).
