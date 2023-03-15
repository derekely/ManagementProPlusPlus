import React from "react";
function TaskCard(props) {
  // Define a function to handle changes to the task status dropdown
  const handleStatusChange = (e) => {
    // Call the onStatusChange prop function with the task ID and new status value
    props.onStatusChange(props.id, e.target.value);
  }; // Define an object that maps task status values to background colors
  const statusColors = {
    "In Progress": "yellow",
    Completed: "green",
    Overdue: "red",
  }; // Define a style object for the card based on the task status
  const cardStyle = {
    backgroundColor: statusColors[props.taskStatus],
  }; // Render the task card component with the task name, description, status dropdown, // and background color based on the current task status
  return (
    <div className="task-card" style={cardStyle}>
      <h2>{props.taskName}</h2>
      <p>{props.taskDescription}</p>
      <select value={props.taskStatus} onChange={handleStatusChange}>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
        <option value="Overdue">Overdue</option>
      </select>
    </div>
  );
}
export default TaskCard;
