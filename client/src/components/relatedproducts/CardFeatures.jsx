import React from 'react';

const CardFeatures = ({ modalItemFeatures }) => (
  <div>
    {modalItemFeatures.map((featureObj) => (
      <div key={Math.random()}>
        {featureObj.feature}
        :
        {' '}
        {featureObj.value}
      </div>
    ))}
  </div>
);

export default CardFeatures;
