import React, {useState} from 'react';
import styles from './Task.module.css'
import Toolkit from "./Toolkit/Toolkit";
import Add from "./Add/Add";
import Checkbox from "../UI/Checkbox/Checkbox";
import {useDispatch} from "react-redux";
import {completeTodo, returnTodo} from "../../store/todoSlice";

const Task = ({isComplete, task, editDate}) => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const openAdd = () => {
    setOpen(!open)
  }
  return (
    <div className={styles.taskBlock}>
      <div className={styles.task}>
        <div onClick={() => openAdd()} className={styles.taskName}>
          <Checkbox isComplete={isComplete} onClick={()=>dispatch(
            isComplete ? returnTodo(task) : completeTodo(task)
          )}/>
          <div>{task.taskname}</div>
        </div>
        <div className={styles.priority}>{task.priority.value}</div>
        <div className={styles.dueDate}>{editDate(task.time)}</div>
      </div>
      <Add isOpen={open} group={task.groupName} trackTime={task.trackTime} complexity={task.complexity} description={task.comment} />
      <Toolkit isComplete={isComplete} id={task.id}/>
    </div>
  );
};

export default Task;