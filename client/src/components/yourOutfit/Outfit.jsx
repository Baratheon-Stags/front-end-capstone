import React, { useState, useRef } from 'react';
import FlexContainer from '../styled/FlexContainer.styled';
import StyledCarousel from '../styled/RelatedCarousel.styled';
import OutfitCard from './OutfitCard';
import AddItemCard from './AddItemCard';

const Outfit = () => {
  const carousel = useRef(null);

  const style = {
    outline: '0',
    fontSize: '25px',
    backgroundColor: 'Transparent',
    border: 'none',
    margin: '10px'
  }

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
        <AddItemCard />
        <StyledCarousel ref={carousel} direction="row">
          <OutfitCard />
        </StyledCarousel>
        <button style={style} type="button" onClick={scrollRight}>&gt;</button>
      </FlexContainer>
    </>
  )
};

export default Outfit;
