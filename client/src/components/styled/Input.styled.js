import styled from 'styled-components';

const Input = styled.input`
  type: text;
  height: ${(props) => props.height || '36px'};
  width: ${(props) => props.width || '45%'};
  font-size: 16px;
  padding: 10px;
  margin: 10px;
  background: white;
  border: 1px solid rgb(0, 0, 0, 0.5);
  border-radius: 5px;
  ::placeholder {
    color: grey;
  }
`;

export default Input;
