import styled from 'styled-components';

export const AppContainer = styled.div`
  max-width: 60vw;
  min-width: 500px;
  margin: 30px auto 0px auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  padding: 30px;
  background-color: white;
`;

export const Title = styled.h1`
  text-align: center;
  margin-top: 0;
  margin-bottom: 30px;
  font-weight: 300;
  color: #007bff;
  font-size: 4rem;
`;

export const TasksList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;