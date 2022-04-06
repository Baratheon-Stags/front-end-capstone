import React from 'react';
import AvatarContainer from '../styled/AvatarContainer.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const Avatar = ({selected, image, handleStyleChange, style}) => (
  <AvatarContainer onClick={() => handleStyleChange(style)} selected={selected}>
    <span><FontAwesomeIcon icon={solid('circle-check')} /></span>
    <img src={image} alt="" />
  </AvatarContainer>
);

export default Avatar;
