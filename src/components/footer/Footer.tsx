import React from 'react';
import { StyledFooter, StyledBut, StyledFlex } from './style'
import { TASK_STATUS, TaskType } from '../../types';
import { Dispatch, SetStateAction } from 'react';

export interface PropsFooter {
  tasks: TaskType[];
  setTaskStatus: Dispatch<SetStateAction<TASK_STATUS>>;
  setTasks: Dispatch<SetStateAction<TaskType[]>>
}


const Footer: React.FC<PropsFooter> = ({ tasks, setTaskStatus, setTasks }) => {
  return (
    <StyledFooter>
      <StyledBut>{tasks.length} - всего планов</StyledBut>
      <StyledFlex>
        <StyledBut onClick={() => setTaskStatus(TASK_STATUS.ALL)}>Все</StyledBut>
        <StyledBut onClick={() => setTaskStatus(TASK_STATUS.ACTIVE)}>Активные</StyledBut>
        <StyledBut onClick={() => setTaskStatus(TASK_STATUS.COMPLITED)}>Завершенные</StyledBut>
      </StyledFlex>
      <StyledBut onClick={() => setTasks([])}>сброс</StyledBut>
    </StyledFooter>
  );
};

export default Footer;