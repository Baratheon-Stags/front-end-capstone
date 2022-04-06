import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import FlexContainer from '../styled/FlexContainer.styled';
import OverviewGallery from './OverviewGallery';
import OverviewDetails from './OverviewDetails';
import OverviewDescription from './OverviewDescription';
import OverviewGalleryContainer from '../styled/OverviewGalleryContainer.styled';
import OverviewDetailsContainer from '../styled/OverviewDetailsContainer.styled';

const Overview = ({product, overview, styles, metadata}) => {
  const [currentStyle, setSelectedStyle] = useState(styles.results[0]);

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
          <OverviewGalleryContainer>
            <OverviewGallery currentStyle={currentStyle} />
          </OverviewGalleryContainer>
          <OverviewDetailsContainer>
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
