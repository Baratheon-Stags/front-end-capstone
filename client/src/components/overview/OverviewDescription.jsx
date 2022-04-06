import React from 'react';
import FlexContainer from '../styled/FlexContainer.styled';

const OverviewDescription = ({overview}) => (
  <FlexContainer
    direction="row"
    align="center"
    justify="space-between"
  >
    <div style={{ borderRight: '2px solid black' }}>
      <h2>{overview.slogan}</h2>
      <p>{overview.description}</p>
    </div>
    <ul>
      {overview.features.map((feature, i) => <li key={i}>{feature.feature}</li>)}
    </ul>
  </FlexContainer>
);

export default OverviewDescription;
