import React from 'react';
import { TaskItemContainer, TaskText, FinishButton, DeleteButton } from './style';
import { TASK_STATUS, TaskType } from '../../types';

export interface PropsTaskItem {
  text: string;
  status: Omit<keyof TaskType, 'ALL'>,
  onDelete: () => void;
  onMarkAsCompleted: () => void;
}

const TaskItem: React.FC<PropsTaskItem> = ({ text, status, onDelete, onMarkAsCompleted }: PropsTaskItem) => {
  return (
    <TaskItemContainer>
      <TaskText isCompleted={status === TASK_STATUS.COMPLITED}>{text}</TaskText>
      <div>
        <FinishButton onClick={onMarkAsCompleted}>✓</FinishButton>
        <DeleteButton onClick={onDelete}>×</DeleteButton>
      </div>
    </TaskItemContainer>
  );
};

export default TaskItem;