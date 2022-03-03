import React from "react";
import Task from "./Task"

function TaskList({ tasks }) {
  const allTasks = tasks.map(task => (
    <Task
        key={task.text}
        task={task.text}
        category={task.category}
    />))

  return (
    <div className="tasks">
      {allTasks}
    </div>
  );
}

export default TaskList;
