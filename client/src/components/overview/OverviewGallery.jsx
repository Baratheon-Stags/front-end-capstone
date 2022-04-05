import React from 'react';
import GalleryCarousel from './GalleryCarousel';

const OverviewGallery = ({currentStyle}) => {
  const galleryImages = currentStyle.photos.reduce((images, current) => {
    images.push(current.url);
    return images;
  }, []);

  return (
    <GalleryCarousel galleryImages={galleryImages} />
  );
};

export default OverviewGallery;
