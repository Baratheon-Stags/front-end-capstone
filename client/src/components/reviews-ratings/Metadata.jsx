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
        //  Main
        <FlexContainer
          direction="row"
          align="flex-start"
          justify="center"
          width="100%"
          borderbottom="2px solid #bbb"
          margin="0 0 15px"
          gap="0"
        >
          {/* Average Rating */}
          <FlexContainer
            direction="column"
            align="center"
            width="25%"
            gap="0"
          >
            <TextContainer size="20px" align="center" width="100%">
              <b>Average Rating</b>
            </TextContainer>
            <GenerateStarRatings ratings={metadata.ratings} />
            <TextContainer size="24px" align="center" width="100%">
              {`${recommended}% of reviews recommend this product`}
            </TextContainer>
          </FlexContainer>
          <FlexContainer
            direction="column"
            id="ratings"
            justify="flex-start"
            align="center"
            gap="5px"
            width="38%"
          >

            {/* Rating Breakdown */}
            <b>Rating Breakdown</b>
            {Object.keys(distribution).reverse().map((rating) => (
              <FlexContainer
                key={rating}
                direction="row"
                align="left"
                justify="flex-start"
                gap="12px"
                margin="0 0 6px"
                width="100%"
              >
                <TextContainer size="20px" width="30%" align="right">
                  <Link onClick={() => onRatingSelect(parseInt(rating))}>
                    {`${rating} ${rating === '1' ? 'Star' : 'Star'}`}
                  </Link>
                </TextContainer>
                <Bar value={distribution[rating]} />
                <TextContainer size="20px" width="30%" align="left">
                  <div>{metadata.ratings[rating]}</div>
                </TextContainer>
              </FlexContainer>
            ))}
            <FlexContainer
              direction="column"
              align="center"
              justify="flex-start"
              gap="6px"
              margin="21px 0 0"
            >
              <div>{filter.length === 5 ? null : `Filter applied: ${filter.sort().toString().replaceAll(',', ', ')}`}</div>
              <div>{filter.length === 5 ? null : <Link onClick={() => onRatingSelect(0)}>Remove all filters</Link>}</div>
            </FlexContainer>
          </FlexContainer>

          {/* Characteristics Breakdown */}
          <FlexContainer
            direction="column"
            align="center"
            justify="flex-start"
            gap="0px"
            width="25%"
          >
          <TextContainer size="20px" align="center" width="100%">
            <b>Characteristics Breakdown</b>
          </TextContainer>
            <FlexContainer
              direction="column"
              align="left"
              justify="flex-start"
              gap="0px"
            >
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
          </FlexContainer>
        </FlexContainer>
      )}
    </div>
  );
};

export default Metadata;
