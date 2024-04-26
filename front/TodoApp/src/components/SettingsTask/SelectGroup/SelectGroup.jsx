import React from 'react';
import Select, { StylesConfig } from 'react-select';
import styles from './SelectGroup.module.css'
import {Controller} from "react-hook-form";
import {useSelector} from "react-redux";

const SelectGroup = ({register, control, isEditTask, task, ...props}) => {

  const groups = useSelector(state => state.groups.groups)

  const options = groups.map(group => ({value: group.groupname, label: group.groupname, color: group.color, id: group.idGroup}))

  return (
    <div>
    Выберите группу
      <Controller
        control={control}
        name={"groupName"}
        defaultValue={isEditTask && task.groupName}
        render={( { field }) => (
          <Select
            {...props}
            value={field.value}
            onChange={field.onChange}
            options={options}
            className={styles.select}
            placeholder='Select'
            theme={(theme) => ({
              ...theme,

              colors: {
                ...theme.colors,
                primary25: '#ece9e9',
                primary: '#2564cf',
              },
            })}
          />
        )
        }
      />
    </div>
  );
};

export default SelectGroup;