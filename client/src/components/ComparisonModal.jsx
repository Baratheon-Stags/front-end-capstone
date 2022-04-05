import React from 'react';
import styled from 'styled-components';

const StyledBackground = styled.div`
  width: 200px;
  height: 200px;
  border: 2px solid black;
  background-color: E39525;
`;

const ComparisonModal = ({ showModal, setShowModal }) => {

  return (
    <>
    {showModal ? <StyledBackground/>: null}
    </>
  )
}

export default ComparisonModal;
