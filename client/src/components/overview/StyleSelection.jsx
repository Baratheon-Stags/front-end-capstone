import React from 'react';
import Avatar from './Avatar';
import FlexContainer from '../styled/FlexContainer.styled';

const StyleSelection = ({styles, currentStyle, handleStyleChange}) => {
  const styleOptions = styles.results;

  const styleImages = styleOptions.reduce((images, style, i) => {
    images.push(style.photos[0].thumbnail_url);
    return images;
  }, []);

  return (
    <FlexContainer direction="column" gap="1em">
      <span><strong>STYLE &gt;</strong> {currentStyle.name}</span>
      <FlexContainer direction="row" wrap="wrap" gap=".5em">
        {styleOptions.map((style, i) => {
          if (i === styleOptions.indexOf(currentStyle)) {
            return <Avatar style={style} handleStyleChange={handleStyleChange} selected key={i} image={styleImages[i]} />;
          }
          return <Avatar style={style} handleStyleChange={handleStyleChange} image={styleImages[i]} key={i} />;
        })}
      </FlexContainer>
    </FlexContainer>
  );
};

export default StyleSelection;
