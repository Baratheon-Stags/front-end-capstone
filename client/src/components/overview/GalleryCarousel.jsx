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

// make this DRYer
const LeftArrow = styled.button`
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: white;
  border: 1px solid #ddd;
  left: 18px;
  box-shadow: 1px 1px 3px rgba(0,0,0,.25);
  transition: all .25s ease;
  font-weight: bold;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: rgb(246,246,246);
  }
`;

const RightArrow = styled.button`
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: white;
  border: 1px solid #ddd;
  right: 18px;
  box-shadow: 1px 1px 3px rgba(0,0,0,.25);
  transition: all .25s ease;
  font-weight: bold;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: rgb(246,246,246);
  }
`;

const GalleryCarousel = ({galleryImages}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(galleryImages.length);

  useEffect(() => {
    setLength(galleryImages.length);
  }, [galleryImages]);

  const nextImage = () => {
    if (currentIndex < (length - 1)) {
      setCurrentIndex(prevState => prevState + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1);
    }
  };

  return (
    <CarouselContainer>
      <CarouselWrapper>
        {
          currentIndex > 0
          && (
            <LeftArrow onClick={prevImage}>
              &lt;
            </LeftArrow>
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
            <RightArrow onClick={nextImage}>
              &gt;
            </RightArrow>
          )
        }
      </CarouselWrapper>
    </CarouselContainer>
  );
};

export default GalleryCarousel;
