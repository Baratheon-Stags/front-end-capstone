import React from 'react';
import CardContainer from './styled/CardContainer.styled';
import CardImage from './styled/CardImage.styled';
import CardDesc from './styled/CardDesc.styled';
import FlexContainer from './styled/FlexContainer.styled';

const Card = (props) => (
  <CardContainer>
    <CardImage url={props.product.image} />
    <CardDesc>
      <FlexContainer>{props.product.category}</FlexContainer>
      <FlexContainer>
        {props.product.name}
        {' '}
      </FlexContainer>
      <FlexContainer>{props.product.default_price}</FlexContainer>
    </CardDesc>
  </CardContainer>

);

export default Card;
