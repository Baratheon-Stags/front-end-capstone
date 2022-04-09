import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { CarouselContainer, CarouselWrapper, CarouselContentWrapper, CarouselContent, ThumbnailContainer, ThumbnailControlsContainer, ThumbnailsContainer, ThumbnailsContainerWrapper, ArrowButton} from '../styled/GalleryCarousel.styled';

const OverviewGallery = ({currentStyle, handleExpand}) => {
  const galleryImages = currentStyle.photos.reduce((images, current) => {
    images.push(current.url);
    return images;
  }, []);

  const galleryThumbnails = currentStyle.photos.reduce((images, current) => {
    images.push(current.thumbnail_url);
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

  useEffect(() => {
    setCurrentGalleryIndex(0);
  }, [currentStyle]);

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

  return (
    <CarouselContainer>
      <CarouselWrapper>
        {
          currentGalleryIndex > 0
          && (
            <ArrowButton style={{ left: '18px' }} onClick={prevImage}>
              &lt;
            </ArrowButton>
          )
        }
        <ThumbnailControlsContainer>
          <FontAwesomeIcon
            icon={solid('arrow-up')}
            className="thumbnail-control"
            onClick={prevThumbnail}
          />
          <ThumbnailsContainerWrapper>
            <ThumbnailsContainer
              thumbnailIndex={currentThumbnailIndex}
            >
              {galleryThumbnails.map((image, i) => (
                <ThumbnailContainer
                  onClick={() => goToImage(i)}
                  selected={i === currentGalleryIndex}
                  key={i}
                >
                  <img src={image} key={i} alt="" />
                </ThumbnailContainer>
              ))}
            </ThumbnailsContainer>
          </ThumbnailsContainerWrapper>
          <FontAwesomeIcon
            icon={solid('arrow-down')}
            className="thumbnail-control"
            onClick={nextThumbnail}
          />
        </ThumbnailControlsContainer>
        <FontAwesomeIcon
          icon={solid('expand')}
          className="fullscreen-button"
          onClick={handleExpand}
        />
        <CarouselContentWrapper>
          <CarouselContent
            currentGalleryIndex={currentGalleryIndex}
            onClick={(e) => {
              e.target.classList.toggle('zoomed');
            }}
          >
            {galleryImages.map((image, i) => (
              <img
                src={image}
                key={i}
                alt=""
              />
            ))}
          </CarouselContent>
        </CarouselContentWrapper>
        {
          currentGalleryIndex < (length - 1)
          && (
            <ArrowButton style={{ right: '18px' }} onClick={nextImage}>
              &gt;
            </ArrowButton>
          )
        }
      </CarouselWrapper>
    </CarouselContainer>
  );
};

export default OverviewGallery;
