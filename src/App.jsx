import { useState } from "react";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Build TaskFlow UI",
      completed: false,
      priority: "high",
      dueDate: "2026-05-20",
      createdAt: Date.now(),
    },
    {
      id: 2,
      title: "Set up data layer",
      completed: true,
      priority: "medium",
      dueDate: "2026-05-13",
      createdAt: Date.now(),
    },
    {
      id: 3,
      title: "Write README",
      completed: false,
      priority: "low",
      dueDate: "",
      createdAt: Date.now(),
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const completedTasks = tasks.filter((t) => t.completed).length;

  return (
    <div className="app-container">
      <Header totalTasks={tasks.length} completedTasks={completedTasks} />
      <p>Tasks in state: {tasks.length}</p>
    </div>
  );
}

export default App;
