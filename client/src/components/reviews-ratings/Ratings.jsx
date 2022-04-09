import React from 'react';
import Bar from '../styled/Bar.styled';

const Helper = require('../Helpers');

const Metadata = ({ metadata }) => {
  let ratings;
  let recommended;
  let distribution;
  if (metadata !== undefined) {
    ratings = Helper.findAverageRating(metadata.ratings);
    recommended = (metadata.recommended.true * 100 / (parseInt(metadata.recommended.true) + parseInt(metadata.recommended.false))).toFixed(2);
    distribution = Helper.findRatingDistribution(metadata.ratings);
  }
  return (
    <div>
      {metadata === undefined ? null : (
        <>
          <div>{ratings.average}</div>
          <div>{ratings.roundedPercentage}</div>
          <div>
            {recommended}
            % of reviews recommend this product
          </div>
          <div id="ratings">
            {Object.keys(distribution).reverse().map((rating) => (
              <div key={rating}>
                <span>
                  {`${rating} `}
                  {rating === '1' ? 'star' : 'stars'}
                </span>
                <Bar value={distribution[rating]} />
              </div>
            ))}
          </div>
          <div id="characteristics">
            {Object.keys(metadata.characteristics).map((characteristic) => (
              <div key={characteristic}>
                <span>
                  {characteristic}
                </span>
                <Bar value={metadata.characteristics[characteristic].value * 20} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Metadata;
