import React from 'react';
import styles from "./Stats.module.css";
import {useSelector} from "react-redux";

const Stats = () => {
  const tasks = useSelector(state => state.tasks)

  function allTime(){
    const arr = [...tasks.tasks, ...tasks.completedTasks].map(task => task.trackTime)
    return arr.length > 0 ? arr.reduce((acum, cur) => acum+cur) : 0
  }

  function msToHM(ms) {
    var sign = ms < 0 ? '-' : ''
    var abs = Math.abs(ms)
    var h = Math.floor(abs / 3600000)
    var m = ('0' + Math.floor(abs / 60000) % 60).slice(-2)
    var s = ('0' + Math.floor(abs / 1000) % 60).slice(-2)
    return sign + h + 'h ' + m + 'm'
  }
  return (
    <div className={styles.stats}>
      <h3 className={styles.title}>Сатистика</h3>
      <div className={styles.elem}>
        <div className={styles.key}>Всего выполненно задач</div><div className={styles.count}>{tasks.completedTasks.length}</div>
      </div>
      <div className={styles.elem}>
        <div className={styles.key}>Всего задач</div><div className={styles.count}>{tasks.tasks.length}</div>
      </div>
      <div className={styles.elem}>
        <div className={styles.key}>Всего затрачено времени</div><div className={styles.count}>{msToHM(allTime())}</div>
      </div>
    </div>
  );
};

export default Stats;