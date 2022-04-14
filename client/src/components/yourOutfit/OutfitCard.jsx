/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import GenerateStarRatings from '../GenerateStarRatings';
import FlexContainer from '../styled/FlexContainer.styled';
import { CardContainer, CardImage, CardDesc } from '../styled/Card.styled';
import { RemoveBtnBackdrop } from '../styled/RelatedandOutfitBtns.styled';

const OutfitCard = ({ productDetails, removeItem }) => {
  const {
    image, category, name, default_price, ratings,
  } = productDetails;

  const handleClick = () => {
    // Must update parent state
    removeItem(productDetails.id);
  };

  return (
    <CardContainer style={{ boxShadow: '2px 5px 3px rgba(0,0,0,.5)', marginRight: '5px' }}>
      <CardImage url={image}>
        <RemoveBtnBackdrop>
          <FontAwesomeIcon onClick={handleClick} icon={solid('circle-xmark')} className="fa-lg" />
        </RemoveBtnBackdrop>
      </CardImage>
      <CardDesc>
        <FlexContainer gap="0" direction="column">
          <span>{category}</span>
          <span>{name}</span>
          <span>
            $
            {default_price}
          </span>
          <span><GenerateStarRatings ratings={ratings} /></span>
        </FlexContainer>
      </CardDesc>
    </CardContainer>
  );
};

export default OutfitCard;
