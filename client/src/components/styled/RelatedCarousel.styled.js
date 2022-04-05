import styled from 'styled-components';
import FlexContainer from './FlexContainer.styled';

const StyledCarousel = styled(FlexContainer)`
  align-items: center;
  justify-content: flex-start;
  width: 1000px;
  overflow-x: auto;
  list-style-type: none;
  &::-webkit-scrollbar {
    display: none;å
  }
  transform: translate3d(0);
  scroll-behavior: smooth;
`;

export default StyledCarousel;
