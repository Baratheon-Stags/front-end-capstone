import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import FlexContainer from '../styled/FlexContainer.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
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



const AddItemCard = ({ addItem }) => {
  console.log('');
  return (
    <LockedCard>
        <FlexItem>
        <FontAwesomeIcon onClick={addItem} icon={solid('square-plus')} className="fa-4x" />
        </FlexItem>
    </LockedCard>
  )
}

export default AddItemCard;

{/* <button onClick={addItem}>Add to outfit</button> */}