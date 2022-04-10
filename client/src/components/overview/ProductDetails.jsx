import React from 'react';
import FlexContainer from '../styled/FlexContainer.styled';
import GenerateStarRatings from '../GenerateStarRatings';

const ProductDetails = ({overview, metadata}) => {
  const { name, category } = overview;

  return (
    <FlexContainer direction="column" gap="0">
      <GenerateStarRatings ratings={metadata.ratings} />
      <span>{category}</span>
      <h1>{name}</h1>
    </FlexContainer>
  );
};

export default ProductDetails;
