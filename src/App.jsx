import { useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
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

  function addTask({ title, priority, dueDate }) {
    const newTask = {
      id: Date.now(),
      title,
      priority,
      dueDate,
      completed: false,
      createdAt: Date.now(),
    };
    setTasks([newTask, ...tasks]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function toggleComplete(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function editTask(id, updatedData) {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, ...updatedData } : task))
    );
  }

  const filteredTasks = tasks
    .filter((task) => {
      if (filter === "active") return !task.completed;
      if (filter === "completed") return task.completed;
      return true;
    })
    .filter((task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="app-container">
      <Header totalTasks={tasks.length} completedTasks={completedTasks} />
      <TaskForm onAddTask={addTask} />
      <FilterBar
        filter={filter}
        onFilterChange={setFilter}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <TaskList
        tasks={filteredTasks}
        onDelete={deleteTask}
        onToggle={toggleComplete}
        onEdit={editTask}
      />
    </div>
  );
}

export default App;
