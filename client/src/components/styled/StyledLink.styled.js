import styled from 'styled-components';

const StyledLink = styled.a`
  font-size: 1rem;
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  &:visited {
    color: inherit;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export default StyledLink;
