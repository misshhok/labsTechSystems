import React from 'react';
import Actual from "./Actual/Actual";
import Stats from "./Stats/Stats";

const MainsStats = ({className}) => {
  return (
    <div className={className}>
      <Actual/>
      <Stats/>
    </div>
  );
};

export default MainsStats;