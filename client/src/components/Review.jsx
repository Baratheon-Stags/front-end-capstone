import React from 'react';
import FlexContainer from './styled/FlexContainer.styled';

const Review = ({ review }) => {
  console.log('');
  return (
    <>
      <div>
        {`${review.rating} stars`}
      </div>
      <div>
        {`${review.reviewer_name}, ${review.date}`}
      </div>
      <div><b>{review.summary}</b></div>
      <div>{review.body}</div>
      <div>
        {`Helpful? (${review.helpfulness})`}
      </div>
      <div>Yes</div>
      <div>Report</div>
    </>
  );
};

export default Review;
