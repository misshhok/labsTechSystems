import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import styles from './GroupsTrack.module.css'
import {addTrackTime} from "../../../store/groupSlice";

const GroupsTrack = ({className}) => {
  const selector = useSelector(state => state.tasks)
  const groups = useSelector(state => state.groups.groups)
  const dispatch = useDispatch()
  const tasks = selector.tasks
  const complete = selector.completedTasks
  const msToHms = require('ms-to-hms')

  function filterArr() {
    const allTask = [...tasks, ...complete]
    let filterArr = allTask.filter(task => task.groupName)
    return filterArr.map(task => ({track: task.trackTime, group: task.groupName.value, color: task.groupName.color}))
  }

  const calcTime = (arr) => {
    const uniqueArr = [];
    for (let i = 0; i<arr.length; i++) {
      const group = uniqueArr.find(elem => elem.group == arr[i].group)
      if(group) {
        group.track += arr[i].track
      } else {
        uniqueArr.push(arr[i])
      }
    }
    return uniqueArr
  }
  console.log(filterArr())
  return (
    <div className={className}>
      <div className={styles.title}>Затраченное время на группы</div>
      <div className={styles.allGroups}>
        {
          filterArr().length !=0 ? calcTime(filterArr()).map(group => group.group && (
            <div className={styles.groups}>
              <div style={{background: group.color}} className={styles.color}></div>
              <div className={styles.name}>{group.group}</div>
              <div className={styles.track}>{msToHms(group.track)}</div>
            </div>
          )) : <div className={styles.noGroups}>Пока у вас нет задач с группами</div>
        }
      </div>
    </div>
  );
};

export default GroupsTrack;