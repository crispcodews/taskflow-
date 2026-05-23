# ✦ TaskFlow

A clean, responsive task manager built with React. TaskFlow helps you organize your day with priority levels, due dates, filtering, and search — all saved automatically to your browser.

![TaskFlow Preview](./preview.png)

## Features

- Add, edit, and delete tasks
- Mark tasks as complete with a single click
- Set priority levels — Low, Medium, or High
- Add due dates to tasks
- Filter tasks by All, Active, or Completed
- Search tasks in real time
- Tasks persist across page refreshes with localStorage
- Smooth animations and responsive layout

## Tech Stack

- React 18
- Vite
- Plain CSS with CSS custom properties (variables)
- localStorage for persistence

## Getting Started

```bash
# Clone the repo
git clone https://github.com/yourusername/taskflow.git

# Navigate into the project
cd taskflow

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

src/
├── components/
│   ├── Header.jsx
│   ├── TaskForm.jsx
│   ├── TaskList.jsx
│   ├── TaskItem.jsx
│   ├── FilterBar.jsx
│   └── Footer.jsx
├── styles/
│   ├── Header.css
│   ├── TaskForm.css
│   ├── TaskList.css
│   ├── TaskItem.css
│   ├── FilterBar.css
│   └── Footer.css
├── App.jsx
└── main.jsx

## Author

Built by **Karina Mallory**