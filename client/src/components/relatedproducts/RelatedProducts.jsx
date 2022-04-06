/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Card from './Card';

import StyledCarousel from '../styled/RelatedCarousel.styled';
import FlexContainer from '../styled/FlexContainer.styled';

const RelatedProducts = ({ related }) => {
  // Extract related product IDs
  // Set state to use array of related products
  const [relatedProducts, setRelated] = useState([]);
  const [overviewFeatures, setOverviewFeatures] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const carousel = useRef(null);

  // After mount, fetch all related product information
  useEffect(() => {
    related.forEach((id) => {
      console.log('this fires 4 times, once for each ID');
      axios.get(`/related/${id}`)
        .then((product) => setRelated((previousProduct) => [...previousProduct, product.data]));
    });
    axios.get('/product/40344')
      .then((response) => setOverviewFeatures(response.data[0].features));
  }, []);

  const scrollRight = () => {
    carousel.current.scrollLeft += 450;
  };

  const scrollLeft = () => {
    carousel.current.scrollLeft -= 450;
  };

  const relatedCompare = (id) => {
    console.log('Opening modal..', id);
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <>
      <h1>Related</h1>
      <ul>
        <FlexContainer direction="row" gap="0em">
          <button style={{ outline: '0', fontSize: '25px', backgroundColor: 'Transparent', border: 'none', margin: '10px' }} type="button" onClick={scrollLeft}>&lt;</button>
          <StyledCarousel ref={carousel} direction="row">
            {relatedProducts.map((product) =>
              <Card key={Math.random()} product={product} overviewFeatures={overviewFeatures} relatedCompare={relatedCompare} />)}
          </StyledCarousel>
          <button style={{ outline: '0', fontSize: '25px', backgroundColor: 'Transparent', border: 'none', margin: '10px' }} type="button" onClick={scrollRight}>&gt;</button>
        </FlexContainer>
      </ul>

    </>
  );
};

export default RelatedProducts;
