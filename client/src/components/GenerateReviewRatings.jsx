import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import FlexContainer from './styled/FlexContainer.styled';

const RatingContainer = styled.div`
  display: inline-block;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 90px;
  line-height: 1;

  + span {
    line-height: 1;
  }
`;

const RatingBar = styled.span`
  width: ${(props) => props.width};
  height: 100%;
  background-color: #f5f5f5;
  position: absolute;
  top: 0;
  right: 0;
  white-space: nowrap;
  overflow: hidden;
`;

const RatingStarsContainer = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Rating = styled.span`
  display: inline-block;
  position: relative;
  display: flex;
  font-size: 100px;
`;

const GenerateStarRatings = ({ rating }) => {
  // calculate the inverse width of the RatingBar
  const ratingBarWidth = `${100 - (parseInt(rating) * 20)}%`;

  return (
    <FlexContainer direction="row" justify="flex-start" align="center" gap=".5em">
      <RatingContainer>
        <RatingStarsContainer>
          <FontAwesomeIcon icon={solid('star')} className="star-icon filled" />
          <FontAwesomeIcon icon={solid('star')} className="star-icon filled" />
          <FontAwesomeIcon icon={solid('star')} className="star-icon filled" />
          <FontAwesomeIcon icon={solid('star')} className="star-icon filled" />
          <FontAwesomeIcon icon={solid('star')} className="star-icon filled" />
        </RatingStarsContainer>
        <RatingBar width={ratingBarWidth} />
        <RatingStarsContainer>
          <FontAwesomeIcon icon={regular('star')} className="star-icon" />
          <FontAwesomeIcon icon={regular('star')} className="star-icon" />
          <FontAwesomeIcon icon={regular('star')} className="star-icon" />
          <FontAwesomeIcon icon={regular('star')} className="star-icon" />
          <FontAwesomeIcon icon={regular('star')} className="star-icon" />
        </RatingStarsContainer>
      </RatingContainer>
    </FlexContainer>
  );
};

export default GenerateStarRatings;
