import styled, { css } from 'styled-components';

const Button = styled.button`
  color: #555555;
  padding: .45em 1.25em;
  background-color: #f3f3f3;
  text-transform: uppercase;
  outline: none;
  border: 1px solid #555555;
  transition: all .25s ease;
  font-weight: bold;
  text-align: center;
  width: 30%;

  &:hover {
    cursor: pointer;
    background-color: grey;
    color: white;
    border-radius: 3px;
  }

  &:focus {
    outline: none;
  }

  ${(props) => props.selected && css`
    background-color: grey;
    color: white;
  `}
`;

export default Button;
