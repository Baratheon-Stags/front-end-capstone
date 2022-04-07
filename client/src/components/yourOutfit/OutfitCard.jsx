import React, {useState} from 'react';
import GenerateStarRatings from '../GenerateStarRatings';
import FlexContainer from '../styled/FlexContainer.styled';
import { CardContainer, CardImage, CardDesc } from '../styled/Card.styled';

const OutfitCard = ({ productDetails }) => {

  console.log('')

  return (
    <>
      <CardContainer>
        <CardImage>
        </CardImage>
          <CardDesc>
            <FlexContainer gap="0" direction="column">
              <span>{productDetails.category}</span>
              <span>name</span>
              <span>$100</span>
            </FlexContainer>
          </CardDesc>
      </CardContainer>
        <CardContainer>
        <CardImage>
        </CardImage>
          <CardDesc>
            <FlexContainer gap="0" direction="column">
              <span>category</span>
              <span>name</span>
              <span>$100</span>
            </FlexContainer>
          </CardDesc>
      </CardContainer>
        <CardContainer>
        <CardImage>
        </CardImage>
          <CardDesc>
            <FlexContainer gap="0" direction="column">
              <span>category</span>
              <span>name</span>
              <span>$100</span>
            </FlexContainer>
          </CardDesc>
      </CardContainer>
    </>
  )
};

export default OutfitCard;
