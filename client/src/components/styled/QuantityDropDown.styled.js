import styled from 'styled-components';

const QuantityDropDown = styled.select`
  border: 1px solid #555555;
  color: #555555;
  padding: .45em 1.25em;
  background-color: #f3f3f3;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

export default QuantityDropDown;
