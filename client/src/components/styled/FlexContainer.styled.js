import styled from 'styled-components';

// accepts flex-direction and gap props

const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  gap: ${(props) => props.gap || '3em'};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  flex-wrap: ${(props) => props.wrap || 'nowrap'};
  width: 100%;
`;

export default FlexContainer;
