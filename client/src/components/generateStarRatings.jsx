import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';

const RatingContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 100px;
`;

const RatingBar = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  background-color: black;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
`;

const RatingStars = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  gap: 0;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

// accepts a ratings object and returns a fully generated ratings component
// component will include a container that houses 5 star icons
// as well as a rectangle behind the icons that will fill in the rating
const generateStarRatings = (ratings) => {
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

  // calculate the width of the RatingBar
  const ratingBarWidth = `${(reviewAverage / 5) * 100}%`;

  return (
    <RatingContainer>
      <RatingStars>
        <FontAwesomeIcon icon={regular('star')} className="star-icon" />
        <FontAwesomeIcon icon={regular('star')} className="star-icon" />
        <FontAwesomeIcon icon={regular('star')} className="star-icon" />
        <FontAwesomeIcon icon={regular('star')} className="star-icon" />
        <FontAwesomeIcon icon={regular('star')} className="star-icon" />
      </RatingStars>
      <RatingBar width={ratingBarWidth} />
    </RatingContainer>
  );
};

export default generateStarRatings;
