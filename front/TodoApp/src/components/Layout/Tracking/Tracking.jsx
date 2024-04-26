import React, {useEffect, useState} from 'react';
import style from './Tracking.module.css'
import {ReactComponent as Pause} from "./pause.svg";
import {ReactComponent as Resume} from "./resume.svg";
import {ReactComponent as Stop} from "./stop.svg";
import {useDispatch, useSelector} from "react-redux";
import {endTrack, toggleTrack} from "../../../store/todoSlice";
import msToHms from "ms-to-hms";
import cn from "classnames";

const Tracking = () => {
  const msToHms = require('ms-to-hms')
  const dispatch = useDispatch()
  const [pause, setPause] = useState(false)
  let [time, setTime] = useState(0);

  useEffect(()=>{
    let timer = setInterval(()=> {
      if(!pause) {
        setTime(()=>time+1000)
      }
    }, 1000)
    return () => clearInterval(timer)
  })
  const stop = () => {
    setPause(true)
  }

  const resume = () => {
    setPause(false)
  }

  function stopTrack() {
    dispatch(endTrack(time))
    setTime(0)
    setPause(false)
    dispatch(toggleTrack())
  }

  return (
    <div className={style.tracking}>
      <Pause className={cn(style.icon, {
        [style.activeButton]: pause
      })} onClick={stop}/>
      <Resume className={cn(style.icon, {
        [style.activeButton]: !pause
      })} onClick={resume}/>
      <Stop className={style.icon} onClick={()=>stopTrack()}/>
      <div className={style.time}>{msToHms(time)}</div>
    </div>
  );
};

export default Tracking;