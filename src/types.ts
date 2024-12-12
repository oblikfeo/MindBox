export enum TASK_STATUS {
  ALL = 'ALL',
  COMPLITED = 'COMPLITED',
  ACTIVE = 'ACTIVE'
}

export type TaskType = {
  id: number,
  text: string,
  status: Omit<keyof TaskType, 'ALL'>,
};
