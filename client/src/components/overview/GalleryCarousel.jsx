import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CarouselWrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;

const CarouselContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const CarouselContent = styled.div`
  display: flex;
  transition: all .25s linear;
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
    height: 60vh;
    object-fit: cover;
    aspect-ratio: 9/16;
    border-radius: 2px;
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  z-index: 1;
  top: 50%;
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

const GalleryCarousel = ({galleryImages}) => {
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
        <CarouselContentWrapper>
          <CarouselContent currentIndex={currentIndex}>
            {galleryImages.map((image, i) => <img src={image} key={i} alt="" />)}
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
