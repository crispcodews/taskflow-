import { useState, useEffect } from "react";
import "../styles/TaskItem.css";

function TaskItem({ task, onDelete, onToggle, onEdit }) {
  const [isEditing, setIsEdititng] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editPriority, setEditPriority] = useState(task.priority);
  const [editDueDate, setEditDueDate] = useState(task.dueDate);

  useEffect(() => {
    setEditTitle(task.title);
    setEditPriority(task.priority);
    setEditDueDate(task.dueDate);
  }, [task])

  const priorityLabel = {
    low: "🟢 Low",
    medium: "🟡 Medium",
    high: "🔴 High",
  };

  function handleSave() {
    if (!editTitle.trim()) return;
    onEdit(task.id, {
      title: editTitle,
      priority: editPriority,
      dueDate: editDueDate,
    });
    setIsEdititng(false);
  }

  function handleCancel() {
    setEditTitle(task.title);
    setEditPriority(task.priority);
    setEditDueDate(task.dueDate);
    setIsEdititng(false);
  }

  if (isEditing) {
    return (
      <div className="task-item task-item-editing">
        <div className="task-item-edit-fields">
          <input
            className="task-item-edit-input"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <div className="task-item-edit-row">
            <select
              className="task-item-edit-select"
              value={editPriority}
              onChange={(e) => setEditPriority(e.target.value)}
            >
              <option value="low">🟢 Low</option>
              <option value="medium">🟡 Medium</option>
              <option value="high">🔴 High</option>
            </select>
            <input
              className="task-item-edit-date"
              type="date"
              value={editDueDate}
              onChange={(e) => setEditDueDate(e.target.value)}
            />
          </div>
        </div>
        <div className="task-item-edit-actions">
          <button className="task-item-save" onClick={handleSave}>
            Save
          </button>
          <button className="task-item-cancel" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`task-item ${task.completed ? "task-item-completed" : ""}`}>
      <input
        className="task-item-checkbox"
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />

      <div className="task-item-main">
        <span className="task-item-title">{task.title}</span>
        <div className="task-item-meta">
          <span className="task-item-priority">
            {priorityLabel[task.priority]}
          </span>
          {task.dueDate && (
            <span className="task-item-due">📅 {task.dueDate}</span>
          )}
        </div>
      </div>
      <div className="task-item-actions">
        <button className="task-item-edit" onClick={() => setIsEdititng(true)}>
          ✏️
        </button>
        <button classname="task-item-delete" onClick={() => onDelete(task.id)}>
          🗑
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
