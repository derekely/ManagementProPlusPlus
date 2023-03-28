import React, { useState } from "react";
import TaskList from "../components/TaskList";
import "./Tasks.css";

function Task() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Learn C++", status: "new" },
    { id: 2, name: "Creating a website", status: "working" },
    { id: 3, name: "Call my boss", status: "done" },
  ]);

  const handleAddTask = (taskName) => {
    const newTask = {
      id: tasks.length + 1,
      name: taskName,
      status: "new",
    };
    setTasks([...tasks, newTask]);
  };

  const handleMoveTask = (taskId, newStatus) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, status: newStatus };
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  };

  const handleDragStart = (event, task) => {
    event.dataTransfer.setData("text/plain", task.id);
    event.dataTransfer.dropEffect = "move";
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (event, newStatus) => {
    const taskId = parseInt(event.dataTransfer.getData("text/plain"));
    handleMoveTask(taskId, newStatus);
  };

  const newTasks = tasks.filter((task) => task.status === "new");
  const workingTasks = tasks.filter((task) => task.status === "working");
  const doneTasks = tasks.filter((task) => task.status === "done");

  return (
    <div>
      <div className="task-lists">
        <TaskList
          title="New"
          tasks={newTasks}
          onAddTask={handleAddTask}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, "new")}
        />
        <TaskList
          title="Working"
          tasks={workingTasks}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, "working")}
        />
        <TaskList
          title="Done"
          tasks={doneTasks}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, "done")}
        />
      </div>
    </div>
  );
}

export default Task;
