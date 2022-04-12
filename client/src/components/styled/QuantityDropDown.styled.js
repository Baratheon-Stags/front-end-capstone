import styled, { css } from 'styled-components';

const QuantityDropDown = styled.select`
  border: 1px solid #555555;
  color: black;
  padding: .45em 1.25em;
  background-color: #f3f3f3;
  font-weight: bold;
  height: 100%;
  width: 45%;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 50%;
  }
`;

export default QuantityDropDown;
