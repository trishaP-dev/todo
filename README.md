This is a modern Todo application built using React and Redux Toolkit for efficient global state management. The app allows users to create, delete, and mark tasks as completed, with real-time updates and persistent storage using the browser's localStorage.

It also includes a fully functional dark/light theme toggle powered by Redux and styled using Tailwind CSS.

🔗Live Demo 
todo-ashy-rho.vercel.app

✨ Features
- ➕ Add new tasks
- 🗑 Delete tasks
- ✅ Mark tasks as completed with checkbox
- 📊 Dynamic count of remaining tasks
- 🌙 Dark / ☀️ Light theme toggle
- 💾 LocalStorage persistence (tasks survive page refresh)
- 📱 Responsive UI with Tailwind CSS

🛠 Tech Stack
- React
- Redux Toolkit
- Tailwind CSS
- Vite
- Vercel (Deployment)

```
todo-app/
│
├── public/
│
├── src/
│   ├── app/
│   │   └── store.js
│   │
│   ├── features/
│   │   ├── Todo/
│   │   │   └── TodoSlice.js
│   │   └── theme/
│   │       └── themeSlice.js
│   │
│   ├── components/
│   │   ├── AddTodo.jsx
│   │   ├── Todos.jsx
│   │   └── ThemeToggle.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── tailwind.config.js
└── vite.config.js
```

