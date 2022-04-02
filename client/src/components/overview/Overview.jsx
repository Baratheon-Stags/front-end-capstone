import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import FlexContainer from '../styled/FlexContainer.styled';
import OverviewGallery from './OverviewGallery';
import OverviewDetails from './OverviewDetails';
import OverviewDescription from './OverviewDescription';

const Overview = ({product, overview, styles, metadata}) => {
  const [selectedStyle, setSelectedStyle] = useState(styles.results[0]);

  const handleStyleChange = (style) => {
    setSelectedStyle(style);
  };

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
          <OverviewGallery />
          <OverviewDetails overview={overview} />
        </FlexContainer>
        <OverviewDescription overview={overview} />
      </FlexContainer>
    </>
  );
};

export default Overview;
