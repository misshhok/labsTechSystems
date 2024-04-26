import React from 'react';
import styles from './MainP.module.css'
import GroupsTrack from "./GroupsTrack/GroupsTrack";
import Grade from "./Grade/Grade";
import MainsStats from "./MainStats/MainsStats";

const MainP = () => {
  return (
    <div className={styles.mainP}>
      <GroupsTrack className={styles.group}/>
      <Grade className={styles.grade}/>
      <MainsStats className={styles.stats}/>
    </div>
  );
};

export default MainP;