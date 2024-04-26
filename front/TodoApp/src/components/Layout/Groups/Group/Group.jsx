import React from 'react';
import styles from './Group.module.css'
import {ReactComponent as Delete} from "./delete.svg";
import {useDispatch} from "react-redux";
import {deleteGroup} from "../../../../store/groupSlice";
import {Link, useLocation} from "react-router-dom";
import {deleteGroupComplete, deleteGroupTask} from "../../../../store/todoSlice";
import {useParams} from "react-router";

const Group = ({color, groupname, idGroup, close}) => {
  const dispatch = useDispatch()


  function clearGroup() {
    dispatch(deleteGroup(idGroup))
    dispatch(deleteGroupTask(idGroup))
  }

  return (
    <div className={styles.group}>
      <div style={{background: color}} className={styles.color}></div>
      <Link onClick={close} to={`/group/${idGroup}`}><div className={styles.groupname}>{groupname}</div></Link>
      <Delete className={styles.delete} onClick={() => clearGroup()}/>
    </div>
  );
};

export default Group;