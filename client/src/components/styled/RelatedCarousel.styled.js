import styled from 'styled-components';
import FlexContainer from './FlexContainer.styled';

const StyledCarousel = styled(FlexContainer)`
  align-items: center;
  justify-content: flex-start;
  width: ${(props) => props.width} || 1260px;
  overflow-x: auto;
  overflow-y: hidden;
  list-style-type: none;
  &::-webkit-scrollbar {
    display: none;
  }
  scroll-behavior: smooth;
`;

export default StyledCarousel;
