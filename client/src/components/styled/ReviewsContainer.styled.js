import styled from 'styled-components';

// accepts flex-direction and gap props

const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  gap: ${(props) => props.gap || '3em'};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  flex-wrap: ${(props) => props.wrap || 'nowrap'};
  width: 100%;
  min-height: 200px;
  max-height: 700px;
  overflow: auto;
`;

export default ReviewsContainer;
