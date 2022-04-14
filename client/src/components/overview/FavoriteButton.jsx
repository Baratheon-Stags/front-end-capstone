import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import FavoriteButtonContainer from '../styled/FavoriteButtonContainer.styled';

const FavoriteButton = ({currentStyle, disabled}) => {
  const [favorited, setFavorite] = useState(false);

  useEffect(() => {
    setFavorite(false);
  }, [currentStyle]);

  return (
    <FavoriteButtonContainer
      disabled={disabled}
      onClick={() => setFavorite((prevState) => !prevState)}
      aria-label="favorite"
    >
      {favorited
        ? <FontAwesomeIcon icon={solid('heart')} />
        : <FontAwesomeIcon icon={regular('heart')} /> }
    </FavoriteButtonContainer>
  );
};

export default FavoriteButton;
