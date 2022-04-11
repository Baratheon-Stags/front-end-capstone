import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const FavoriteButtonContainer = styled.div`
  position: absolute;
  bottom: 2.5%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: rgba(255,255,255,.75);
  backdrop-filter: blur(2);
  transition: all .2s ease;

  &:hover {
    cursor: pointer;
    background-color: rgb(246,246,246);
  }
`;

const FavoriteButton = () => {
  const [favorited, setFavorite] = useState(false);

  return (
    <FavoriteButtonContainer onClick={() => setFavorite((prevState) => !prevState)}>
      {favorited
        ? <FontAwesomeIcon icon={solid('heart')} />
        : <FontAwesomeIcon icon={regular('heart')} /> }
    </FavoriteButtonContainer>
  );
};

export default FavoriteButton;
