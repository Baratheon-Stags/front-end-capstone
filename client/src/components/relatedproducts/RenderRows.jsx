import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import FlexContainer from '../styled/FlexContainer.styled';

const helpers = require('./helpers/DistillTraits');

const Row = styled(FlexContainer)`
  display: flex;
  direction: row;
  justify-content: space-between;
  padding-right: 10px;
  padding-left: 10px;
`;

const FeatureBox = styled(FlexContainer)`
  width: 200px;
`;

const CheckBox = styled(FlexContainer)`
  justify-content: center;
`;

const RenderRows = ({ overviewFeatures, modalItemFeatures }) => {
  // Current function does not correctly filter traits for overlap
  const traits = helpers.distillTraits(overviewFeatures, modalItemFeatures);

  return (
    <FlexContainer direction="column" gap="0.5em" align="center">
      {traits.map((row) => (
        <Row key={Math.random()}>
          <CheckBox>{row.currHas ? <FontAwesomeIcon icon={solid('check')} className="fa-sm" /> : null}</CheckBox>
          <FeatureBox>
          {row.feature}
          :{(' ')}
          {row.value}
          </FeatureBox>
          <CheckBox>{row.cardHas ? <FontAwesomeIcon icon={solid('check')} className="fa-sm" /> : null}</CheckBox>
        </Row>
      ))}
    </FlexContainer>

  );
};

export default RenderRows;
