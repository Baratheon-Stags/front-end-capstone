import styled from 'styled-components';

export const CardContainer = styled.div`
  height: 400px;
  width: 300px;
  border: 1px solid black;
  flex: 0 0 auto;
  &:hover {
    cursor: pointer;
    border: 2px solid black;
  }
`;

export const CardDesc = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 1em;
  justify-content: center;
  height: 35%;
`;

export const CardImage = styled.div`
  background-image: url(${(props) => props.url || 'https://images.unsplash.com/photo-1590564310418-66304f55a2c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80'});
  width: 100%;
  height: 65%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  position: relative;
`;
