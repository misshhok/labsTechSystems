import React from 'react';
import styles from "./Add.module.css";
import { ReactComponent as StarIcon } from "../../SettingsTask/Complexity/star.svg"
import Complexity from "../../SettingsTask/Complexity/Complexity";
import cn from "classnames";
import Desc from "./Desc";
import msToHms from "ms-to-hms";
import Group from "../../Layout/Groups/Group/Group";
import GroupTask from "./GroupTask/GroupTask";

const Add = ({description, complexity, isOpen, trackTime, group, ...props}) => {
  const msToHms = require('ms-to-hms')
  return (
    <div className={cn({
      [styles.add]: complexity || description || trackTime>-1,
      [styles.active]: isOpen
    })}>
      <div className={cn(styles.items)}>
        {group.id ? <GroupTask color={group.color} idGroup={group.id} isTask name={group.value}/> : <></>}
        {complexity ? <Complexity isEditable={false} complexity={complexity}/> : <></>}
        <div>Затраченное время {msToHms(trackTime)}</div>
        {description && <Desc description={description}/>}
      </div>
    </div>
  );
};

export default Add;