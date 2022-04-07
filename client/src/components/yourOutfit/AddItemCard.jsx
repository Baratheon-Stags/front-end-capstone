import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import FlexContainer from '../styled/FlexContainer.styled';
import { CardContainer } from '../styled/Card.styled';

const LockedCard = styled(FlexContainer)`
  width: 50%;
  background-color: #bdb76b;
`;

const FlexItem = styled(FlexContainer)`
  background-color: #00ffff;
  display: flex;
  direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 300px;
  border: 1px solid black;
  flex: 0 0 auto;
`;



const AddItemCard = ({ addItem }) => {
  console.log('');
  return (
    <LockedCard>
        <FlexItem>
        <button onClick={addItem}>Add to outfit</button>
        </FlexItem>
    </LockedCard>
  )
}

export default AddItemCard;