import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  z-index: 1040;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  opacity: 0.5;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 2000;
  background-color: rgb(230,230,230);
  height: 850px;
  width: ${(props) => props.width || '45%'};
  margin: 0px auto;
  border: 0px solid black;
  border-radius: 75px 50px;
  box-shadow: 5px 10px 3px rgba(0,0,0,.5);
`;
