import React, { useState } from "react";

function TaskList({
  title,
  tasks,
  onAddTask,
  onDragStart,
  onDragOver,
  onDrop,
}) {
  const [newTaskName, setNewTaskName] = useState("");

  const handleAddTask = () => {
    onAddTask(newTaskName);
    setNewTaskName("");
  };

  return (
    <div className="task-list">
      <h2>{title}</h2>
      <ul onDragOver={onDragOver} onDrop={onDrop}>
        {tasks.map((task) => (
          <li
            key={task.id}
            draggable="true"
            onDragStart={(event) => onDragStart(event, task)}
          >
            {task.name}
          </li>
        ))}
      </ul>
      {/* Conditionally render Add Task section for New list only */}
      {title === "New" && (
        <div className="add-task">
          <input
            type="text"
            value={newTaskName}
            onChange={(event) => setNewTaskName(event.target.value)}
          />
          <button onClick={handleAddTask}>Add Task</button>
        </div>
      )}
    </div>
  );
}

export default TaskList;
