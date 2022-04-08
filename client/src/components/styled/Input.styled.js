import styled from 'styled-components';

const Input = styled.input`
  type: text;
  height: ${(props) => props.height || '12px'};
  width: ${(props) => props.width || '50%'};
  font-size: 12px;
  padding: 10px;
  margin: 10px;
  background: white;
  border: solid rgb(0, 0, 0, 0.5);
  border-radius: 3px;
  ::placeholder {
    color: grey;
  }
`;

export default Input;
