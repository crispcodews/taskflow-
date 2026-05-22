import TaskItem from "./TaskItem";
import "../styles/TaskList.css";

function TaskList({ tasks, onDelete, onToggle, onEdit }) {
  if (tasks.length === 0) {
    return (
      <div className="task-list-empty">
        <span className="task-list-empty-icon">✦</span>
        <p>No tasks here!</p>
        <span>Add one above to get started.</span>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={tasks.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default TaskList;
