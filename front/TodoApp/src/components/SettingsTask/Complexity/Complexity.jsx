import React, {useState} from 'react';
import styles from './Complexity.module.css'
import cn from 'classnames';
import { ReactComponent as StarIcon } from './star.svg';
import task from "../../Task/Task";
import {isEditable} from "@testing-library/user-event/dist/utils";

const Complexity = ({setComplexity, isEditable, complexity, control, ...props}) => {
  const [complexityArr, setComplexityArr] = useState(complexity);
  const array = new Array(5).fill(<></>)
  const constructArray = (currentComplexity) => {
    return <div className={styles.ratingBlock}> {array.map((star, i) => (
      <span className={cn(styles.starBlock, {
        [styles.filled]: i < currentComplexity
      })}
            onMouseEnter={() => changeDisplay(i + 1)}
            onMouseLeave={() => changeDisplay(complexity)}
            onClick={() => isEditable && setComplexity(i + 1)}
      >
        <StarIcon className={styles.star}/>
      </span>
    ))}</div>
  }
  const changeDisplay = (num) => {
    if (!isEditable) {
      return
    }
    constructArray(num)
    setComplexityArr(num)
  }
  return (
    <div className={styles.complexity}>
      Сложность задачи {constructArray(complexityArr)}
    </div>
  );
};

export default Complexity;