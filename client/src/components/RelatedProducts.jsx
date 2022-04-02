import React from 'react';
import styled from 'styled-components';
import FlexContainer from './styled/FlexContainer.styled';
import Card from './styled/Card.styled';
import CardImage from './styled/CardImage.styled';
import CardDesc from './styled/CardDesc.styled';

const StyledCarousel = styled(FlexContainer)`
  border: 3px solid red;
  align-items: center;
  justify-content: flex-start;
`;

const RelatedProducts = () => (
  <>
    <h1>Related</h1>
    <StyledCarousel direction="row">
    <Card>
      <CardImage></CardImage>
      <CardDesc>
        <div>category</div>
        <div>description</div>
        <div>price</div>
        *****
      </CardDesc>
    </Card>

    </StyledCarousel>
  </>
);

export default RelatedProducts;
