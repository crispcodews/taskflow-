import TaskItem from './TaskItem';
import "../styles/TaskList.css";

function TaskList({ tasks, onDelete, onToggle, onEdit }) {
  if (tasks.length === 0) {
    return <p className="task-list-empty">No tasks yet. Add one above! 🎉</p>;
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
