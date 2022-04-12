import styled from 'styled-components';

const TextContainer = styled.div`
  color: ${(props) => (props.color || 'black')};
  position: relative;
  width: ${(props) => (props.width || '60px')};
  left: ${(props) => (props.left || '0')};
  font-size: ${(props) => (props.size || '16px')}
`;

export default TextContainer;
