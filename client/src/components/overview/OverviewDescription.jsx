import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands, regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import FlexContainer from '../styled/FlexContainer.styled';

const OverviewDescription = ({overview}) => (
  <FlexContainer
    direction="row"
    align="center"
    gap="1em"
  >
    <div style={{ borderRight: '2px solid black', width: '70%', paddingRight: '1em' }}>
      <h2 style={{ textTransform: 'uppercase', letterSpacing: '-1.5px' }}>{overview.slogan}</h2>
      <p>{overview.description}</p>
      <FlexContainer direction="row" gap=".5em" align="center">
        <span>Share on social media: </span>
        <FontAwesomeIcon icon={brands('facebook')} className="social-icon" />
        <FontAwesomeIcon icon={brands('twitter')} className="social-icon" />
        <FontAwesomeIcon icon={brands('instagram')} className="social-icon" />
      </FlexContainer>
    </div>
    <ul style={{ paddingLeft: '0', listStyle: 'none' }}>
      {overview.features.map((feature, i) => (
        <li key={i}>
          <FontAwesomeIcon
            style={{ marginRight: '10px' }}
            icon={regular('square-check')}
          />
          {feature.value !== null
            ? `${feature.feature}: ${feature.value}`
            : `${feature.feature}`}
        </li>
      ))}
    </ul>
  </FlexContainer>
);

export default OverviewDescription;
