import React from 'react';
import styled from '@emotion/styled';
import ImageMask from './ImageMask';

interface IGalleryItemProps {
  image: string;
}

const GalleryItem: React.FC<IGalleryItemProps> = ({ image }) => {
  return (
    <ImageCard>
      <CardInner>
        <CardWrapper>
          <Image src={image} />
          <ImageMask />
        </CardWrapper>
      </CardInner>
    </ImageCard>
  );
};

const ImageCard = styled.div`
  flex: 0 1 25%;
  width: 25%;
`;

const CardInner = styled.div`
  background-color: rgb(255, 255, 255);
  margin: 9px;
  cursor: pointer;
  position: relative;
  border-radius: 4px;
  box-shadow: none;
  transition: box-shadow 0.25s ease 0s;
`;

const CardWrapper = styled.div`
  background-color: rgb(255, 255, 255);
  cursor: pointer;
  border-radius: 4px;
  transition: box-shadow 0.25s ease 0s;
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 71%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0px;
  left: 0px;
  vertical-align: middle;
  border-style: none;
`;

export default GalleryItem;
