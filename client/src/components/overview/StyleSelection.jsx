import React from 'react';
import Avatar from './Avatar';
import FlexContainer from '../styled/FlexContainer.styled';

const StyleSelection = ({styles, currentStyle, handleStyleChange}) => {
  const styleOptions = styles.results;

  const styleImages = styleOptions.reduce((images, style, i) => {
    images.push(style.photos[i].thumbnail_url);
    return images;
  }, []);

  return (
    <FlexContainer direction="row" wrap="wrap" align="center" gap=".25em">
      <span>STYLE &gt;</span>
      <span>{currentStyle.name}</span>
      {styleOptions.map((style, i) => {
        if (i === styleOptions.indexOf(currentStyle)) {
          return <Avatar style={style} handleStyleChange={handleStyleChange} selected key={i} image={styleImages[i]} />;
        }
        return <Avatar style={style} handleStyleChange={handleStyleChange} image={styleImages[i]} key={i} />;
      })}
    </FlexContainer>
  );
};

export default StyleSelection;
