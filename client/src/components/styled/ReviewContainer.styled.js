import styled from 'styled-components';

// accepts flex-direction and gap props

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  gap: ${(props) => props.gap || '0'};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  flex-wrap: ${(props) => props.wrap || 'nowrap'};
  width: 95%;
  word-break: break-word;
  padding: 0 0 10px;
  border-bottom: 2px solid #bbb;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
`;

export default ReviewContainer;
