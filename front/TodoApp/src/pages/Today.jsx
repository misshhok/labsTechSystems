import React from 'react';
import TaskList from "../components/TaskList/TaskList";

const Today = () => {
  return (
    <div>
      <TaskList isToday={true}/>
    </div>
  );
};

export default Today;