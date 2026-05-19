import "../styles/FilterBar.css";

function FilterBar({ filter, onFilterChange, searchQuery, onSearchChange }) {
  return (
    <div className="filter-bar">
      <div className="filter-bar-tabs">
        {["all", "active", "completed"].map((tab) => (
          <button
            key={tab}
            className={`filter-bar-tab ${
              filter === tab ? "filter-bar-tab-active" : ""
            } `}
            onClick={() => onFilterChange(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      <input
        className="filter-bar-search"
        type="text"
        placeholder="🔍 Search tasks..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default FilterBar;
