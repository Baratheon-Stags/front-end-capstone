import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import FlexContainer from '../styled/FlexContainer.styled';
import StyledCarousel from '../styled/RelatedCarousel.styled';
import OutfitCard from './OutfitCard';
import AddItemCard from './AddItemCard';

const SpecialFlex = styled(FlexContainer)`
  width: 90%;
`;

const Outfit = ({ productId }) => {
  const carousel = useRef(null);
  const [addedItems, setAddedItems] = useState([]);
  // const [productDetails, setProductDetails] = useState([]);
  const [productDetails, setProductDetails] = useState(() => {
    // Fetch locally stored data drive Outfit rendering
    const arr = [];
    const keys = Object.keys(localStorage);

    keys.forEach((id) => {
      const saved = localStorage.getItem(`${id}`);
      const formatted = JSON.parse(saved);
      arr.push(formatted);
    });
    return arr || [];
  });

  const style = {
    outline: '0',
    fontSize: '25px',
    backgroundColor: 'Transparent',
    border: 'none',
    margin: '10px',
  };

  useEffect(() => {
    if (addedItems.length !== 0) {
      addedItems.forEach((id) => {
        axios.get(`/related/${id}`)
          .then((product) => {
            const details = product.data;
            localStorage.setItem(`${productId}`, JSON.stringify(details));
            setProductDetails((previousProduct) => [...previousProduct, details]);
          });
      });
    }
  }, [addedItems]);

  const snapRight = () => {
    carousel.current.scrollLeft += 1000;
  };

  const addItem = () => {
    if (!addedItems.includes(productId)) {
      setAddedItems([...addedItems, productId]);
      snapRight();
    }
  };

  const scrollRight = () => {
    carousel.current.scrollLeft += 450;
  };

  const scrollLeft = () => {
    carousel.current.scrollLeft -= 450;
  };

  return (
    <>
      <h1>Outfit</h1>
      <SpecialFlex gap="0">
        <button style={style} type="button" onClick={scrollLeft}>&lt;</button>
        <FlexContainer>
          <AddItemCard addItem={addItem} productId={productId} />
          <StyledCarousel ref={carousel} direction="row">
            {productDetails.map((product) => (
              <OutfitCard key={Math.random()} productDetails={product} />

            ))}
          </StyledCarousel>
        </FlexContainer>
        <button style={style} type="button" onClick={scrollRight}>&gt;</button>
      </SpecialFlex>
    </>
  )
};

export default Outfit;
