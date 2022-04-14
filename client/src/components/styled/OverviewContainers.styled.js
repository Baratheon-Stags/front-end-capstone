import styled, { css } from 'styled-components';
import FlexContainer from './FlexContainer.styled';

const OverviewMainContainer = styled(FlexContainer)`
  @media (max-width: 1010px) {
    flex-direction: column;
  }
`;

const OverviewDetailsContainer = styled.div`
  width: 30%;
  transition: all .2s ease;

  ${(props) => props.expanded && css`
    @media (min-width: 1010px) {
      display: none;
    }
  `}

  @media (max-width: 1010px) {
    width: 100%;
  }
`;

const OverviewGalleryContainer = styled.div`
  width: 70%;
  border-radius: 2px;
  transition: all .2s ease;

  ${(props) => props.expanded && css`
    width: 100%;
  `}

  @media (max-height: 1100px) {
    height: 650px;
    width: 550px;
    ${(props) => props.expanded && css`
      width: 100%;
    `}
  }

  @media (max-width: 1010px) {
    width: 100%;
  }
`;

export {
  OverviewMainContainer,
  OverviewDetailsContainer,
  OverviewGalleryContainer,
};
