import React from 'react';
import styles from './Header.module.css'
import cn from "classnames";
import {ReactComponent as User} from "./user.svg";

const Header = ({className, activeSidebar, setActiveSidebar}) => {

  return (
    <header className={cn(styles.header, className)}>
      <div className={styles.title}>To Do</div><div onClick={()=>setActiveSidebar(()=>!activeSidebar)} className={cn(styles.burger, {
        [styles.burgerClose]: activeSidebar
    })}></div>
    </header>
  );
};

export default Header;