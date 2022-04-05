/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { CardContainer, CardImage, CardDesc } from './styled/Card.styled';
import GenerateStarRatings from './generateStarRatings';


import FlexContainer from './styled/FlexContainer.styled';

const Card = ({ product }) => {
  const { image, category, name, default_price, ratings } = product;

  const style = {
    position: 'relative',
    top: '7%',
    left: '83%',
  };

  return (
    <li>
      <CardContainer>
        <CardImage url={image}>
          <FontAwesomeIcon style={style} icon={regular('star')} className="fa-lg" />
        </CardImage>
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
