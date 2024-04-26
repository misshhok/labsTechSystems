import React from 'react';
import styles from './Actual.module.css'
import {useSelector} from "react-redux";
import stats from "../Stats/Stats";
import {dateD_M_Y} from "../../../../time";

const Actual = () => {

  const tasks = useSelector(state => state.tasks.tasks)
  const completedTasks = useSelector(state => state.tasks.completedTasks)

  const todayTasks = () => {
    return tasks.filter(task => task.time == dateD_M_Y(Date.now()))
  }
  const highTasks = () => {
    return tasks.filter(task => task.priority.value == 'High')
  }

  const comlexityTasks = () => {
    return tasks.filter(task => task.complexity == 5)
  }

  const todayCompeteTasks = () => {
    return completedTasks.filter(task => dateD_M_Y(task.completeTime) == dateD_M_Y(Date.now()))
  }


  const failedTasks = () => {
    const date = dateD_M_Y(Date.now())
    const today = new Date(date)

    return tasks.filter(task => {
      const myDate = new Date(task.time)
      let timeTask = myDate.getTime()
      return timeTask < today.getTime()
    })
  }

  return (
    <div className={styles.actual}>
      <h3 className={styles.title}>Актуально</h3>
      <div className={styles.elem}>
        <div className={styles.key}>Просроченных задач</div><div className={styles.count}>{failedTasks().length}</div>
      </div>
      <div className={styles.elem}>
        <div className={styles.key}> Сложных задач</div><div className={styles.count}>{comlexityTasks().length}</div>
      </div>
      <div className={styles.elem}>
        <div className={styles.key}>Важных задач</div><div className={styles.count}>{highTasks().length}</div>
      </div>
      <div className={styles.elem}>
        <div className={styles.key}>Задач на сегодня</div><div className={styles.count}>{todayTasks().length}</div>
      </div>
      <div className={styles.elem}>
        <div className={styles.key}>Выполненных задач на сегодня</div><div className={styles.count}>{todayCompeteTasks().length}</div>
      </div>
    </div>
  );
};

export default Actual;