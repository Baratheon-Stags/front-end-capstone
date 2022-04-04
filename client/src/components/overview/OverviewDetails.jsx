import React from 'react';
import FlexContainer from '../styled/FlexContainer.styled';
import ProductDetails from './ProductDetails';
import StyleSelection from './StyleSelection';
import ProductInteraction from './ProductInteraction';

const OverviewDetails = ({overview, styles, currentStyle, metadata}) => {
  return (
    <FlexContainer direction="column" align="center" justify="space-between">
      <ProductDetails overview={overview} metadata={metadata} />
      <StyleSelection styles={styles} currentStyle={currentStyle} />
      <ProductInteraction />
    </FlexContainer>
  );
};

export default OverviewDetails;
