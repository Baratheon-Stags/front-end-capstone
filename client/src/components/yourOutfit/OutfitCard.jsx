import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import GenerateStarRatings from '../GenerateStarRatings';
import FlexContainer from '../styled/FlexContainer.styled';
import { CardContainer, CardImage, CardDesc } from '../styled/Card.styled';

const OutfitCard = ({ productDetails, removeItem }) => {
  const {image, category, name, default_price, ratings} = productDetails;

  const btnStyle = {
    position: 'relative',
    top: '7%',
    left: '83%',
  };

  const handleClick = () => {
    // Must update parent state
    removeItem(productDetails.id);
  };

  return (
    <CardContainer>
      <CardImage url={image}>
        <FontAwesomeIcon onClick={handleClick} style={btnStyle} icon={solid('circle-xmark')} className="fa-lg" />
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
