import styled from 'styled-components';

const QuantityDropDown = styled.select`
  border: 1px solid #555555;
  color: #555555;
  padding: .45em 1.25em;
  background-color: #f3f3f3;
  font-weight: bold;
  height: 100%;
  width: 55%;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

export default QuantityDropDown;
