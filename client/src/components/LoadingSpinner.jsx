import React from 'react';

const LoadingSpinner = () => (
  <div style={{
    position: 'absolute',
    top: '400%',
    left: '50%',
    transform: 'translateX(-50%)',
  }}
  >
    <div className="lds-roller">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);

export default LoadingSpinner;
