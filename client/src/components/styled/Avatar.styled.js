import styled from 'styled-components';

const Avatar = styled.div`
  border-radius: 100%;
  border: 1px solid rgb(88,88,88);
  background-color: rgb(230,230,230);
  width: 75px;
  height: 75px;

  &:hover {
    cursor: pointer;
    background-color: rgba(210,210,210);
  }
`;

export default Avatar;
