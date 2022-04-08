/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Card from './Card';
import CompareModal from './CompareModal';

import StyledCarousel from '../styled/RelatedCarousel.styled';
import FlexContainer from '../styled/FlexContainer.styled';

const RelatedProducts = ({ related }) => {
  // Extract related product IDs
  // Set state to use array of related products
  const [relatedProducts, setRelated] = useState([]);
  const [overviewFeatures, setOverviewFeatures] = useState([]);
  const [modalItemFeatures, setModalItemFeatures] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const carousel = useRef(null);

  const style = {
    outline: '0',
    fontSize: '25px',
    backgroundColor: 'Transparent',
    border: 'none',
    margin: '10px',
  };

  // After mount, fetch all related product information
  useEffect(() => {
    related.forEach((id) => {
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

  const toggleRelatedCompare = (id) => {
    if (typeof id === 'number') {
      console.log('id is...', id);
      const filtered = relatedProducts.filter((value) => (value.id === id));
      setModalItemFeatures(filtered);
    }
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <>
      <h1>Related</h1>
      {modalIsOpen ? <CompareModal overviewFeatures={overviewFeatures} modalItemFeatures={modalItemFeatures[0].features} toggleRelatedCompare={toggleRelatedCompare} /> : null}
      <FlexContainer direction="row" gap="0em">
        <button style={style} type="button" onClick={scrollLeft}>&lt;</button>
        <StyledCarousel ref={carousel} direction="row">
          {relatedProducts.map((product) => <Card key={Math.random()} product={product} overviewFeatures={overviewFeatures} toggleRelatedCompare={toggleRelatedCompare} />)}
        </StyledCarousel>
        <button style={style} type="button" onClick={scrollRight}>&gt;</button>
      </FlexContainer>
    </>
  );
};

export default RelatedProducts;
