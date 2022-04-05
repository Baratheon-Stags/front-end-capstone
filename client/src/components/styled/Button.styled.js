import styled from 'styled-components';

const Button = styled.button`
  color: #555555;
  padding: .25em 1em;
  background-color: #f3f3f3;
  text-transform: uppercase;
  outline: none;
  border: 1px solid #555555;
  transition: all .25s ease;
  width: 10em;

  &:hover {
    cursor: pointer;
    background-color: grey;
    color: white;
    border-radius: 3px;
  }
`;

export default Button;
