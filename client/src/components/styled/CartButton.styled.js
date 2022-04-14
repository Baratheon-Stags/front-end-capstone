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
  position: relative;

  &:not([disabled]) {
    transform: translate(-3px, -3px);
  }

  &::after,
  &::before {
    display: block;
    content: '';
    position: absolute;
    transition: .1s ease;
  }

  &::after {
    height: 100%;
    width: 3px;
    top: 3px;
    right: -3px;
    border-top: 1px solid black;
    border-right: 1px solid black;
  }

  &::before {
    width: 100%;
    height: 3px;
    left: 3px;
    bottom: -3px;
    border-bottom: 1px solid black;
    border-left: 1px solid black;
  }

  &:active {
    transform: translate(0, 0);

    &::after,
    &::before {
      transform: translate(-3px, -3px);
      opacity: 0;
    }
  }

  &:hover {
    cursor: pointer;
    background-color: grey;
    color: white;
  }

  &:focus {
    outline: none;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 50%;
    &::after,
    &::before {
      opacity: 0;
    }
  }

  &[disabled]:hover {
    background-color: #555555;
    color: white;
    border-radius: 0;
  }
`;

export default CartBtnStyled;
