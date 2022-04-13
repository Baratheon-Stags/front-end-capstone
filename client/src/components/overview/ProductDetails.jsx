import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FlexContainer from '../styled/FlexContainer.styled';
import GenerateStarRatings from '../GenerateStarRatings';
import StyledLink from '../styled/StyledLink.styled';

const ProductDetails = ({overview, metadata}) => {
  const { name, category, id } = overview;
  const [reviewTotal, setReviewTotal] = useState(null);

  useEffect(() => {
    axios.get(`/reviews/${id}/1/10000/${sort}`).then((res) => {
      setReviewTotal(res.data[1].results.length);
    });
  }, []);

  return (
    <FlexContainer direction="column" gap="1.5em">
      <FlexContainer direction="column" gap="0">
        <GenerateStarRatings ratings={metadata.ratings} />
        <StyledLink style={{ fontSize: '.65em' }} href="#reviews">
          {
            reviewTotal
              ? `Read All ${reviewTotal} Reviews`
              : 'Read All Reviews'
          }
        </StyledLink>
      </FlexContainer>
      <FlexContainer direction="column" gap="0">
        <span style={{ fontSize: '.85em', opacity: '.8', textTransform: 'uppercase', marginBottom: '-15px', letterSpacing: '.2em' }}>{category}</span>
        <h1 style={{ marginBottom: '1em' }}>{name}</h1>
      </FlexContainer>
    </FlexContainer>
  );
};

export default ProductDetails;
