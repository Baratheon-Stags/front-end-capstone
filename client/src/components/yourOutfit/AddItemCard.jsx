import React from 'react';
import styled from 'styled-components';
import FlexContainer from '../styled/FlexContainer.styled';
import { CardContainer } from '../styled/Card.styled';

const LockedCard = styled(FlexContainer)`
  width: 70%;
`;

const AddItemCard = () => {
  const hi = "ho";

  return (
    <LockedCard>
      <CardContainer>
        <button>Add to outfit</button>
      </CardContainer>
    </LockedCard>
  )
}

export default AddItemCard;