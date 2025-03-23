da

# 📝 Next.js Blog Project

## 🚀 Project Overview

This is a **full-stack blogging platform** built with **Next.js, Tailwind CSS, and Prisma**. It allows **admins** to create and manage blogs from a **dashboard**, while **users** can read blogs and leave comments.

## ✨ Features

- 📌 **Homepage** – Displays a list of published blogs.
- 👤 **Profile Page** – Users can view and update their profiles.
- 🏷️ **Blogs** – Users can read blogs, and leave comments.
- 📊 **Dashboard (Admin Only)** – Admins can create, edit, and delete blogs.
- ℹ️ **About Page** – Information about the platform.
- 📞 **Contact Page** – Allows users to contact the admin.
- 🎨 **Styled with Tailwind CSS** for a modern UI.
- ⚡ **Prisma for database management** (SQLite for local development).

## 🏗️ Tech Stack

- **Next.js** – Server-side rendering & routing
- **Tailwind CSS** – Styling
- **Prisma** – ORM for database management
- **SQLite** – Database (can be changed to PostgreSQL/MySQL)

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/rofson17/nextjs-blogs.git
cd nextjs-blogs
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Set Up Environment Variables

Create a `.env` file in the root directory and add:

```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="your-secret-key"
```

### 4️⃣ Run Prisma Migrations

```sh
npx prisma migrate dev --name init
```

### 5️⃣ Start the Development Server

```sh
npm run dev
```

## 🛠️ Usage

- Visit `http://localhost:3000/` to see the homepage.
- Log in as an **admin** to access the dashboard.
- Users can browse blogs and leave comments.

## 🔒 Admin Dashboard

- Navigate to `/dashboard` (Admin only)
- Create, edit, and delete blogs.

## 📸 Screenshots

> Add screenshots here if available.

## 🚀 Deployment

To deploy the project on **Vercel**, follow these steps:

1. Push the project to **GitHub/GitLab**.
2. Connect the repository to **Vercel**.
3. Set up the environment variables in Vercel.
4. Deploy! 🎉

## 🛠️ Contributing

Contributions are welcome! Fork the repo and submit a PR.


## 📩 Contact

For any questions, reach out at [your-email@example.com](mailto\:your-email@example.com).


