import React, { useState } from "react";

function Task({ task, category }) {
  const [delTask, setDelTask] = useState(false)

  if (delTask) return (null)
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{task}</div>
      <button className="delete" onClick={() => setDelTask(true)}>X</button>
    </div>
  );
}

export default Task;
