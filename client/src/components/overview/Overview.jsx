import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import FlexContainer from '../styled/FlexContainer.styled';
import OverviewGallery from './OverviewGallery';
import OverviewDetails from './OverviewDetails';
import OverviewDescription from './OverviewDescription';

const Overview = ({product, overview, styles, metadata}) => {
  const [currentStyle, setSelectedStyle] = useState(styles.results[0]);

  return (
    <>
      <h5>SITE-WIDE ANNOUNCEMENT MESSAGE!</h5>
      {/* overall overview container */}
      <FlexContainer
        direction="column"
        align="center"
        justify="space-between"
      >
        {/* container for top half of overview */}
        <FlexContainer
          direction="row"
          align="center"
          justify="space-between"
        >
          <OverviewGallery currentStyle={currentStyle} />
          <OverviewDetails
            overview={overview}
            styles={styles}
            currentStyle={currentStyle}
            metadata={metadata}
            handleStyleChange={(style) => setSelectedStyle(style)}
          />
        </FlexContainer>
        <OverviewDescription overview={overview} />
      </FlexContainer>
    </>
  );
};

export default Overview;
