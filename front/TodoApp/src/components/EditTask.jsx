import React from 'react';
import {useParams} from "react-router";
import TaskForm from "./TaskForm/TaskForm";
import {useSelector} from "react-redux";
import Back from "./UI/Back/Back";
import {useNavigate} from "react-router-dom";

const EditTask = () => {
  const {id} = useParams()
  const tasks = useSelector(state => state.tasks.tasks)
  const [task] = tasks.filter(task => task.id == id)
  const navigate = useNavigate()
  return (
    <div>
      <Back onClick={()=>navigate(-1)}/>
      <TaskForm isEditable task={task}/>
    </div>
  );
};

export default EditTask;