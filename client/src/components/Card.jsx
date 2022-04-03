/* eslint-disable react/prop-types */
import React from 'react';
import CardContainer from './styled/CardContainer.styled';
import CardImage from './styled/CardImage.styled';
import CardDesc from './styled/CardDesc.styled';
import FlexContainer from './styled/FlexContainer.styled';

const Card = (props) => {
  const { product } = props;
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
