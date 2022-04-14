import styled from 'styled-components';
import FlexContainer from './FlexContainer.styled';

export const BtnBackdrop = styled(FlexContainer)`
  position: absolute;
  top: 5%;
  left: 83%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 20%;
  background-color: rgba(255,255,255,.45);
  backdrop-filter: blur(2);
  transition: all .2s ease;
  box-shadow: 1px 1px 3px rgb(0 0 0 / 25%);
  border: none;

  &:hover {
    background-color: #FBDD1E;
  }
`;

export const RemoveBtnBackdrop = styled(FlexContainer)`
  position: absolute;
  top: 5%;
  left: 83%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 27px;
  height: 27px;
  border-radius: 100%;
  background-color: rgba(255,255,255,.45);
  backdrop-filter: blur(2);
  transition: all .2s ease;
  box-shadow: 1px 1px 3px rgb(0 0 0 / 25%);
  border: none;

  &:hover {
    background-color: #F10000;
  }
`;
