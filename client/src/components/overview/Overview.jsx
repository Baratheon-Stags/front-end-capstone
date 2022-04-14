import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import FlexContainer from '../styled/FlexContainer.styled';
import OverviewGallery from './OverviewGallery';
import OverviewDetails from './OverviewDetails';
import OverviewDescription from './OverviewDescription';
import { OverviewMainContainer, OverviewDetailsContainer, OverviewGalleryContainer } from '../styled/OverviewContainers.styled';

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
