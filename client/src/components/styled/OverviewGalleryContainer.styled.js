import styled from 'styled-components';

const OverviewGalleryContainer = styled.div`
  width: ${(props) => (props.expanded ? '100%' : '80%')};
  border-radius: 2px;
`;

export default OverviewGalleryContainer;
