import { useState } from "react";
import "../styles/TaskForm.css";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("medium");
  const [dueDate, setDueDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return;

    onAddTask({ title, priority, dueDate });

    setTitle("");
    setPriority("medium");
    setDueDate("");
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        className="task-form-input"
        type="text"
        placeholder="Add a new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="task-form-row">
        <select
          className="task-form-select"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="low">🟢 Low</option>
          <option value="medium">🟡 Medium</option>
          <option value="high">🔴 High</option>
        </select>
        <input
          className="task-form-date"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button className="task-form-btn" type="submit">
          + Add Task
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
