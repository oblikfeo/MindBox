import { useState } from 'react';
import InputField from './components/input/InputField';
import TaskItem from './components/TaskItem/TaskItem';
import GlobalStyles from './GlobalStyles';
import Footer from './components/footer/Footer';
import { TASK_STATUS, TaskType } from './types';
import { AppContainer, Title, TasksList } from './style';

function App() {

  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [taskStatus, setTaskStatus] = useState<TASK_STATUS>(TASK_STATUS.ALL)

  const addTask = (text: string) => {
    const newTask: TaskType = {
      id: Date.now(),
      text,
      status: TASK_STATUS.ACTIVE
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const markAsCompleted = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: TASK_STATUS.COMPLITED } : task
      )
    );
  };

  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Title>ToDo List</Title>
        <InputField onAddTask={addTask} />
        <TasksList>
          {tasks.map(task => {
            if (task.status === taskStatus || taskStatus === TASK_STATUS.ALL) {
              return (
                <li key={task.id}>
                  <TaskItem
                    text={task.text}
                    status={task.status}
                    onDelete={() => deleteTask(task.id)}
                    onMarkAsCompleted={() => markAsCompleted(task.id)}
                  />
                </li>
              )
            }
            return
          })}
        </TasksList>
      </AppContainer>
      {tasks.length > 0 && <Footer setTaskStatus={setTaskStatus} setTasks={setTasks} tasks={tasks} />}
    </>
  )
}

export default App


