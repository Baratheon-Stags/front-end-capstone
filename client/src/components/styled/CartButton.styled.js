import styled from 'styled-components';

const CartBtnStyled = styled.button`
  color: black;
  padding: .45em .75em;
  background-color: #f3f3f3;
  outline: none;
  border: 1px solid #555555;
  transition: all .25s ease;
  font-weight: bold;
  text-align: center;
  height: 100%;
  width: 35%;

  &:hover {
    cursor: pointer;
    background-color: grey;
    color: white;
    border-radius: 3px;
  }

  &:focus {
    outline: none;
  }
`;

export default CartBtnStyled;
