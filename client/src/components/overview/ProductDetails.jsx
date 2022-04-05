import React from 'react';
import FlexContainer from '../styled/FlexContainer.styled';

const ProductDetails = ({overview}) => {
  const { name, category, default_price } = overview;

  const formatPrice = (price) => {
    const dollarValue = price.split('.')[0];
    return `$${dollarValue}`;
  };

  const displayPrice = formatPrice(default_price);

  return (
    <FlexContainer direction="column" gap="0">
      <p>Reviews</p>
      <p>{category}</p>
      <h1>{name}</h1>
      <p>{displayPrice}</p>
    </FlexContainer>
  );
};

export default ProductDetails;
