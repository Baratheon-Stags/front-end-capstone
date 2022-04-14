/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import Card from './Card';
import CompareModal from './CompareModal';
import StyledCarousel from '../styled/RelatedCarousel.styled';
import FlexContainer from '../styled/FlexContainer.styled';

const RelatedProducts = ({ related, productId, handleClick }) => {
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
      setRelated([]);
      axios.get(`/related/${id}`)
        .then((product) => setRelated((previousProduct) => [...previousProduct, product.data]));
    });
    axios.get(`/product/${productId}`)
      .then((response) => setOverviewFeatures(response.data[0].features));
  }, [related]);

  const scrollRight = () => {
    carousel.current.scrollLeft += 1260;
  };

  const scrollLeft = () => {
    carousel.current.scrollLeft -= 1260;
  };

  const toggleRelatedCompare = (id) => {
    if (typeof id === 'number') {
      const filtered = relatedProducts.filter((value) => (value.id === id));
      setModalItemFeatures(filtered);
    }
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <>
      <div className="section-header">
        <h2>
          <span id="related" />
          Related Products
        </h2>
      </div>
      {
        modalIsOpen
          ? (
            <CompareModal
              overviewFeatures={overviewFeatures}
              modalItemFeatures={modalItemFeatures[0].features}
              cardName={modalItemFeatures[0].name}
              toggleRelatedCompare={toggleRelatedCompare}
            />
          )
          : null
}
      <FlexContainer direction="row" gap="0em" justify="space-between">
        <button style={style} type="button" onClick={scrollLeft} aria-label="previous-related-carousel"><FontAwesomeIcon icon={solid('arrow-left')} /></button>

        <StyledCarousel gap="20px" ref={carousel} direction="row">
          {relatedProducts.map((product) => (
            <Card
              key={Math.random()}
              product={product}
              overviewFeatures={overviewFeatures}
              toggleRelatedCompare={toggleRelatedCompare}
              handleClick={handleClick}
            />
          ))}
        </StyledCarousel>
        <button style={style} type="button" onClick={scrollRight} aria-label="next-related-carousel"><FontAwesomeIcon icon={solid('arrow-right')} /></button>
      </FlexContainer>
    </>
  );
};

export default RelatedProducts;
