/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import axios from 'axios';
import { CardContainer, CardImage, CardDesc } from '../styled/Card.styled';
import CompareModal from './CompareModal';
import GenerateStarRatings from '../GenerateStarRatings';

import FlexContainer from '../styled/FlexContainer.styled';

const Card = ({ product, overviewFeatures, relatedCompare }) => {
  const {
    id, image, category, name, default_price, ratings, features
  } = product;

  // Get features for current item
  // Store them somewhere in state
  // Get features for each Related item
  // Load features of Related into an array
  // Populate modals for each Card

  const style = {
    position: 'relative',
    top: '7%',
    left: '83%',
  };

  const goToProduct = () => {
    console.log('Going to product:', product.id);
  };

  const openComparison = (event) => {
    event.stopPropagation();
    relatedCompare(id);
  };

  // Gets features for all related products
  // useEffect(() => {
  //   let isMounted = true;
  //   axios.get(`/product/${id}`)
  //     .then((response) => {
  //       if (isMounted) {
  //         setRelatedFeatures((previous) => [...previous, ...response.data[0].features]);
  //       }
  //     });
  //   return () => {
  //     isMounted = false;
  //   };
  // }, []);

  return (
    <li>
      <CompareModal features={features} overviewFeatures={overviewFeatures} />
      <CardContainer onClick={goToProduct}>
        <CardImage url={image}>
          <FontAwesomeIcon onClick={openComparison} style={style} icon={regular('star')} className="fa-lg" />
        </CardImage>
        <CardDesc>
          <FlexContainer gap="0" direction="column">
            <span>
              {' '}
              {category}
            </span>
            <span>
              {' '}
              {name}
            </span>
            <span>
              {' '}
              $
              {default_price}
            </span>
            <GenerateStarRatings ratings={ratings} />
          </FlexContainer>
        </CardDesc>
      </CardContainer>
    </li>
  );
};

export default Card;
