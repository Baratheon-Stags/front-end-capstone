import React, { useState } from 'react';
import FlexContainer from '../styled/FlexContainer.styled';
import SizeButton from '../styled/SizeButton.styled';

const ProductInteraction = ({currentStyle}) => {
  const styleSkus = currentStyle.skus;
  const skuList = Object.keys(styleSkus).reduce((list, skuId, i) => {
    const sku = { ...styleSkus[skuId], sku_id: skuId };
    list.push(sku);
    return list;
  }, []);

  const [selectedSkuIndex, setSelectedSkuIndex] = useState(0);

  // create an array for the selected sku's quantity, and reset the values to be 1-indexed
  const currentQuantityList = Array.from(Array(skuList[selectedSkuIndex].quantity).keys());
  currentQuantityList.forEach((quantity, i) => {
    currentQuantityList[i] = quantity + 1;
  });

  return (
    <FlexContainer direction="column" gap="1em">
      <span>{`Current Size: ${skuList[selectedSkuIndex].size}`}</span>
      <FlexContainer direction="row" gap=".5em" justify="space-between" wrap="wrap">
        {skuList.map((sku, i) => (
          <SizeButton
            onClick={() => setSelectedSkuIndex(i)}
            selected={i === selectedSkuIndex}
            key={i}
          >
            {sku.size}
          </SizeButton>
        ))}
      </FlexContainer>
      <FlexContainer direction="row" justify="space-between">
        <span>Select Quantity: </span>
        <select name="quantity">
          {currentQuantityList.map((quantity, i) => (
            <option
              key={i}
              value={quantity}
            >
              {quantity}
            </option>
          ))}
        </select>
      </FlexContainer>
      <FlexContainer direction="row" gap=".5em" justify="space-between">
        <span>Add to bag</span>
        <span>Favorite</span>
      </FlexContainer>
    </FlexContainer>
  );
};

export default ProductInteraction;
