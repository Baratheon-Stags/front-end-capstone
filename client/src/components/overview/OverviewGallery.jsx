import React from 'react';
import GalleryCarousel from './GalleryCarousel';

const OverviewGallery = ({currentStyle, handleExpand}) => {
  const galleryImages = currentStyle.photos.reduce((images, current) => {
    images.push(current.url);
    return images;
  }, []);

  const galleryThumbnails = currentStyle.photos.reduce((images, current) => {
    images.push(current.thumbnail_url);
    return images;
  }, []);

  return (
    <GalleryCarousel
      galleryImages={galleryImages}
      galleryThumbnails={galleryThumbnails}
      handleExpand={handleExpand}
      currentStyle={currentStyle}
    />
  );
};

export default OverviewGallery;
