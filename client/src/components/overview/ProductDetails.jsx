import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import FlexContainer from '../styled/FlexContainer.styled';
import GenerateStarRatings from '../GenerateStarRatings';
import StyledLink from '../styled/StyledLink.styled';

const DetailsContainer = styled(FlexContainer)`
  @media (max-width: 1010px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;

    & h1 {
      margin-bottom: 0;
    }

    & > #details-ratings-container {
      align-items: flex-end;
    }
  }
`;

const ProductDetails = ({overview, metadata}) => {
  const { name, category, id } = overview;
  const [reviewTotal, setReviewTotal] = useState(null);

  useEffect(() => {
    axios.get(`/reviews/${id}/1/10000/${sort}`).then((res) => {
      setReviewTotal(res.data[1].results.length);
    });
  }, []);

  return (
    <DetailsContainer direction="column" gap="1.5em">
      <FlexContainer direction="column" gap="0" id="details-ratings-container">
        <div>
          <GenerateStarRatings ratings={metadata.ratings} />
        </div>
        <StyledLink style={{ fontSize: '.65em' }} href="#reviews">
          {
            reviewTotal
              ? `Read All ${reviewTotal} Reviews`
              : 'Read All Reviews'
          }
        </StyledLink>
      </FlexContainer>
      <FlexContainer direction="column" gap="0">
        <span style={{
          fontSize: '.85em', opacity: '.8', textTransform: 'uppercase', marginBottom: '-15px', letterSpacing: '.2em',
        }}
        >
          {category}
        </span>
        <h1>{name}</h1>
      </FlexContainer>
    </DetailsContainer>
  );
};

export default ProductDetails;
