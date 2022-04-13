import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
// import PropTypes from 'prop-types';
import FlexContainer from '../styled/FlexContainer.styled';
import OverviewGallery from './OverviewGallery';
import OverviewDetails from './OverviewDetails';
import OverviewDescription from './OverviewDescription';
import OverviewMainContainer from '../styled/OverviewMainContainer.styled';

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

const Overview = ({overview, styles, metadata}) => {
  const [currentStyle, setSelectedStyle] = useState(styles.results[0]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setSelectedStyle(styles.results[0]);
  }, [styles]);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <main>
      {/* overall overview container */}
      <FlexContainer
        direction="column"
      >
        {/* container for top half of overview */}
        <OverviewMainContainer
          direction="row"
          justify="center"
        >
          <OverviewGalleryContainer
            expanded={isExpanded}
          >
            <OverviewGallery
              currentStyle={currentStyle}
              handleExpand={handleExpand}
              expanded={isExpanded}
            />
          </OverviewGalleryContainer>
          <OverviewDetailsContainer expanded={isExpanded}>
            <OverviewDetails
              overview={overview}
              styles={styles}
              currentStyle={currentStyle}
              metadata={metadata}
              handleStyleChange={(style) => setSelectedStyle(style)}
            />
          </OverviewDetailsContainer>
        </OverviewMainContainer>
        <OverviewDescription overview={overview} />
      </FlexContainer>
    </main>
  );
};

export default Overview;
