import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import FlexContainer from '../styled/FlexContainer.styled';
import { CardContainer } from '../styled/Card.styled';

const LockedCard = styled(FlexContainer)`
  width: 70%;
`;

const AddItemCard = ({ addItem }) => {

  return (
    <LockedCard>
      <CardContainer>
        <button onClick={addItem}>Add to outfit</button>
      </CardContainer>
    </LockedCard>
  )
}

export default AddItemCard;