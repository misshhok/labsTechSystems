import React from 'react';
import styles from './GroupTask.module.css'

const GroupTask = ({name, color}) => {
  return (
      <div className={styles.groupTask}>
        <div style={{background: color}} className={styles.color}></div>
        <div className={styles.name}>{name}</div>
      </div>
  );
};

export default GroupTask;