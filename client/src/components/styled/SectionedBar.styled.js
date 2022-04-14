import React from 'react';
import styled from 'styled-components';
import FlexContainer from './FlexContainer.styled';
import TextContainer from './TextContainer.styled';

const Section = styled.div`
  position: relative;
  background-color: grey;
  width: 125px;
  height: 5px;
`;

const Triangle = styled.div`
  position: absolute;
  top: -24px;
  left: ${(props) => (props.left - 1) * 22}%;
  font-size: 48px;
`

const SectionedBar = ({ name, value, low, high}) => {
  return (
    <>
    <FlexContainer
      direction="column"
      align="left"
      justify="flex-start"
      gap="2px"
    >
      {name}
      <FlexContainer
        direction="row"
        align="left"
        justify="flex-start"
        gap="5px"
        width="100%"
        margin="0 0 4px"
      >
        <Section />
        <Section />
        <Section />
        <Section />
        <Triangle left={value}>▾</Triangle>
      </FlexContainer>


      <FlexContainer
        direction="row"
        justify="space-between"
        width="100%"
        margin="0 0 9px"
      >
        <TextContainer size="14px" align="left" width="35%">{low}</TextContainer>
        <TextContainer size="14px" align="right" width="35%">{high}</TextContainer>
      </FlexContainer>
    </FlexContainer>
    </>
  )
};

export default SectionedBar;


