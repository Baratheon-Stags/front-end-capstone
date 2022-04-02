import React from 'react';
import FlexContainer from '../styled/FlexContainer.styled';

const ProductDetails = ({overview}) => {
  console.log(overview);

  const { name, category, default_price } = overview;

  return (
    <FlexContainer direction="column" gap="0">
      <p>Reviews</p>
      <p>{category}</p>
      <h1>{name}</h1>
      <p>{default_price}</p>
    </FlexContainer>
  );
};

export default ProductDetails;
