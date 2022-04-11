import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
// import PropTypes from 'prop-types';
import FlexContainer from '../styled/FlexContainer.styled';
import OverviewGallery from './OverviewGallery';
import OverviewDetails from './OverviewDetails';
import OverviewDescription from './OverviewDescription';

const OverviewDetailsContainer = styled.div`
  width: 30%;
  transition: all .2s ease;

  ${(props) => props.expanded && css`
    display: none;
  `}
`;

const OverviewGalleryContainer = styled.div`
  width: 70%;
  border-radius: 2px;
  transition: all .2s ease;

  ${(props) => props.expanded && css`
    width: 100%;
  `}
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
    <>
      {/* overall overview container */}
      <FlexContainer
        direction="column"
      >
        {/* container for top half of overview */}
        <FlexContainer
          direction="row"
          align="center"
        >
          <OverviewGalleryContainer
            expanded={isExpanded}
          >
            <OverviewGallery
              currentStyle={currentStyle}
              handleExpand={handleExpand}
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
        </FlexContainer>
        <OverviewDescription overview={overview} />
      </FlexContainer>
    </>
  );
};

export default Overview;
