import React from 'react';
import styles from './TimeEstimate.module.css'

const TimeEstimate = ({task, isEditTask, register,...props}) => {
  const today = () => {
    const date = new Date()
    let yyyy = date.getFullYear()
    let mm = date.getMonth() + 1
    if (mm < 10) {
      mm = '0' + mm
    }
    let dd = date.getDate()
    return `${yyyy}-${mm}-${dd}`
  }
  today()
  return (
    <div className={styles.timeEstimate}>
      Завершить до <input defaultValue={isEditTask && task.time} {...props} {...register('time')} className={styles.date} type='date' />
    </div>
  );
};

export default TimeEstimate;