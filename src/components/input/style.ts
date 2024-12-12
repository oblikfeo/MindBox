import styled from 'styled-components';

export const InputFieldContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  background-color: #007bff;
  border-radius: 1.5rem;
`;

export const InputFieldStyled = styled.input`
  flex-grow: 1;
  border: none;
  outline: none;
  font-size: 16px;
  padding: 8px;
  border-radius: 1rem;
  background-color: #007bff;
  color: white;
  font-size: 1.2rem;

  &::placeholder {
  color: white;
}
`;

export const AddButton = styled.button`
  background-color: white;
  color: #007bff;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 1rem;
  font-size: 1rem;

  &:hover {
    background-color: #19ab19;
    color: white;
  }
`;
