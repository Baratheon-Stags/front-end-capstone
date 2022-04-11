import React from 'react';
import Bar from '../styled/Bar.styled';
import FlexContainer from '../styled/FlexContainer.styled';
import TextContainer from '../styled/TextContainer.styled';
import SectionedBar from '../styled/SectionedBar.styled';
import Link from '../styled/Link.styled';
import GenerateStarRatings from '../GenerateMetadataRatings';
import Chart from '../Characteristics';

const Helper = require('../Helpers');

const Metadata = ({ filter, metadata, onRatingSelect }) => {
  // Metadata variables
  let ratings;
  let recommended;
  let distribution;

  if (metadata !== undefined) {
    // Percentage of reviews that recommend this product
    recommended = (metadata.recommended.true * 100 / (parseInt(metadata.recommended.true) + parseInt(metadata.recommended.false))).toFixed(2);

    // Distribution of ratings
    distribution = Helper.findRatingDistribution(metadata.ratings);
  }

  return (
    <div>
      {metadata === undefined ? null : (
        <FlexContainer
          direction="column"
          align="left"
          justify="space-between"
        >
          <FlexContainer
            direction="row"
            align="left"
            justify="space-between"
          >
            <div><GenerateStarRatings ratings={metadata.ratings} /></div>
          </FlexContainer>
          <div>
            {`${recommended}% of reviews recommend this product`}
          </div>
          <div id="ratings">
            Rating Breakdown
            <div>{filter.length === 5 ? null : `Filter applied: ${filter.sort().toString().replaceAll(',', ', ')}`}</div>
            <div>{filter.length === 5 ? null : <Link onClick={() => onRatingSelect(0)}>Remove all filters</Link>}</div>
            {Object.keys(distribution).reverse().map((rating) => (
              <FlexContainer
                key={rating}
                direction="row"
                align="left"
                justify="flex-start"
                gap="6px"
              >
                <TextContainer>
                  <Link onClick={() => onRatingSelect(parseInt(rating))}>
                    {`${rating} ${rating === '1' ? 'star' : 'stars'}`}
                  </Link>
                </TextContainer>
                <Bar value={distribution[rating]} />
                <TextContainer>
                  <div>{metadata.ratings[rating]}</div>
                </TextContainer>
              </FlexContainer>
            ))}
          </div>
          <div id="characteristics">
            {Object.keys(metadata.characteristics).map((characteristic) => (
              <div key={characteristic}>
                <SectionedBar
                  name={characteristic}
                  value={metadata.characteristics[characteristic].value}
                  low={Chart[characteristic.toLowerCase()][1]}
                  high={Chart[characteristic.toLowerCase()][5]}
                />
              </div>
            ))}
          </div>
        </FlexContainer>
      )}
    </div>
  );
};

export default Metadata;
