/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import { CardContainer, CardImage, CardDesc } from '../styled/Card.styled';
import GenerateStarRatings from '../GenerateStarRatings';
import FlexContainer from '../styled/FlexContainer.styled';
import { BtnBackdrop } from '../styled/RelatedandOutfitBtns.styled';

const Card = ({ product, toggleRelatedCompare, handleClick }) => {
  const {
    id, image, category, name, default_price, ratings,
  } = product;

  const goToProduct = () => {
    handleClick(product.id);
  };

  const openComparison = (event) => {
    event.stopPropagation();
    toggleRelatedCompare(id);
  };

  return (
    <CardContainer style={{ boxShadow: '2px 5px 3px rgba(0,0,0,.5)' }} onClick={goToProduct}>
      <CardImage url={image}>
        <BtnBackdrop>
          <FontAwesomeIcon onClick={openComparison} icon={regular('star')} className="fa-lg" />
        </BtnBackdrop>
      </CardImage>
      <CardDesc>
        <FlexContainer gap="0" direction="column">
          <span style={{ fontSize: '.8em' }}>
            {' '}
            {category}
          </span>
          <span>
            {' '}
            {name}
          </span>
          <span style={{ fontSize: '.8em' }}>
            {' '}
            $
            {default_price}
          </span>
          <GenerateStarRatings ratings={ratings} />
        </FlexContainer>
      </CardDesc>
    </CardContainer>
  );
};

export default Card;
