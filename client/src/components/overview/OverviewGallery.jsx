import React from 'react';

const OverviewGallery = ({currentStyle}) => {
  const galleryImages = currentStyle.photos.reduce((images, current) => {
    images.push(current.url);
    return images;
  }, []);

  return (
    <img src={galleryImages[0]} alt="product" />
  );
};

export default OverviewGallery;
