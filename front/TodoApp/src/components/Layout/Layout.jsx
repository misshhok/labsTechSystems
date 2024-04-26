import React, {useState} from 'react';
import { Link, Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Sidebar from "./Sidebar/Sidebar";
import styles from './Layout.module.css'
import Tracking from "./Tracking/Tracking";
import {useSelector} from "react-redux";
import cn from "classnames";

const Layout = () => {
  const isTracking = useSelector(state => state.tasks.track.isTracking)
  const [activeSidebar, setActiveSidebar] = useState(false)

  return (
    <div className={styles.layout}>
      <Header setActiveSidebar={setActiveSidebar} activeSidebar={activeSidebar} className={styles.header}></Header>
      <Sidebar className={cn(styles.sidebar, {
        [styles.sidebarOpen]: activeSidebar
      })} setActiveSidebar={setActiveSidebar}/>
      <Main className={styles.main}>
        <Outlet/>
        {isTracking ? <Tracking/> : <></>}
      </Main>
    </div>
  );
};

export default Layout;