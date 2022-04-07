import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const CartBtnStyled = styled.button`
  color: #555555;
  padding: .45em .75em;
  background-color: #f3f3f3;
  outline: none;
  border: 1px solid #555555;
  transition: all .25s ease;
  font-weight: bold;
  text-align: center;
  height: 100%;
  width: 35%;

  &:hover {
    cursor: pointer;
    background-color: grey;
    color: white;
    border-radius: 3px;
  }

  &:focus {
    outline: none;
  }
`;

const AddToCartBtn = ({selectedQuantity, selectedSku, handleCartStatus}) => {
  // const [isAdded, setIsAdded] = useState(false);

  const cartOptions = {
    sku_id: selectedSku.sku_id,
  };

  const handleAddToCart = () => {
    axios.post('/cart', cartOptions)
      .then(() => {
        handleCartStatus(true);
      }).catch(() => {
        handleCartStatus(false);
      });
  };

  return (
    <CartBtnStyled
      onClick={() => {
        if (selectedQuantity > 0) {
          handleAddToCart();
        }
      }}
    >
      Add to Cart
    </CartBtnStyled>
  );
};

export default AddToCartBtn;
