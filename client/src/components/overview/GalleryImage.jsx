import React, { useState, useRef } from 'react';
import { CarouselContent } from '../styled/Gallery.styled';

const GalleryImage = ({galleryImages, currentGalleryIndex}) => {
  const [zoom, setZoom] = useState(false);
  const [mouseX, setMouseX] = useState(null);
  const [mouseY, setMouseY] = useState(null);
  const zoomScale = 1.5;

  const carouselContent = useRef(null);

  const handleImageClick = () => {
    setZoom((prevState) => !prevState);
  };

  const handleMouseMove = (e) => {
    const DOMRect = carouselContent.current.getBoundingClientRect();
    const {
      height, width, left: offsetLeft, top: offsetTop,
    } = DOMRect;
    const x = ((e.pageX - offsetLeft) / width) * 100;
    const y = ((e.pageY - offsetTop) / height) * 100;

    setMouseX(x);
    setMouseY(y);
  };

  const transformOrigin = {
    transformOrigin: `${mouseX}% ${mouseY}%`,
  };

  const imageDivStyle = {
    height: '900px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    transition: 'transform .2s ease-out',
    backgroundImage: `url(${galleryImages[currentGalleryIndex]})`,
  };

  const galleryContainerStyle = {
    height: '900px',
    overflow: 'hidden',
  };

  return (
    <CarouselContent
      style={galleryContainerStyle}
      ref={carouselContent}
      onClick={handleImageClick}
      onMouseMove={handleMouseMove}
    >
      <div
        style={{
          ...imageDivStyle,
          transform: zoom ? `scale(${zoomScale})` : 'scale(1)',
          ...transformOrigin,
        }}
        className="gallery-image"
      />
    </CarouselContent>
  );
};

export default GalleryImage;
