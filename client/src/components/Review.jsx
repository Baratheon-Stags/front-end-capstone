import React from 'react';
import axios from 'axios';
import FlexContainer from './styled/FlexContainer.styled';
import ReviewContainer from './styled/ReviewContainer.styled';
import Link from './styled/Link.styled';
import GenerateStarRatings from './GenerateReviewRatings';


const Review = ({ review }) => {
<<<<<<< Updated upstream
  // console.log('');
=======
  const date = new Date(review.date);
  const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
  var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

  const handleMarkAshelpful = () => {
    axios.put(`/helpful/${review.review_id}`)
  }

  const handleReport = () => {
    axios.put(`/report/${review.review_id}`)
  }

>>>>>>> Stashed changes
  return (
    <>
      <ReviewContainer
        direction="column"
      >
      <FlexContainer
        direction="row"
        align="baseline"
        justify="space-between"
        gap="3"
      >
      <div><GenerateStarRatings ratings={review.rating} />
      </div>
      <div>
        {`${review.reviewer_name}, ${months[month]} ${day}, ${year}`}
      </div>
      </FlexContainer>
      <div><b>{review.summary}</b></div>
      <div>{review.body}</div>
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


      </ FlexContainer>
      </ReviewContainer>
    </>
  );
};

export default Review;
