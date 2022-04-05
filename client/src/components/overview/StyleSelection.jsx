import React from 'react';
import Avatar from '../styled/Avatar.styled';
import FlexContainer from '../styled/FlexContainer.styled';

const StyleSelection = ({styles, currentStyle}) => {
  const styleOptions = styles.results;

  return (
    <FlexContainer direction="row" wrap="wrap" align="center" gap=".25em">
      {styleOptions.map((style, i) => {
        if (i === styleOptions.indexOf(currentStyle)) {
          return <Avatar selected key={i} />;
        }
        return <Avatar key={i} />;
      })}
    </FlexContainer>
  );
};

export default StyleSelection;
