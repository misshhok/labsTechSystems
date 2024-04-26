import React from 'react';
import styles from "../Task.module.css";
import {ReactComponent as Timer} from '../icons/clock.svg'
import {ReactComponent as Pencil} from '../icons/pencil.svg'
import {ReactComponent as Delete} from '../icons/delete.svg'
import {Link, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getTrackId, removeCompleteTodo, removeTodo, toggleTrack} from "../../../store/todoSlice";
import cn from "classnames";

const Toolkit = ({id, isComplete}) => {
  const dispatch = useDispatch()
  const track = useSelector(state => state.tasks.track)

  return (
    <div className={styles.toolkit}>
      {isComplete ? <div></div> : <Timer className={cn(styles.icon, {
        [styles.iconActive]: track.isTracking && track.taskId == id
      })} onClick={()=> {
        if(!track.isTracking){
          dispatch(toggleTrack(id))
          dispatch(getTrackId(id))
        }
      }}/>}
      <div>
        {isComplete ? <div></div> : <Link to={`/tasks/${id}/edit`}><Pencil className={styles.icon}/></Link>}
        <Delete onClick={() => dispatch( isComplete ? removeCompleteTodo(id) : removeTodo(id))} className={styles.icon}/>
      </div>
    </div>
  );
};

export default Toolkit;