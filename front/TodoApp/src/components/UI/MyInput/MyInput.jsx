import React, {useState} from 'react';
import styles from './MyInput.module.css'

const MyInput = ({isEditable, placeholder, register, defVal, ...props}) => {
  return (
    <input autoComplete="off" {...register('taskname')} defaultValue={defVal} required {...props} className={styles.input} placeholder={placeholder} type="text"/>
  );
};

export default MyInput;