import React, { useState } from 'react';
import FlexContainer from '../styled/FlexContainer.styled';
import SizeButton from '../styled/SizeButton.styled';
import AddToCartBtn from './AddToCartBtn';
import QuantityDropDown from '../styled/QuantityDropDown.styled';

const ProductInteraction = ({currentStyle}) => {
  const styleSkus = currentStyle.skus;
  const skuList = Object.keys(styleSkus).reduce((list, skuId, i) => {
    const sku = { ...styleSkus[skuId], sku_id: skuId };
    list.push(sku);
    return list;
  }, []);

  const [selectedSkuIndex, setSelectedSkuIndex] = useState(0);
  const [selectedQuantity, setSelectedQuantity] = useState(0);
  const [selectedSize, setSelectedSize] = useState(skuList[selectedSkuIndex].size);

  // create an array for the selected sku's quantity, and reset the values to be 1-indexed
  const currentQuantityList = Array.from(Array(skuList[selectedSkuIndex].quantity).keys());
  currentQuantityList.forEach((quantity, i) => {
    currentQuantityList[i] = quantity + 1;
  });

  return (
    <FlexContainer direction="column" gap="1em">
      <span>
        <span style={{ fontWeight: 'bold' }}>SIZE &gt; </span>
        {skuList[selectedSkuIndex].size}
      </span>
      <FlexContainer direction="row" gap=".5em" wrap="wrap">
        {skuList.map((sku, i) => (
          <SizeButton
            onClick={() => {
              setSelectedSkuIndex(i);
              setSelectedSize(sku.size);
            }}
            selected={i === selectedSkuIndex}
            key={i}
          >
            {sku.size}
          </SizeButton>
        ))}
      </FlexContainer>
      <FlexContainer direction="column" gap="1em">
        <FlexContainer direction="row" gap=".5em">
          <QuantityDropDown
            name="quantity"
            onChange={(e) => setSelectedQuantity(e.target.value)}
          >
            <option>Select Quantity</option>
            {currentQuantityList.map((quantity, i) => (
              <option
                key={i}
                value={quantity}
              >
                {quantity}
              </option>
            ))}
          </QuantityDropDown>
          <AddToCartBtn
            selectedQuantity={selectedQuantity}
            selectedSize={selectedSize}
            currentStyle={currentStyle}
            selectedSku={skuList[selectedSkuIndex]}
          />
        </FlexContainer>
        <span>Favorite</span>
      </FlexContainer>
    </FlexContainer>
  );
};

export default ProductInteraction;
