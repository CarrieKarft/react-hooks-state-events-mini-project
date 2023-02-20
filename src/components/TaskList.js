import React from "react";
import Task from "./Task"

function TaskList({ tasks, setTasks }) {
  

  function onHandleDelete(deleteText) {
    const nonDeletedTasks = tasks.filter(task => task.text !== deleteText)
    setTasks(nonDeletedTasks)
  }

  const taskMap = tasks.map((taskl) => {
    return <Task key={taskl.text} text={taskl.text} category={taskl.category} onHandleDelete={onHandleDelete}/>
  })
  return (
    <div className="tasks">
      {taskMap}
    </div>
  );
}

export default TaskList;
