import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import FlexContainer from '../styled/FlexContainer.styled';

const CartBtnStyled = styled.button`
  color: #555555;
  padding: .45em 1.25em;
  background-color: #f3f3f3;
  text-transform: uppercase;
  outline: none;
  border: 1px solid #555555;
  transition: all .25s ease;
  font-weight: bold;
  text-align: center;

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

const AddToCartBtn = ({selectedQuantity, selectedSize, currentStyle, selectedSku}) => {
  const [sentStatus, setSentStatus] = useState(null);
  const [isAdded, setIsAdded] = useState(false);

  const cartOptions = {
    sku_id: selectedSku.sku_id,
  };

  const handleAddToCart = () => {
    axios.post('/cart', cartOptions)
      .then(() => {
        setSentStatus(true);
        setIsAdded(true);
      }).catch(() => {
        setSentStatus(false);
      });
  };

  let statusMsg;
  if (sentStatus) {
    statusMsg = `Added ${selectedQuantity} ${selectedSize} in ${currentStyle.name} to your cart.`;
  } else if (sentStatus === false) {
    statusMsg = 'Failed to add to cart. Please try again';
  }

  const statusMsgStyle = {
    color: sentStatus ? 'green' : 'red',
    fontSize: '1rem',
    width: '70%',
  };

  return (
    <FlexContainer direction="column" gap=".2em">
      <CartBtnStyled
        onClick={() => {
          if (selectedQuantity > 0) {
            handleAddToCart();
          }
        }}
      >
        Add to Cart
      </CartBtnStyled>
      {sentStatus && (
        <span style={statusMsgStyle}>{statusMsg}</span>
      )}
    </FlexContainer>
  );
};

export default AddToCartBtn;
