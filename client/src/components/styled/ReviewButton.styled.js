import styled, { css } from 'styled-components';

const Button = styled.button`
  color: black;
  padding: .45em 1.25em;
  background-color: #f3f3f3;
  outline: none;
  border: 1px solid #555555;
  transition: all .25s ease;
  font-weight: bold;
  text-align: center;
  width: 37%;
  height:40px;
  border-radius: 6px;
  font-family: 'Poppins', sans-serif;
  box-shadow: 2px 5px 3px rgba(0,0,0,.5);

  &:hover {
    cursor: pointer;
    background-color: grey;
    color: white;

  }

  &:focus {
    outline: none;
  }

  ${(props) => props.selected && css`
    background-color: #555555;
    color: white;
    border: 1px solid black;
  `}
`;

export default Button;
