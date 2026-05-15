import "../styles/Header.css";

function Header({ totalTasks, completedTasks }) {
  return (
    <header className="header">
      <div className="header-brand">
        <span className="header-icon">✦</span>
        <h1 className="header-title">TaskFlow</h1>
      </div>
      <div className="header-stats">
        <span>
          {completedTasks} / {totalTasks} completed
        </span>
      </div>
    </header>
  );
}

export default Header;
