import React from 'react';
import TaskList from "../components/TaskList/TaskList";

const Complete = () => {
  return (
    <div>
      <TaskList isComplete={true}/>
    </div>
  );
};

export default Complete;