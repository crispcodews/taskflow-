import { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  // Load tasks from localStorage on first render
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("taskflow-tasks");
    return saved ? JSON.parse(saved) : [];
  });

  // Tracks the current search input value

  const [searchQuery, setSearchQuery] = useState("");

  // Tracks which filter tab is active: 'all' | 'active' | 'completed'
  const [filter, setFilter] = useState("all");

  /* Persist tasks to localStorage whenever the tasks array changes.
   The [tasks] dependency array means this effect only runs when tasks updates.
   */
  useEffect(() => {
    localStorage.setItem("taskflow-tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Derived value - recalculated on every render, no need for seperate state
  const completedTasks = tasks.filter((t) => t.completed).length;

  /* addTask - creates a new task object and prepends it to the tasks array.
We use spread [...tasks] to create a new array instead of mutating original.
 */
  function addTask({ title, priority, dueDate }) {
    const newTask = {
      id: Date.now(), //Simple unique Id using timestamp
      title,
      priority,
      dueDate,
      completed: false,
      createdAt: Date.now(),
    };
    setTasks([newTask, ...tasks]);
  }

  // deleteTask - Removes a task by filtering it out of the array
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  /* toggleComplete - Flips the completed boolean on a task.
  Uses map to return a new array with updated task.
  The spread operator {...task} copies all fields, then override completed.
   */
  function toggleComplete(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  /* editTask - Updates specific fields on a task.
  Spread operators merge the old task with the new data.
   */
  function editTask(id, updatedData) {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, ...updatedData } : task))
    );
  }

  /* filteredTasks - Derived list of tasks based on active filter and search query.
   filtering the orignal tasks array without modifying it, 
  so switching filters never loses any data. */
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
      {/* Header recieves values, not the full task array */}
      <Header totalTasks={tasks.length} completedTasks={completedTasks} />

      {/* Task form only needs the addTask handler - it doesn't read tasks */}
      <TaskForm onAddTask={addTask} />

      {/* FilterBar controls both the filter tab and search query */}
      <FilterBar
        filter={filter}
        onFilterChange={setFilter}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* TaskList recieves the filtered view, not the full tasks array */}
      <TaskList
        tasks={filteredTasks}
        onDelete={deleteTask}
        onToggle={toggleComplete}
        onEdit={editTask}
      />
      <Footer />
    </div>
  );
}

export default App;
