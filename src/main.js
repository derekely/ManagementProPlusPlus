import React, { useState } from "react";
import TaskCard from "./TaskCard";
function ProjectTasks(props) {
  // Define a state variable to manage the list of tasks
  const [tasks, setTasks] = useState(props.tasks); // Define a function to handle changes to task status
  const handleStatusChange = (taskId, newStatus) => {
    // Update the tasks state by mapping over the existing tasks array and returning
    // a new array with the updated task status
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, status: newStatus };
      }
      return task;
    });
    setTasks(updatedTasks);
  }; // Map over the tasks array and create a TaskCard component for each task
  const taskCards = tasks.map((task) => {
    return (
      <TaskCard
        key={task.id}
        id={task.id}
        taskName={task.name}
        taskDescription={task.description}
        taskStatus={task.status}
        onStatusChange={handleStatusChange}
      />
    );
  }); // Render the ProjectTasks component with the task cards
  return (
    <div>
      <h1>Project Tasks</h1>
      {taskCards}{" "}
    </div>
  );
}
export default ProjectTasks;
