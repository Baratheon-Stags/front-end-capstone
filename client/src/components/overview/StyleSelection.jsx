import React from 'react';
import Avatar from './Avatar';
import FlexContainer from '../styled/FlexContainer.styled';

const StyleSelection = ({styles, currentStyle, handleStyleChange}) => {
  const styleOptions = styles.results;

  const styleImages = styleOptions.reduce((images, style) => {
    images.push(style.photos[0].thumbnail_url);
    return images;
  }, []);

  // find the current price
  // either the sale price or if the sale price is null then the original price
  const originalPrice = currentStyle.original_price;
  const currentPrice = currentStyle.sale_price ?? originalPrice;
  const isDiscounted = originalPrice !== currentPrice;

  const originalPriceStyle = {
    textDecoration: isDiscounted ? 'line-through' : 'none',
    color: isDiscounted ? 'red' : 'inherit',
    fontSize: isDiscounted ? '.8em' : '1.8em',
  };

  return (
    <FlexContainer direction="column" gap="1em">
      <div style={{ borderBottom: '2px solid rgba(200,200,200,.75', marginTop: '1em' }}>
        {isDiscounted && <span style={{ fontSize: '1.8em'}}> ${currentPrice}  </span>}
        <span style={originalPriceStyle}>${originalPrice}</span>
      </div>
      <span>
        <span style={{ fontWeight: 'bold' }}>STYLE &gt; </span>
        {currentStyle.name}
      </span>
      <FlexContainer
        direction="row"
        wrap="wrap"
        gap=".5em"
      >
        {styleOptions.map((style, i) => {
          if (i === styleOptions.indexOf(currentStyle)) {
            return (
              <Avatar
                style={style}
                handleStyleChange={handleStyleChange}
                selected
                key={i}
                image={styleImages[i]}
              />
            );
          }
          return (
            <Avatar
              style={style}
              handleStyleChange={handleStyleChange}
              image={styleImages[i]}
              key={i}
            />
          );
        })}
      </FlexContainer>
    </FlexContainer>
  );
};

export default StyleSelection;
