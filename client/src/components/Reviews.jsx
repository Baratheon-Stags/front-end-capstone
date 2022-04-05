import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Metadata from './Metadata';
import Review from './Review';
import AddReview from './AddReview';

const Reviews = ({ productId }) => {
  const [allData, setAllData] = useState([]);
  const [count, setCount] = useState(2);
  const [form, setForm] = useState(false);
  const [metadata, reviews] = allData;

  useEffect(() => {
    axios.get(`/reviews/${productId}/1/2/newest`).then((data) => {
      setAllData(data.data);
    });
  }, []);

  const updateReviews = (position, increaseBy = 2) => {
    axios.get(`/reviews/${productId}/1/${count + increaseBy}/newest`).then((data) => {
      setCount(count + increaseBy);
      setAllData(data.data);
      window.scrollTo(0, position);
    });
  };

  const useForm = (boolean) => {
    setForm(boolean);
  };

  return (
    <>
      <div>reviews, sorted by</div>
      <Metadata metadata={metadata} />
      {metadata === undefined ? null : reviews.results.map(
        (review) => <Review key={review.review_id} review={review} />,
      )}
      {form ? (
        <>
          <AddReview
            productId={productId}
            discardHandler={useForm}
            characteristics={metadata.characteristics}
          />
        </>
      ) : (
        <>
          <button type="button" onClick={() => updateReviews(window.pageYOffset)}>More Reviews</button>
          <button type="button" onClick={() => { setForm(true); }}>Add a Review +</button>
        </>
      )}
    </>
  );
};

export default Reviews;
