import React, {useState} from 'react';
import styles from './Sidebar.module.css'
import cn from 'classnames'
import {NavLink} from "react-router-dom";
import Groups from "../Groups/Groups";

const Sidebar = ({className,setActiveSidebar}) => {
  const [openGroup, setOpenGroup] = useState(true)
  function close() {
    setActiveSidebar(false)
  }
  return (
    <div className={cn(styles.sidebar, className)}>
      <div>
        <NavLink onClick={close} className={styles.sidebarLink} to={'/'}>Главная</NavLink>
        <NavLink onClick={close} className={styles.sidebarLink} to={'/create'}>Создать задачу</NavLink>
        <NavLink onClick={close} className={styles.sidebarLink} to={'/tasks'}>Все задачи</NavLink>
        <NavLink onClick={close} className={styles.sidebarLink} to={'/today'}>Сегодня</NavLink>
        <NavLink onClick={close} className={styles.sidebarLink} to={'/important'}>Важно</NavLink>
        <NavLink onClick={close} className={styles.sidebarLink} to={'/complete'}>Завершенные</NavLink>
      </div>
      <div className={styles.stick}></div>
      <div className={styles.group}>
        <button onClick={()=>setOpenGroup(()=>!openGroup)} className={styles.button}>Группы</button>
        <Groups close={close} openGroup={openGroup}/>
      </div>
    </div>
  );
};

export default Sidebar;