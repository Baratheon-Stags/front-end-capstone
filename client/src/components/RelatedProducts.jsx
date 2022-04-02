import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Card from './Card';

import FlexContainer from './styled/FlexContainer.styled';

const StyledCarousel = styled(FlexContainer)`
  border: 3px solid red;
  align-items: center;
  justify-content: flex-start;
`;

const RelatedProducts = (props) => {
  // Extract related product IDs
  const { related } = props;
  // Set state to use array of related products
  const [relatedProducts, setRelated] = useState([]);

  // After mount, fetch all related product information
  useEffect(() => {
    related.forEach((id) => {
      axios.get(`/related/${id}`)
        .then((product) => setRelated((previousProduct) => [...previousProduct, product.data]));
    });
  }, []);

  // Checking if related products has been populated
  if (relatedProducts.length !== 0) {
    console.log(relatedProducts);
  }

  return (
    <>
      <h1>Related</h1>
      <StyledCarousel direction="row">
        {relatedProducts.map((product) => <Card product={product} />)}
      </StyledCarousel>
    </>
  );
};

export default RelatedProducts;
