import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import FavoriteButton from './FavoriteButton';
import {
  CarouselContainer,
  CarouselWrapper,
  CarouselContentWrapper,
  CarouselContent,
  ThumbnailContainer,
  ThumbnailControlsContainer,
  ThumbnailsContainer,
  ThumbnailsContainerWrapper,
  ArrowButton,
  FullScreenButtonContainer,
  ThumbnailArrowContainer,
} from '../styled/Gallery.styled';

const OverviewGallery = ({currentStyle, handleExpand, expanded}) => {
  const defaultUrl = 'https://images.unsplash.com/photo-1590564310418-66304f55a2c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80';
  const galleryImages = currentStyle.photos.reduce((images, current) => {
    images.push(current.url ?? defaultUrl);
    return images;
  }, []);

  const galleryThumbnails = currentStyle.photos.reduce((images, current) => {
    images.push(current.thumbnail_url ?? defaultUrl);
    return images;
  }, []);

  // hold the index of the currently displayed image in the carousel
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [currentThumbnailIndex, setCurrentThumbnailIndex] = useState(0);

  // hold the length of the galleryImages array
  const [length, setLength] = useState(galleryImages.length);

  // monitor the galleryImages array to change the length
  useEffect(() => {
    setLength(galleryImages.length);
  }, [galleryImages]);

  const nextImage = () => {
    if (currentGalleryIndex < (length - 1)) {
      setCurrentGalleryIndex((prevState) => prevState + 1);
    }
  };

  const prevImage = () => {
    if (currentGalleryIndex > 0) {
      setCurrentGalleryIndex((prevState) => prevState - 1);
    }
  };

  const nextThumbnail = () => {
    if (currentThumbnailIndex < length - 1) {
      setCurrentThumbnailIndex((prevState) => prevState + 1);
    }
  };

  const prevThumbnail = () => {
    if (currentThumbnailIndex > 0) {
      setCurrentThumbnailIndex((prevState) => prevState - 1);
    }
  };

  const goToImage = (imageIndex) => {
    setCurrentGalleryIndex(imageIndex);
  };

  const [zoom, setZoom] = useState(false);
  const [mouseX, setMouseX] = useState(null);
  const [mouseY, setMouseY] = useState(null);
  const zoomScale = 1.75;

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
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    transition: 'transform .2s ease-out',
    backgroundImage: `url(${galleryImages[currentGalleryIndex]})`,
  };

  const galleryContainerStyle = {
    overflow: 'hidden',
  };

  // create a disabled boolean for the carousel controls, to be active when zoom is true
  const isDisabled = zoom;

  return (
    <CarouselContainer>
      <CarouselWrapper>
        {
          currentGalleryIndex > 0
          && (
            <ArrowButton
              disabled={isDisabled}
              style={{ left: '18px' }}
              onClick={prevImage}
              aria-label="previous-image"
            >
              <FontAwesomeIcon icon={solid('arrow-left')} />
            </ArrowButton>
          )
        }
        <ThumbnailControlsContainer>
          {
            length > 6 && (
              <ThumbnailArrowContainer
                disabled={isDisabled}
                onClick={prevThumbnail}
                aria-label="previous-thumbnail"
              >
                <FontAwesomeIcon
                  icon={solid('arrow-up')}
                  className="thumbnail-control"
                />
              </ThumbnailArrowContainer>
            )
          }
          <ThumbnailsContainerWrapper>
            <ThumbnailsContainer
              thumbnailIndex={currentThumbnailIndex}
            >
              {galleryThumbnails.map((image, i) => (
                <ThumbnailContainer
                  onClick={() => goToImage(i)}
                  selected={i === currentGalleryIndex}
                  key={i}
                  disabled={isDisabled}
                  aria-label="carousel-thumbnail"
                >
                  <img src={image} key={i} alt="" />
                </ThumbnailContainer>
              ))}
            </ThumbnailsContainer>
          </ThumbnailsContainerWrapper>
          {
            length > 6 && (
              <ThumbnailArrowContainer
                disabled={isDisabled}
                onClick={nextThumbnail}
                aria-label="next-thumbnail"
              >
                <FontAwesomeIcon
                  icon={solid('arrow-down')}
                  className="thumbnail-control"
                />
              </ThumbnailArrowContainer>
            )
          }
        </ThumbnailControlsContainer>
        <FullScreenButtonContainer
          onClick={handleExpand}
          disabled={isDisabled}
          aria-label="expand-image"
        >
          <FontAwesomeIcon
            icon={solid('expand')}
          />
        </FullScreenButtonContainer>
        <CarouselContentWrapper>
          <CarouselContent
            style={galleryContainerStyle}
            ref={carouselContent}
            onClick={handleImageClick}
            onMouseMove={handleMouseMove}
            expanded={expanded}
          >
            <div
              style={{
                ...imageDivStyle,
                transform: zoom ? `scale(${zoomScale})` : 'scale(1)',
                cursor: zoom ? 'zoom-out' : 'zoom-in',
                ...transformOrigin,
              }}
              className="gallery-image"
            />
          </CarouselContent>
        </CarouselContentWrapper>
        <FavoriteButton
          currentStyle={currentStyle}
          disabled={isDisabled}
        />
        {
          currentGalleryIndex < (length - 1)
          && (
            <ArrowButton
              disabled={isDisabled}
              style={{ right: '18px' }}
              onClick={nextImage}
              aria-label="next-image"
            >
              <FontAwesomeIcon icon={solid('arrow-right')} />
            </ArrowButton>
          )
        }
      </CarouselWrapper>
    </CarouselContainer>
  );
};

export default OverviewGallery;
