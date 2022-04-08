import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import FlexContainer from '../styled/FlexContainer.styled';
import StyledCarousel from '../styled/RelatedCarousel.styled';
import OutfitCard from './OutfitCard';
import AddItemCard from './AddItemCard';

const Outfit = ({ productId }) => {
  const carousel = useRef(null);
  const [addedItems, setAddedItems] = useState([]);
  const [productDetails, setProductDetails] = useState([]);

  const style = {
    outline: '0',
    fontSize: '25px',
    backgroundColor: 'Transparent',
    border: 'none',
    margin: '10px'
  }

  const addItem = () => {
    if (!addedItems.includes(productId)) {
      setAddedItems([...addedItems, productId]);
    }
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


  const scrollRight = () => {
    carousel.current.scrollLeft += 450;
  };

  const scrollLeft = () => {
    carousel.current.scrollLeft -= 450;
  };

  return (
    <>
      <h1>Outfit</h1>
      <FlexContainer gap="0">
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
      </FlexContainer>
    </>
  )
};

export default Outfit;
