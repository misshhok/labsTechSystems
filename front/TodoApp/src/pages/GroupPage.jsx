import React from 'react';
import TaskList from "../components/TaskList/TaskList";
import {useParams} from "react-router";

const GroupPage = () => {
  const {id} = useParams()
  return (
    <div>
      <TaskList isGroupPage id={id}/>
    </div>
  );
};

export default GroupPage;