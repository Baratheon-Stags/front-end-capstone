import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import FlexContainer from '../styled/FlexContainer.styled';

const helpers = require('./helpers/DistillTraits');

const Row = styled.div`
  display: flex;
  direction: row;
`;

const RenderRows = ({ overviewFeatures, modalItemFeatures }) => {
  // Current function does not correctly filter traits for overlap
  const traits = helpers.distillTraits(overviewFeatures, modalItemFeatures);

  return (
    <FlexContainer direction="column" gap="0.5em" align="center">
      {traits.map((row) => (
        <Row>
          <FlexContainer>
            <div>{row.currHas ? <FontAwesomeIcon icon={regular('star')} className="fa-sm" /> : null}</div>
            {row.feature}
            :
            {row.value}
            <div>{row.cardHas ? <FontAwesomeIcon icon={solid('star')} className="fa-sm" /> : null}</div>
          </FlexContainer>
        </Row>
      ))}
    </FlexContainer>

  );
};

export default RenderRows;