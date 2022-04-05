import React from 'react';
import AvatarContainer from '../styled/AvatarContainer.styled';

const Avatar = ({selected, image, handleStyleChange, style}) => {
  return (
    <AvatarContainer onClick={() => handleStyleChange(style)} selected={selected}>
      <img src={image} alt="" />
    </AvatarContainer>
  )
};

export default Avatar;
