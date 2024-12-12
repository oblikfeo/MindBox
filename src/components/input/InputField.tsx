import React, { useState } from 'react';
import { InputFieldContainer, InputFieldStyled, AddButton } from './style';

export interface PropsInput {
  onAddTask: (task: string) => void;
}

const InputField: React.FC<PropsInput> = ({ onAddTask }) => {

  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim()) {
      onAddTask(inputValue);
      setInputValue('');
    }
  };

  return (
    <InputFieldContainer>
      <InputFieldStyled
        type="text"
        placeholder="Введите задачу..."
        value={inputValue}
        onChange={handleChange}
      />
      <AddButton onClick={handleSubmit}>Добавить</AddButton>
    </InputFieldContainer>
  );
};

export default InputField;