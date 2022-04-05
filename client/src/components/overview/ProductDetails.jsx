import React from 'react';
import FlexContainer from '../styled/FlexContainer.styled';
import GenerateStarRatings from '../GenerateStarRatings';

const ProductDetails = ({overview, metadata}) => {
  const { name, category, default_price } = overview;

  const formatPrice = (price) => {
    const dollarValue = price.split('.')[0];
    return `$${dollarValue}`;
  };

  const displayPrice = formatPrice(default_price);

  return (
    <FlexContainer direction="column" gap="0">
      <GenerateStarRatings ratings={metadata.ratings} />
      <p>{category}</p>
      <h1>{name}</h1>
      <p>{displayPrice}</p>
    </FlexContainer>
  );
};

export default ProductDetails;
