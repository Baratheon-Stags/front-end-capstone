import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FlexContainer from '../styled/FlexContainer.styled';
import SizeButton from '../styled/SizeButton.styled';
import QuantityDropDown from '../styled/QuantityDropDown.styled';
import CartButton from '../styled/CartButton.styled';

const ProductInteraction = ({currentStyle}) => {
  // construct skuList
  const styleSkus = currentStyle.skus;
  const skuList = Object.keys(styleSkus).reduce((list, skuId) => {
    const sku = { ...styleSkus[skuId], sku_id: skuId };
    list.push(sku);
    return list;
  }, []);

  const sizingOptions = skuList.map((currentSku) => currentSku.size);

  const [selectedSkuIndex, setSelectedSkuIndex] = useState(0);
  const [selectedQuantity, setSelectedQuantity] = useState(0);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(null);
  const [sentCartStatus, setSentCartStatus] = useState(null);

  // monitor the style, size, and quantity selections for changes and reset the status message
  useEffect(() => {
    setSentCartStatus(null);
  }, [currentStyle, selectedSizeIndex, selectedQuantity]);

  useEffect(() => {
    setSelectedQuantity(0);
    setSelectedSizeIndex(null);
  }, [currentStyle]);

  // handler to control the status of whether a status message should be shown
  const handleCartStatus = (status) => {
    setSentCartStatus(status);
  };

  // create an array for the selected sku's quantity, and reset the values to be 1-indexed
  let currentQuantityList = Array.from(Array(skuList[selectedSkuIndex].quantity).keys());
  currentQuantityList.forEach((quantity, i) => {
    currentQuantityList[i] = quantity + 1;
  });

  // limit quantity list to a max of 15
  if (currentQuantityList.length > 15) {
    currentQuantityList = currentQuantityList.slice(0, 14);
  }

  // construct the options object to be passed in to axios
  const cartOptions = {
    sku_id: skuList[selectedSkuIndex].sku_id,
  };

  // handler to post to the cart API
  const handleAddToCart = () => {
    axios.post('/cart', cartOptions)
      .then(() => {
        handleCartStatus(true);
      }).catch(() => {
        handleCartStatus(false);
      });
  };

  // handle creation and display of status message
  let statusMsg;
  if (sentCartStatus) {
    statusMsg = `Added ${selectedQuantity} ${currentStyle.name} in size ${sizingOptions[selectedSizeIndex]} to your cart.`;
  } else if (sentCartStatus === false) {
    statusMsg = 'Failed to add to cart. Please try again';
  }

  const statusMsgStyle = {
    color: sentCartStatus ? 'green' : 'red',
    fontSize: '1rem',
    visibility: sentCartStatus ? 'visible' : 'hidden',
    position: 'absolute',
    bottom: '-50%',
    transform: 'translateY(100%)',
  };

  return (
    <FlexContainer direction="column" gap="1em">
      <FlexContainer direction="row" gap=".5em" wrap="wrap">
        {skuList.map((sku, i) => (
          <SizeButton
            onClick={() => {
              setSelectedSkuIndex(i);
              setSelectedSizeIndex(i);
            }}
            selected={selectedSizeIndex === i}
            key={i}
          >
            {sku.size}
          </SizeButton>
        ))}
      </FlexContainer>
      <FlexContainer direction="column" gap="1em">
        <FlexContainer
          direction="column"
          gap="1em"
          align="center"
          style={{ position: 'relative' }}
        >
          <FlexContainer
            direction="row"
            gap="1em"
            align="center"
          >
            <QuantityDropDown
              name="quantity"
              onChange={(e) => setSelectedQuantity(e.target.value)}
              value={selectedQuantity}
              disabled={selectedSizeIndex === null}
            >
              <option>Quantity</option>
              {currentQuantityList.map((quantity, i) => (
                <option
                  key={i}
                  value={quantity}
                >
                  {quantity}
                </option>
              ))}
            </QuantityDropDown>
            <CartButton
              onClick={() => {
                if (selectedQuantity > 0) {
                  handleAddToCart();
                }
              }}
              disabled={selectedSizeIndex === null || selectedQuantity === 0}
            >
              Add to Cart
            </CartButton>
          </FlexContainer>
          <span style={statusMsgStyle}>{statusMsg}</span>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default ProductInteraction;
