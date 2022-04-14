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
  background-color: white;
  position: relative;
  left: 0;
  top: 0;
  z-index: 51;
`;

const Header = styled(FlexContainer)`
  display: flex;
  max-width: 350px;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 20px;
  border-bottom: 2px solid black;

`;

const RowsContainer = styled(FlexContainer)`
  direction: column;
  overflow-y: auto;
`;

const CompareModal = ({cardName, overviewFeatures, modalItemFeatures, toggleRelatedCompare }) => (
  <>
    <Overlay onClick={toggleRelatedCompare}>
      <Backdrop onClick={(e) => e.stopPropagation()}>
        <h2>Comparing</h2>
        <Header>
          <div>Current Item</div>
          <div> {cardName} </div>
        </Header>
        <RowsContainer>

          <RenderRows
            overviewFeatures={overviewFeatures}
            modalItemFeatures={modalItemFeatures}
          />

        </RowsContainer>
        <button type="button" onClick={toggleRelatedCompare}>close</button>
      </Backdrop>
    </Overlay>
  </>
);

export default CompareModal;
