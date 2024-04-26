import React from 'react';
import style from './Checkbox.module.css'
import cn from "classnames";

const Checkbox = ({isComplete, ...props}) => {
  return (
    <button {...props}
            className={cn(style.checkbox, {
              [style.checkboxComplete]: isComplete
            })}>
    </button>
  );
};

export default Checkbox;