import React from 'react';
import axios from 'axios';
import FlexContainer from '../styled/FlexContainer.styled';
import ReviewContainer from '../styled/ReviewContainer.styled';
import Link from '../styled/Link.styled';
import GenerateStarRatings from '../GenerateReviewRatings';

const Review = ({ review }) => {
  // Date of review
  const date = new Date(review.date);
  const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
  const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

  // Handle mark as helpful
  const handleMarkAshelpful = () => {
    axios.put(`/helpful/${review.review_id}`);
  };

  // Handle report
  const handleReport = () => {
    axios.put(`/report/${review.review_id}`);
  };

  return (
    <div>
      <ReviewContainer
        direction="column"
      >
        <FlexContainer
          direction="row"
          align="baseline"
          justify="space-between"
          gap="3"
        >
          <div>
            <GenerateStarRatings rating={review.rating} />
          </div>
          <div>
            {`${review.reviewer_name}, ${months[month]} ${day}, ${year}`}
          </div>
        </FlexContainer>
        <div><b>{review.summary}</b></div>
        <div>{review.body}</div>
        <div>{review.recommend === true ? 'I recommend this product ✓' : null}</div>
        <FlexContainer
          direction="row"
          align="left"
          gap="5px"
        >
          <div>
            Helpful?
          </div>
          <Link onClick={handleMarkAshelpful}>Yes</Link>
          {`(${review.helpfulness})`}
          <Link oonClick={handleReport}>Report</Link>
        </FlexContainer>
      </ReviewContainer>
    </div>
  );
};

export default Review;
