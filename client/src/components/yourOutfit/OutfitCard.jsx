import React, { useState } from 'react';
import GenerateStarRatings from '../GenerateStarRatings';
import FlexContainer from '../styled/FlexContainer.styled';
import { CardContainer, CardImage, CardDesc } from '../styled/Card.styled';

const OutfitCard = ({ productDetails }) => {
  const {image, category, name, default_price, ratings} = productDetails;

  return (
    <CardContainer>
      <CardImage url={image}>
      </CardImage>
      <CardDesc>
        <FlexContainer gap="0" direction="column">
          <span>{category}</span>
          <span>{name}</span>
          <span>${default_price}</span>
          <span><GenerateStarRatings ratings={ratings} /></span>
        </FlexContainer>
      </CardDesc>
    </CardContainer>
  )
};

export default OutfitCard;
