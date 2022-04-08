import React from 'react';
import FlexContainer from '../styled/FlexContainer.styled';

const OverviewDescription = ({overview}) => (
  <FlexContainer
    direction="row"
    align="center"
    gap="1em"
  >
    <div style={{ borderRight: '2px solid black', width: '70%', paddingRight: '1em' }}>
      <h2>{overview.slogan}</h2>
      <p>{overview.description}</p>
    </div>
    <ul style={{ paddingLeft: '0', listStyle: 'none' }}>
      {overview.features.map((feature, i) => (
        <li key={i}>
          {feature.value !== null
            ? `${feature.feature}: ${feature.value}`
            : `${feature.feature}`}
        </li>
      ))}
    </ul>
  </FlexContainer>
);

export default OverviewDescription;
