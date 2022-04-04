/* eslint-disable react/prop-types */
import React from 'react';
import { CardContainer, CardImage, CardDesc } from './styled/CardContainer.styled';

import FlexContainer from './styled/FlexContainer.styled';

const Card = ({ product }) => {
  const { image, category, name, default_price } = product;

  return (
    <li>
      <CardContainer>
        <CardImage url={image} />
        <CardDesc>
          <FlexContainer>{category}</FlexContainer>
          <FlexContainer>
            {name}
            {' '}
          </FlexContainer>
          <FlexContainer>${default_price}</FlexContainer>
          <FlexContainer>*****</FlexContainer>

        </CardDesc>
      </CardContainer>
    </li>
  );
};

export default Card;
