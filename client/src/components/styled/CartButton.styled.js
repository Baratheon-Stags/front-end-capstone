import styled from 'styled-components';

const CartBtnStyled = styled.button`
  color: white;
  padding: .45em .75em;
  background-color: #555555;
  outline: none;
  border: 1px solid black;
  transition: all .25s ease;
  font-weight: bold;
  text-align: center;
  height: 100%;
  width: 45%;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
    background-color: grey;
    color: white;
    border-radius: 3px;
  }

  &:focus {
    outline: none;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 50%;
  }

  &[disabled]:hover {
    background-color: #555555;
    color: white;
    border-radius: 0;
  }
`;

export default CartBtnStyled;
