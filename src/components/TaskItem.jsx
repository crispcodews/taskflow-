import { useState } from "react";
import "../styles/TaskItem.css";

function TaskItem({ task, onDelete, onToggle, onEdit }) {
  // Local state for edit mode
  const [isEditing, setIsEditing] = useState(false);

  // Local copies of task fields used while editing
  const [editTitle, setEditTitle] = useState(task.title);
  const [editPriority, setEditPriority] = useState(task.priority);
  const [editDueDate, setEditDueDate] = useState(task.dueDate);

  // Maps priority value to a readable emoji label
  const priorityLabel = {
    low: "🟢 Low",
    medium: "🟡 Medium",
    high: "🔴 High",
  };

  /* handleSave - Validates and saves the edited task.
  Calls onEdit with the updated fields, then exits edit mode.
   */
  function handleSave() {
    if (!editTitle.trim()) return;
    onEdit(task.id, {
      title: editTitle,
      priority: editPriority,
      dueDate: editDueDate,
    });
    setIsEditing(false);
  }

  /* handleCancel - Discards edits and resets local state back to original task values.
   */
  function handleCancel() {
    setEditTitle(task.title);
    setEditPriority(task.priority);
    setEditDueDate(task.dueDate);
    setIsEditing(false);
  }

  // Render the edit mode UI when isEditing is true
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

  // Default view - normal task card
  return (
    <div
      className={`task-item ${
        task.completed ? "task-item-completed" : ""
      } task-item-priority-${task.priority}`}
    >
      {/* Checkbox toggles the completed status */}
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
          {/* Only render due date if one ws set */}
          {task.dueDate && (
            <span className="task-item-due">📅 {task.dueDate}</span>
          )}
        </div>
      </div>
      <div className="task-item-actions">
        <button className="task-item-edit" onClick={() => setIsEditing(true)}>
          ✏️
        </button>
        <button className="task-item-delete" onClick={() => onDelete(task.id)}>
          🗑
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
