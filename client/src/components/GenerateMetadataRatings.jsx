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
  left: 0px;
  height: 20px;
  width: 100px;
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

const GenerateStarRatings = ({ratings}) => {
  // grab the ratings, parse them into integers, push into an array
  const ratingValues = Object.values(ratings).reduce((values, rating) => {
    values.push(parseInt(rating));
    return values;
  }, []);

  // calculate sum of reviews from the ratings object
  const ratingSum = ratingValues.reduce((sum, rating) => sum + rating, 0);

  // calculate weighted total of the reviews
  const weightedTotal = ratingValues.reduce((total, rating, i) => total + (rating * (i + 1)), 0);

  // calculate the review average
  const reviewAverage = weightedTotal / ratingSum;

  // calculate the inverse width of the RatingBar
  const ratingBarWidth = `${100 - (reviewAverage / 5) * 100}%`;

  return (
    <FlexContainer direction="row" justify="flex-start" align="center" gap=".5em">
      <Rating>      <span>{reviewAverage.toFixed(1)}</span></Rating>
      <RatingContainer>
        <RatingStarsContainer>
          <FontAwesomeIcon icon={solid('star')} className="star-icon" />
          <FontAwesomeIcon icon={solid('star')} className="star-icon" />
          <FontAwesomeIcon icon={solid('star')} className="star-icon" />
          <FontAwesomeIcon icon={solid('star')} className="star-icon" />
          <FontAwesomeIcon icon={solid('star')} className="star-icon" />
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
