import React from 'react';

const CurrentFeatures = ({ overviewFeatures }) => (
  <div>
    {overviewFeatures.map((featureObj) => (
      <div key={Math.random()}>
        {featureObj.feature}
        :
        {' '}
        {featureObj.value}
      </div>
    ))}
  </div>
);

export default CurrentFeatures;
