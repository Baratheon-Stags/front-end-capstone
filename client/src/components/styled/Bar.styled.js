import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

const Container = styled.div`
  progess {
    margin-right: 8px;
  }

  progress[value] {
    width: ${props => props.width};
    background-color: ${props => props.color};
  }

`;

const Bar = ({ color = "#00FF00", value, max = 100, width = 100}) => {
  return (
    <Container color={color} width={width}>
      <progress value={value} max={max} />
    </Container>
  )
};

Bar.propTypes ={
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  color: PropTypes.string,
  width: PropTypes.string,
}


export default Bar;
