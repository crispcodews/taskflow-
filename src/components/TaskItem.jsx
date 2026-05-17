import "../styles/TaskItem.css";

function TaskItem({ task, onDelete }) {
  const priorityLabel = {
    low: "🟢 Low",
    medium: "🟡 Medium",
    high: "🔴 High",
  };

  return (
    <div
      className={`task-item ${task.completed ? "task-item-completed" : ""}`}
    >
      <div className="taask-item-main">
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
      <button classname="task-item-delete" onClick={() => onDelete(task.id)}>
        🗑
      </button>
    </div>
  );
}

export default TaskItem;
