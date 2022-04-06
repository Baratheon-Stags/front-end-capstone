import styled from 'styled-components';

const OverviewGalleryContainer = styled.div`
  width: ${(props) => (props.expanded ? '100%' : '60%')};
  height: 100%;
  border-radius: 2px;

  & > img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
    aspect-ratio: 16/9;
    border-radius: 2px;
  }
`;

export default OverviewGalleryContainer;
