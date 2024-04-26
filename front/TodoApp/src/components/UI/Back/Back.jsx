import React from 'react';
import {ReactComponent as BackIcon} from "./back.svg";
import style from './Back.module.css'

const Back = ({...props}) => {
  return (
    <button {...props} className={style.back}>
      <BackIcon className={style.icon}/>
    </button>
  );
};

export default Back;