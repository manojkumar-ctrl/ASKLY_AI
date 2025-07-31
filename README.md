# 🚀 ASKLY_AI

ASKLY_AI is an AI-powered creation platform that enables users to generate content, enhance images, and review resumes — all from a sleek, user-friendly dashboard. Designed with modern developers and creators in mind, it features both **free** and **premium** plans with seamless Clerk-based authentication and billing.

---

## 🧩 Features

### 🖥️ Dashboard
- Personalized dashboard to manage your creations
- Real-time tracking of generated content and image edits

### 🎨 Image Tools
- **Image Generation** using AI prompts
- **Background Remover** for clean transparent PNGs
- **Object Remover** to clean up unwanted parts of any image
- **Image Publishing** to a public **Community Page**

### 📝 Content Tools
- **Article Generation** with AI (short-form & long-form)
- **Resume Review** powered by AI feedback and job-ready suggestions

### 💎 Plans
- **Free Plan**: Limited daily usage
- **Premium Plan**: Unlimited access to all tools
- Plan enforcement handled using [Clerk's `requireAuth` and billing metadata](https://clerk.dev)

---

## 🔐 Authentication & Billing

- **Clerk** is used for secure login/signup with Google, Email, and more.
- Premium access is managed through Clerk's `privateMetadata` and usage tracking.
- JWT tokens are used to protect routes and verify plans in backend middleware.

---

## 🗄️ Tech Stack

| Tech           | Usage                                      |
|----------------|--------------------------------------------|
| **React**      | Frontend UI                                |
| **TailwindCSS**| Styling                                     |
| **Clerk**      | Authentication & Billing                   |
| **Node.js**    | Backend API with Express                   |
| **PostgreSQL** | Database for users, creations, and usage   |
| **Cloudinary** | Media hosting & image transformation       |
| **Vite**       | Frontend bundler                           |

---

## 📦 Project Structure


ASKLY_AI/
├── client/                   # Frontend (React)
│   ├── components/           # UI components
│   ├── pages/                # Dashboard & routes
│   ├── assets/               # Static images and icons
│   └── ...
├── server/                   # Backend (Node.js + Express)
│   ├── routes/               # API routes (AI, user, auth)
│   ├── controllers/          # Route logic
│   ├── middlewares/          # Clerk Auth, Plan checks
│   └── ...
├── PostgreSQL/                   # PostgreSQL schema and queries
├── README.md
└── .env
