import React, {useState} from 'react';
import styles from './Groups.module.css'
import {ReactComponent as Plus} from "./plus.svg";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {addGroup} from "../../../store/groupSlice";
import Group from "./Group/Group";
import cn from "classnames";
const Groups = ({openGroup, close}) => {
  const {handleSubmit, register} = useForm()
  const [color, setColor] = useState(()=>randomColor())
  const dispatch = useDispatch()
  const groups = useSelector(state => state.groups.groups)

  function randomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


  const onSubmit = (d) => {
    dispatch(addGroup({...d, color: color, idGroup: Date.now()}))

    const inputName = document.getElementById('sendGroupname')
    inputName.value = ''
    setColor(()=> randomColor())
  }
  return (
    <div className={cn(styles.groupsAll, {
      [styles.groupsAllOpen]: openGroup
    })}>
      <form className={styles.groups} onSubmit={handleSubmit(onSubmit)}>
        <input value={color} onChange={(e)=>setColor(e.target.value)} id={'sendColor'} type={"color"} className={styles.color}/>
        <input {...register('groupname')} id={'sendGroupname'} required type="text" placeholder={'Создать'} className={styles.groupname}/>
        <button type={'submit'} className={styles.button}><Plus className={styles.plus}/></button>
      </form>
      <div className={styles.group}>
        {
          groups.map(group =><Group close={close} idGroup={group.idGroup} color={group.color} groupname={group.groupname}/>)
        }
      </div>
    </div>
  );
};

export default Groups;