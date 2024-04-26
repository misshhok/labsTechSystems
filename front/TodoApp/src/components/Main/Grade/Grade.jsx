import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Cell} from 'recharts';
import cn from "classnames";
import styles from './Grade.module.css'

const Grade = ({className}) => {
  const completedTasks = useSelector(state => state.tasks.completedTasks)



  function constructTasks() {
    const uniqueArr = []
    const colors = []
    for (let i = 0; i<completedTasks.length; i++) {
      const groupIndex = uniqueArr.findIndex(task => task.name == completedTasks[i].groupName.value)

      if(groupIndex > -1) {
        uniqueArr[groupIndex].value += 1;
      } else {
        if(completedTasks[i].groupName.value) {
          uniqueArr.push({
            name: completedTasks[i].groupName.value,
            value: 1
          })
          colors.push(completedTasks[i].groupName.color)
        } else {
          const noTask = uniqueArr.findIndex(task => task.name == 'Без группы')
          if(noTask > -1){
            uniqueArr[noTask].value += 1;
          } else {
            uniqueArr.push({
              name: 'Без группы',
              value: 1
            })
            colors.push('#000000')
          }

        }
      }

    }

    return {uniqueArr, colors}
  }


  const data = constructTasks().uniqueArr;
  const colors = constructTasks().colors

  function calcAll(){
    const arr = data.length > 0 ? data.map(elem => elem.value) : []
    return arr.length > 0 ? arr.reduce((ac, cur) => ac + cur) : 0
  }

  function adaptive(num, client, doCord){
    if(client < document.documentElement.clientWidth) {
      return num
    }
    return  doCord
  }
  console.log(calcAll())
  return (
    <div className={cn(className, styles.grade)}>
      <div className={styles.title}>Всего выполнено задач: {calcAll()}</div>
      {calcAll() > 0 ?
        <PieChart width={adaptive(270, 450, 200)} height={adaptive(270, 450, 200)}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={adaptive(100, 450, 70)}
            innerRadius={adaptive(70, 450, 50)}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]}/>
            ))}
          </Pie>
          <Tooltip/>
        </PieChart>
        :
        <div className={styles.pieFake}></div>
      }
    </div>
  );
};

export default Grade;