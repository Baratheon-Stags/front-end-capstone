import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  progess {
    margin-right: 8px;
  }
  progress[value] {
    width: 20;
    background-color: ${props => props.color};
  }
`;

const SectionedBar = ({ color = "#00FF00", value, max = 20, width = 20}) => {
  return (
    <Container color={color} width={width}>
      <progress value={0} max={20} />
    </Container>
  )
};

export default SectionedBar;
