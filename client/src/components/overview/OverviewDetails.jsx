import React from 'react';
import FlexContainer from '../styled/FlexContainer.styled';
import ProductDetails from './ProductDetails';
import StyleSelection from './StyleSelection';
import ProductInteraction from './ProductInteraction';

const OverviewDetails = ({overview, styles, currentStyle, metadata, handleStyleChange}) => (
  <FlexContainer direction="column" gap="0">
    <ProductDetails
      overview={overview}
      metadata={metadata}
    />
    <FlexContainer direction="column">
      <StyleSelection
        styles={styles}
        currentStyle={currentStyle}
        handleStyleChange={handleStyleChange}
      />
      <ProductInteraction
        currentStyle={currentStyle}
      />
    </FlexContainer>
  </FlexContainer>
);

export default OverviewDetails;
