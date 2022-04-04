import React from 'react';
import styled from 'styled-components';

const RatingContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RatingBar = styled.div`
  width: ${(props) => props.width || 0};
  height: 10px;
  color: black;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
`;

const RatingStars = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;

  i {
    opacity: 75%;
  }
`;

// accepts a ratings object and returns a fully generated ratings component
// component will include a container that houses 5 star icons
// as well as a rectangle behind the icons that will fill in the rating
const generateStarRatings = (ratings) => {
  // calculate sum of reviews from the ratings object
  const ratingSum = Object.keys(ratings).reduce((sum, rating) => {
    sum += ratings[rating];
    return sum;
  }, 0);

  // calculate weighted total of the reviews
  const weightedTotal = Object.keys(ratings).reduce((total, rating, i) => {
    total += ratings[rating] * (i + 1);
    return total;
  }, 0);

  // calculate the review average
  const reviewAverage = weightedTotal / ratingSum;

  // calculate the width of the RatingBar
  const ratingBarWidth = (reviewAverage / 5) * 100;

  return (
    <RatingContainer>
      <RatingStars>
      </RatingStars>
      <RatingBar width={ratingBarWidth} />
    </RatingContainer>
  );
};

export default generateStarRatings;


// create a container with a set width and position relative
// inside that container, render out:
  // a div that will hold FA icons
  // a div that will hold a black rectangle with variable width
// each child div will be position absolute, top: 0 left: 0
// rectangle div will have a lower z-index