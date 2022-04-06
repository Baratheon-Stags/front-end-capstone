import React from 'react';
import styled from 'styled-components';
import FlexContainer from './styled/FlexContainer.styled';

const StyledBackground = styled.div`
  width: 400px;
  height: 400px;
  top: 100%;
  left: 50%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  position: absolute;
  border: 2px solid black;
  background: white;

`;

const CompareBar = styled.div`
  font-weight: bolder;
  margin: 0.5em;
  flex-direction: ${(props) => props.direction || 'row'};
`;

const ComparisonModal = ({ showModal, setShowModal }) => (
  <>
    {showModal
      ? (
        <StyledBackground direction="column">
          <CompareBar direction="column">Comparing</CompareBar>
          <FlexContainer justify="space-between" direction="row">
            <CompareBar>Item 1</CompareBar>
            <CompareBar>Item 2</CompareBar>
          </FlexContainer>

        </StyledBackground>
      )
      : null}
  </>
);

export default ComparisonModal;
