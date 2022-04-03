import React, { useState, useEffect } from 'react';
import Metadata from './Ratings';
import Review from './Review';
import axios from 'axios';

const Reviews = (props) => {
  const [data, setData] = useState([]);

  // grab product on mount
  useEffect(() => {
    axios.get(`/reviews/${props.productId}/1/2/newest`).then((data) => {
      setData(data.data);
    });
  }, []);

  const [metadata, reviews] = data;

  return (
    <>
      <div>reviews, sorted by</div>
      <Metadata metadata={metadata}/>
      <Review reviews={reviews}/>
      <button>More Reviews</button>
      <button>Add a Review +</button>
    </>
  );
};

export default Reviews;
