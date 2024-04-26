import React, {useState} from 'react';
import Task from "../Task/Task";
import {useSelector} from "react-redux";
import {dateDMY} from "../../time";
import styles from './TaskList.module.css'

const TaskList = ({isToday = false, isComplete = false, isImportant =false, id, isGroupPage}) => {
  const tasks = useSelector(state => state.tasks.tasks)
  const completedTasks = useSelector(state => state.tasks.completedTasks)

  function checknull(item, value) {
    if (item) {
      return item
    }
    return  value
  }

  const editDate = (str) => {
    if (str) {
      let arr = str.split('-')
      const [y, m, d] = arr
      return  `${d}.${m}.${y}`
    }
    return ''
  }


  const todayTasks = () => {
    return tasks.filter(task => editDate(task.time) == dateDMY(Date.now()))
  }
  const importantTasks = () => {
    return tasks.filter(task => task.priority.value == "High")
  }

  const groupTask = () => {
    return tasks.filter(task => task.groupName.id == id)
  }
  const checkPage = (arr) => {
    if (arr.length > 0) {
      return (arr.map(task => (
        <Task editDate={editDate} isComplete={isComplete} isToday={isToday} task={task}/>
      )) )
    }
    return <div className={styles.noTasks}>Задач не найдено</div>
  }

  const returnPage = () => {
    if(isToday) {
      return checkPage(todayTasks())
    } else if (isComplete) {
      return checkPage(completedTasks)
    } else if(isImportant) {
      return checkPage(importantTasks())
    } else if(isGroupPage) {
      return checkPage(groupTask())
    }
    return checkPage(tasks)
  }

  return (
    <div className={styles.tasklist}>
      {
        returnPage()
      }
    </div>
  );
};

export default TaskList;