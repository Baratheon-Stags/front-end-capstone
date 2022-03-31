import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  gap: ${(props) => props.gap || '3em'};
  background-color: #f3f3f3;
`;

export default FlexContainer;
