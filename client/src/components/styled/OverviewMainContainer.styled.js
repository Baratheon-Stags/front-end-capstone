import styled from 'styled-components';
import FlexContainer from './FlexContainer.styled';

const OverviewMainContainer = styled(FlexContainer)`
  @media (max-width: 1010px) {
    flex-direction: column;
  }
`;

export default OverviewMainContainer;
