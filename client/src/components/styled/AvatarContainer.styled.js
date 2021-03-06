import styled from 'styled-components';

const AvatarContainer = styled.div`
  border-radius: 100%;
  border: 1px solid black;
  width: 75px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${(props) => (props.selected ? '2px 2px 2px black' : '1px 1px 1px rgba(0, 0, 0, 0.75)')};
  transition: .25s ease;
  position: relative;

  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 2px black;
  }

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    z-index: -1;
    border-radius: 100%;
  }

  & > span {
    display: ${(props) => (props.selected ? 'inline-block' : 'none')};
    position: absolute;
    top: -6%;
    right: -6%;
    color: black;
  }
`;

export default AvatarContainer;
