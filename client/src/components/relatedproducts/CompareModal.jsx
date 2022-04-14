/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import styled, { keyframes } from 'styled-components';
import RenderRows from './RenderRows';
import FlexContainer from '../styled/FlexContainer.styled';

const Overlay = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 20;
  y-overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Anim = keyframes`
{
  from {
    margin-left: 100%;
    width: 300%;
  }

  75% {
    font-size: 300%;
    margin-left: 25%;
    width: 150%;
  }

  90% {
    font-size: 100%;
    margin-left: 5%;
    width: 105%;
  }

  to {
    margin-left: 0%;
    width: 100%;
    width: 400px;
  }
}
`;

const Backdrop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 400px;
  height: 300px;
  background-color: white;
  position: relative;
  left: 0;
  top: 0;
  z-index: 51;
  animation-name:${Anim};
  animation-duration: 2s;
  animation-iteration-count: once;
  -webkit-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
`;

const Header = styled(FlexContainer)`
  display: flex;
  max-width: 350px;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 20px;
  margin-top: 5px;
  border-bottom: 2px solid black;

`;

const RowsContainer = styled(FlexContainer)`
  direction: column;
  overflow-y: auto;
`;

const BtnContainer = styled(FlexContainer)`
  margin-top: 5px;
  margin-bottom: 5px;
`;

const CompareModal = ({cardName, overviewFeatures, modalItemFeatures, toggleRelatedCompare }) => (
  <>
    <Overlay onClick={toggleRelatedCompare}>
      <Backdrop onClick={(e) => e.stopPropagation()}>
        <h2>Comparing</h2>
        <Header>
          <FlexContainer justify="center">Current Item</FlexContainer>
          <FlexContainer justify="center"> {cardName} </FlexContainer>
        </Header>
        <RowsContainer>

          <RenderRows
            overviewFeatures={overviewFeatures}
            modalItemFeatures={modalItemFeatures}
          />

        </RowsContainer>
        <BtnContainer justify="center">
          <button type="button" onClick={toggleRelatedCompare}>close</button>
        </BtnContainer>
      </Backdrop>
    </Overlay>
  </>
);

export default CompareModal;
