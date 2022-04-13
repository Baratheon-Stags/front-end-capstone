import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import FlexContainer from '../styled/FlexContainer.styled';

const FlexItem = styled(FlexContainer)`
  display: flex;
  direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 300px;
  border: 1px solid black;
  flex: 0 0 auto;
  box-shadow: 2px 5px 3px rgba(0,0,0,.5);
`;

const StyleBtn = styled.div`
    cursor: pointer;
    &:hover {
      filter: drop-shadow(0 0.3rem #1C943E);
    };
    &:active {
      filter: drop-shadow(0 0.3rem black);
      transform: translateY(4px);
    }

`;

const AddItemCard = ({ addItem }) => (
  <FlexItem>
    <StyleBtn>
      <FontAwesomeIcon onClick={addItem} icon={solid('square-plus')} className="fa-4x" />
    </StyleBtn>
  </FlexItem>
);

export default AddItemCard;
