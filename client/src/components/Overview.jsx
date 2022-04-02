import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import FlexContainer from './styled/FlexContainer.styled';
import OverviewGallery from './OverviewGallery';
import OverviewDetails from './OverviewDetails';
import OverviewDescription from './OverviewDescription';

const Overview = ({product, overview, styles, metadata}) => {
  const [selectedStyle, setSelectedStyle] = useState(styles.results[0]);

  const handleStyleChange = (style) => {
    setSelectedStyle(style);
  };

  console.log(styles);

  return (
    // Overall overview container
    <FlexContainer
      direction="column"
      align="center"
      justify="space-between"
    >
      {/* container for top half of overview */}
      <FlexContainer direction="row" align="center">
        <OverviewGallery />
        <OverviewDetails />
      </FlexContainer>
      <OverviewDescription />
    </FlexContainer>
  );
};

export default Overview;
