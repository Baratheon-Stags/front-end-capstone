import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import FlexContainer from '../styled/FlexContainer.styled';
import { CardContainer } from '../styled/Card.styled';

const LockedCard = styled(FlexContainer)`
  width: 50%;
`;

const FlexItem = styled(FlexContainer)`
  display: flex;
  direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 300px;
  border: 1px solid black;
  flex: 0 0 auto;
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
  <LockedCard>
    <FlexItem>
      <StyleBtn>
        <FontAwesomeIcon onClick={addItem} icon={solid('square-plus')} className="fa-4x" />
      </StyleBtn>
    </FlexItem>
  </LockedCard>
);

export default AddItemCard;
