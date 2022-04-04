import React from 'react';

const Review = ({ review }) => {
  console.log('');
  return (
    <>
      <div>
        {review.rating + ' '}
        stars
      </div>
      <div>
        {review.reviewer_name + ', ' + review.date}
      </div>
      <div>{review.summary}</div>
      <div>{review.body}</div>
      <div>
        Helpful?
        {' (' + review.helpfulness + ')'}
      </div>
      <div>Yes</div>
      <div>Report</div>
    </>
  );
};

export default Review;
