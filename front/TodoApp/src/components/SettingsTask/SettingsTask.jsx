import React, {useState} from 'react';
import styles from './SettingsTask.module.css'
import Complexity from "./Complexity/Complexity";
import Priority from "./Priority/Priority";
import TimeEstimate from "./TimeEstimate/TimeEstimate";
import Comment from "./Comment/Comment";
import {Controller} from "react-hook-form";
import {useSelector} from "react-redux";
import {useParams} from "react-router";
import SelectGroup from "./SelectGroup/SelectGroup";

const SettingsTask = ({register, control, isEditTask, task}) => {
  return (
    <div className={styles.settings}>
      <Controller
        name={'complexity'}
        control={control}
        defaultValue={isEditTask && task.complexity}
        render={({field}) => (
          <Complexity isEditable name={"complexity"} setComplexity={field.onChange} complexity={field.value}/>
        )}
      />
      <TimeEstimate isEditTask={isEditTask} task={task} register={register} name={"time"}/>
      <Priority isEditTask={isEditTask} task={task} control={control} register={register} name={"priority"}/>
      <SelectGroup isEditTask={isEditTask} task={task} control={control} register={register} name={"priority"}/>
      <Comment isEditTask={isEditTask} task={task} register={register} name={"description"}/>
    </div>
  );
};

export default SettingsTask;