import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Card from './Card';

import FlexContainer from './styled/FlexContainer.styled';

const StyledCarousel = styled(FlexContainer)`
  border: 3px solid red;
  align-items: center;
  justify-content: flex-start;
  width: 1000px;
  overflow-x: auto;
  list-style-type: none;
  &::-webkit-scrollbar {
    display: none;
  }
  transform: translate3d(0);
`;

const RelatedProducts = (props) => {
  // Extract related product IDs
  const { related } = props;
  // Set state to use array of related products
  const [relatedProducts, setRelated] = useState([]);
  const [scroll, setScrolled] = useState(false);
  const carousel = useRef(null);

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

  const scrollRight = () => {
    carousel.current.scrollLeft += 200;
  };

  const scrollLeft = () => {
    carousel.current.scrollLeft -= 200;
  };

  return (
    <>
      <h1>Related</h1>
      <ul>
        <button type="button" onClick={scrollLeft}>left</button>
        <StyledCarousel ref={carousel} direction="row">
          {relatedProducts.map((product) => <Card key={Math.random()} product={product} />)}
        </StyledCarousel>
        <button type="button" onClick={scrollRight}>right</button>
      </ul>

    </>
  );
};

export default RelatedProducts;
