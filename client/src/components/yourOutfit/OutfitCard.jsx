import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import GenerateStarRatings from '../GenerateStarRatings';
import FlexContainer from '../styled/FlexContainer.styled';
import { CardContainer, CardImage, CardDesc } from '../styled/Card.styled';

const OutfitCard = ({ productDetails }) => {
  const {image, category, name, default_price, ratings} = productDetails;

  const btnStyle = {
    position: 'relative',
    top: '7%',
    left: '83%',
  };

  return (
    <CardContainer>
      <CardImage url={image}>
        <FontAwesomeIcon style={btnStyle} icon={solid('circle-xmark')} className="fa-lg" />
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
