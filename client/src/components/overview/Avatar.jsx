import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import AvatarContainer from '../styled/AvatarContainer.styled';

const Avatar = ({selected, image, handleStyleChange, style}) => (
  <AvatarContainer onClick={() => handleStyleChange(style)} selected={selected}>
    <span><FontAwesomeIcon icon={solid('circle-check')} /></span>
    <img src={image} alt="" />
  </AvatarContainer>
);

export default Avatar;
