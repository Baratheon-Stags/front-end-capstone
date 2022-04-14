import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import FlexContainer from '../styled/FlexContainer.styled';
import StyledCarousel from '../styled/RelatedCarousel.styled';
import OutfitCard from './OutfitCard';
import AddItemCard from './AddItemCard';

const Outfit = ({ productId }) => {
  // At default spot
  const carousel = useRef(null);
  const [productDetails, setProductDetails] = useState([]);

  const getOutfitItems = () => {
    const outfitItems = Object.keys(localStorage);
    const products = [];
    for (let x = 0; x < outfitItems.length; x += 1) {
      const key = outfitItems[x];
      const storedProduct = localStorage.getItem(key);
      products.push(JSON.parse(storedProduct));
    }
    setProductDetails(products);
  };

  useEffect(() => {
    getOutfitItems();
  }, []);

  useEffect(() => {
    getOutfitItems();
  }, [productId]);


  const removeItem = (toRemove) => {
    const outfitItems = Object.keys(localStorage);
    const newProducts = [];

    for (let x = 0; x < outfitItems.length; x += 1) {
      const key = outfitItems[x];
      if (parseInt(key) !== toRemove) {
        const storedProduct = localStorage.getItem(key);
        newProducts.push(JSON.parse(storedProduct));
      }
    }
    localStorage.removeItem(toRemove);
    setProductDetails(newProducts);
  };

  const addItem = () => {
    axios.get(`/related/${productId}`)
      .then((product) => {
      // May be overwriting product in local
        localStorage.setItem(productId, JSON.stringify(product.data));
        getOutfitItems();
      });
  };

  const scrollRight = () => {
    carousel.current.scrollLeft += 450;
  };

  const scrollLeft = () => {
    carousel.current.scrollLeft -= 450;
  };

  const style = {
    outline: '0',
    fontSize: '25px',
    backgroundColor: 'Transparent',
    border: 'none',
    margin: '10px 10px 10px 0px',
  };

  return (
    <>
      <div className="section-header">
        <h2><span id="outfit"></span>Your Outfit</h2>
      </div>
      <FlexContainer gap="20px">
        <button style={style} type="button" onClick={scrollLeft} aria-label="previous-outfit-carousel"><FontAwesomeIcon icon={solid('arrow-left')} /></button>
        <AddItemCard addItem={addItem} productId={productId} />
        <FlexContainer>
          <StyledCarousel maxWidth="914px" gap="20px" ref={carousel} direction="row">
            {productDetails.map((product) => (
              <OutfitCard key={Math.random()} productDetails={product} removeItem={removeItem} />

            ))}
          </StyledCarousel>
        </FlexContainer>
        <button style={style} type="button" onClick={scrollRight} aria-label="next-outfit-carousel"><FontAwesomeIcon icon={solid('arrow-right')} /></button>
      </FlexContainer>
    </>
  );
};

export default Outfit;
