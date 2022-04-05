/* eslint-disable react/prop-types */
import React from 'react';
import { CardContainer, CardImage, CardDesc } from './styled/Card.styled';
import GenerateStarRatings from './generateStarRatings';

import FlexContainer from './styled/FlexContainer.styled';

const Card = ({ product }) => {
  const { image, category, name, default_price, ratings } = product;

  return (
    <li>
      <CardContainer>
        <CardImage url={image} />
        <CardDesc>
          <FlexContainer gap="0" direction="column">
            <span> {category}</span>
            <span> {name}</span>
            <span> ${default_price}</span>
            <GenerateStarRatings ratings={ratings} />
          </FlexContainer>
        </CardDesc>
      </CardContainer>
    </li>
  );
};

export default Card;
