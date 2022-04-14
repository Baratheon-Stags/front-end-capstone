import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const FavoriteButtonContainer = styled.button`
  position: absolute;
  top: 95%;
  transform: translate(-50%, -50%);
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 100%;
  background-color: rgba(255,255,255,.75);
  backdrop-filter: blur(2);
  transition: all .2s ease;
  box-shadow: 1px 1px 3px rgba(0,0,0,.25);
  border: none;

  @media (max-height: 1100px) {
    height: 36px;
    width: 36px;
  }

  &:hover {
    cursor: pointer;
    background-color: rgb(246,246,246);
  }

  &:focus {
    outline: none;
  }

  &[disabled] {
    cursor: not-allowed;
  }
`;

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
