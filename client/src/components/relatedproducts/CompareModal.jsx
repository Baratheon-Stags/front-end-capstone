/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import styled from 'styled-components';
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

const Backdrop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width:400px;
  height: 300px;
  border: 2px solid blue;
  background-color: white;
  position: relative;
  left: 0;
  top: 0;
  z-index: 51;
`;


const CompareModal = ({ overviewFeatures, modalItemFeatures, toggleRelatedCompare }) => {
  console.log('overview feats', overviewFeatures);

  return (
    <>
      <Overlay onClick={toggleRelatedCompare}>
        <Backdrop onClick={(e) => e.stopPropagation()}>
          <h2>Comparing</h2>
          <FlexContainer direction="row" justify="space-between">
            <span>Current Item</span>
            <span> Card Item</span>
          </FlexContainer>
          <FlexContainer direction="row">

            <RenderRows
              overviewFeatures={overviewFeatures}
              modalItemFeatures={modalItemFeatures}
            />

          </FlexContainer>
          <button type="button" onClick={toggleRelatedCompare}>close</button>
        </Backdrop>
      </Overlay>
    </>
  );
};

export default CompareModal;
