import styled from 'styled-components';

export const TaskItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

export const TaskText = styled.span<{ isCompleted: boolean }>`
  margin: 0;
  font-size: 2rem;
  text-decoration: ${props => props.isCompleted ? 'line-through' : 'none'};
`;

export const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #777;
  transition: color 0.3s ease;
  font-size: 2rem;

  &:hover {
    color: red;
  }
`;

export const FinishButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 2rem;
`