import React from 'react';
import axios from 'axios';
import FlexContainer from '../styled/FlexContainer.styled';
import ReviewContainer from '../styled/ReviewContainer.styled';
import Link from '../styled/Link.styled';
import GenerateStarRatings from '../GenerateReviewRatings';
import TextContainer from '../styled/TextContainer.styled';

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
        {/* Star Rating, Name and Date*/}
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

        {/* Body */}
        <div><b>{review.summary}</b></div>

        {/* Summary */}
        <div>{review.body}</div>

        {/* Recommend */}
        <TextContainer width="100%" color="green">{review.recommend === true ? 'I recommend this product ✓' : null}</TextContainer>

        {/* Helpful, Yes, Report */}
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
          <Link onClick={handleReport}>Report</Link>
        </FlexContainer>
      </ReviewContainer>
    </div>
  );
};

export default Review;
