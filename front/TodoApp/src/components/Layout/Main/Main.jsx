import React from 'react';
import cn from "classnames";
import styles from "./Main.module.css"

const Main = ({children, className}) => {
  return (
    <div className={cn(styles.main, className)}>
      {children}
    </div>
  );
};

export default Main;