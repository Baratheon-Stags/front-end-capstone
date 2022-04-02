import React from 'react';
import FlexContainer from '../styled/FlexContainer.styled';
import ProductDetails from './ProductDetails';
import StyleDetails from './StyleDetails';
import ProductInteraction from './ProductInteraction';

const OverviewDetails = ({overview}) => {
  return (
    <FlexContainer direction="column" align="center" justify="space-between">
      <ProductDetails overview={overview} />
      <StyleDetails />
      <ProductInteraction />
    </FlexContainer>
  );
};

export default OverviewDetails;
