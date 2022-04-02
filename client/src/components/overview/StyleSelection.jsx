import React from 'react';
import Avatar from '../styled/Avatar.styled';

const StyleSelection = ({styles, currentStyle}) => {
  const styleOptions = styles.results;

  return (
    <>
      {styleOptions.map((style, i) => {
        console.log('style is: ', style);
        if (i === styleOptions.indexOf(currentStyle)) {
          return <Avatar selected key={i}><img src={style.photos[0].thumbnail_url} alt="" /></Avatar>;
        }
        return <Avatar key={i} />;
      })}
    </>
  );
};

export default StyleSelection;
