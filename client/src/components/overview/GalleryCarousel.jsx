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
    color: #333;
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
  transform: translateX(-${(props) => props.currentIndex * 100}%);

  &::-webkit-scrollbar {
    display: none;
  }

  & > * {
    width: 100%;
    flex-shrink: 0;
    flex-grow: 1;
  }

  & > img {
    width: 100%;
    height: 100%;
    max-height: 800px;
    aspect-ratio: 9/16;
    object-fit: cover;
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

const ThumbnailsContainer = styled.div`
  position: absolute;
  top: 2.5%;
  left: 2.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 5;
  gap: 10px;
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
  }

  ${(props) => props.selected && css`
    & {
      border: 1px solid white;
    }
  `}

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const GalleryCarousel = ({galleryImages, galleryThumbnails}) => {
  // hold the index of the currently displayed image in the carousel
  const [currentIndex, setCurrentIndex] = useState(0);

  // hold the length of the galleryImages array
  const [length, setLength] = useState(galleryImages.length);

  // monitor the galleryImages array to change the length
  useEffect(() => {
    setLength(galleryImages.length);
  }, [galleryImages]);

  const nextImage = () => {
    if (currentIndex < (length - 1)) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const goToImage = (imageIndex) => {
    setCurrentIndex(imageIndex);
  };

  return (
    <CarouselContainer>
      <CarouselWrapper>
        {
          currentIndex > 0
          && (
            <ArrowButton style={{ left: '18px' }} onClick={prevImage}>
              &lt;
            </ArrowButton>
          )
        }
        <ThumbnailsContainer>
          {galleryThumbnails.map((image, i) => (
            <ThumbnailContainer
              onClick={() => goToImage(i)}
              selected={i === currentIndex}
              key={i}
            >
              <img src={image} key={i} alt="" />
            </ThumbnailContainer>
          ))}
        </ThumbnailsContainer>
        <FontAwesomeIcon
          icon={solid('expand')}
          className="fullscreen-button"
        />
        <CarouselContentWrapper>
          <CarouselContent
            currentIndex={currentIndex}
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
          currentIndex < (length - 1)
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
