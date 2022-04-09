import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CarouselWrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;

  & > .fullscreen-button {
    position: absolute;
    top: 2.5%;
    right: 2.5%;
    z-index: 5;
    cursor: pointer;
    color: white;
  }
`;

const CarouselContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const CarouselContent = styled.div`
  display: flex;
  transition: all .2s ease;
  -ms-overflow-style: none;
  scroll-bar-width: none;
  transform: translateX(-${(props) => props.currentGalleryIndex * 100}%);

  &::-webkit-scrollbar {
    display: none;
  }

  & > * {
    flex-shrink: 0;
    flex-grow: 1;
  }

  & > img {
    height: 900px;
    aspect-ratio: 9/16;
    object-fit: cover;
    object-position: center;
    border-radius: 2px;
  }

  & > img:hover {
    cursor: zoom-in;
  }

  & .zoomed {
    transform: scale(1.5);
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  z-index: 1;
  top: 95%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: white;
  border: none;
  box-shadow: 1px 1px 3px rgba(0,0,0,.25);
  transition: all .25s ease;
  font-weight: bold;
  background-color: rgba(255,255,255, 0.75);
  backdrop-filter: blur(2px);

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: rgb(246,246,246);
  }
`;

const ThumbnailControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  top: 5%;
  left: 2.5%;
  z-index: 5;

  & > .thumbnail-control {
    transition: all .2s ease;
    color: white;
  }

  & > .thumbnail-control:hover {
    cursor: pointer;
    color: grey;
  }
`;

const ThumbnailsContainerWrapper = styled.div`
  overflow: scroll;
  scroll-bar-width: none;
  max-height: 600px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ThumbnailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  transform: translateY(-${(props) => props.thumbnailIndex * 85}px);
  transition: transform .25s ease-in-out;
`;

const ThumbnailContainer = styled.div`
  width: 75px;
  height: 75px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover {
    cursor: pointer;
    border: 1px solid white;
  }

  ${(props) => props.selected && css`
    & {
      border: 1px solid white;
    }
  `}

  & > img {
    width: 73px;
    height: 73px;
    object-fit: cover;
    object-position: center;
  }
`;

const GalleryCarousel = ({galleryImages, galleryThumbnails, handleExpand, currentStyle}) => {
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

export default GalleryCarousel;
