import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Metadata from './Metadata';
import Review from './Review';
import AddReview from './AddReview';
import FlexContainer from './styled/FlexContainer.styled';
import ReviewsContainer from './styled/ReviewsContainer.styled';


const Reviews = ({ productName, productId }) => {
  const [allData, setAllData] = useState([]);
  const [count, setCount] = useState(2);
  const [form, setForm] = useState(false);
  const [starFilter, setStarFilter] = useState([1, 2, 3, 4, 5]);
  const [metadata, reviews] = allData;

  useEffect(() => {
    axios.get(`/reviews/${productId}/1/10000/${sort}`).then((data) => {
      setAllData(data.data);
    });
  }, []);

  const handleFormToggle = (boolean) => {
    setForm(boolean);
  };

  const handleOptionSort = () => {
    var sortBy = document.getElementById("sort").value;
    axios.get(`/reviews/${productId}/1/10000/${sortBy}`).then((data) => {
      setAllData(data.data);
    });
  };

  const handleRatingSort = (star) => {
    if (star === 0) {
      setStarFilter([1, 2, 3, 4, 5]);
    } else if (starFilter.length === 5) {
      setStarFilter([star]);
    } else if (starFilter.indexOf(star) === -1) {
      setStarFilter([...starFilter, star]);
    } else if (starFilter.length === 1 && starFilter[0] === star) {
      setStarFilter([1, 2, 3, 4, 5]);
    } else {
      setStarFilter(starFilter.filter((rating) => rating !== star));
    }
  };

  return (
    <>
      <h1>Reviews & Ratings</h1>
      <FlexContainer
        direction="row"
        align="left"
        justify="space-between"
        gap="0"
      >
        <Metadata metadata={metadata} onRatingSelect={handleRatingSort} filter={starFilter}/>
        <FlexContainer
          direction="column"
          align="left"
          justify="flex-start"
          gap="0"
        >
        <div>
          {metadata === undefined ? null : `${reviews.results.length} reviews, sorted by `}
          <select id="sort" onChange={() => handleOptionSort()}>
            <option value="relevant">Relevance</option>
            <option value="helpful">Helpful</option>
            <option value="newest">Newest</option>
          </select>
        </div>

        <FlexContainer
        direction="column"
        align="baseline"
        justify="flex-start"
        gap="0"
        >
        <ReviewsContainer
          direction="column"
          align="left"
          justify="flex-start"
          gap="0"
        >
          {metadata === undefined ? null
            :
              reviews.results.filter(review => starFilter.includes(review.rating)).slice(0, count).map((review) => <Review key={review.review_id} review={review} />,)
            }
          </ ReviewsContainer>
      <FlexContainer
        direction="row"
        align="center"
        justify="flex-start"
        gap="0"
        >
        <button type="button" onClick={() => setCount(count + 2)}>More Reviews</button>
        <button type="button" onClick={() => { setForm(true); }}>Add a Review +</button>
      </FlexContainer>
      </FlexContainer>


        </FlexContainer>
      </FlexContainer>
      {form ? (
        <AddReview
          productId={productId}
          onDiscard={handleFormToggle}
          productName={productName}
          characteristics={metadata.characteristics}
        />
      ) : null}
    </>
  );
};

export default Reviews;
