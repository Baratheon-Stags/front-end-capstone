import styled from 'styled-components';

const TextContainer = styled.div`
  color: ${(props) => (props.color || 'black')};
  position: relative;
  width: ${(props) => (props.width || '60px')};
  left: ${(props) => (props.left || '0')};
  font-size: ${(props) => (props.size || '16px')};
  maxLength: ${(props) => (props.maxLength || '5')};
  text-align: ${(props) => (props.align || 'left')};
  text-shadow: ${(props) => (props.shadow || '0')};
  margin: ${(props) => (props.margin || '0')};
`;

export default TextContainer;
