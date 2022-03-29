import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { callAPI } from '../api';
import { IImageData } from '../utils/interface';
import GalleryHeader from './GalleryHeader';
import GalleryItem from './GalleryItem';

const Gallery: React.FC = () => {
  const [images, setImages] = useState<IImageData[] | null>(null);

  useEffect(() => {
    const requestGET = async (): Promise<void> => {
      await callAPI.get('/').then((res) => {
        setImages(res.data.renderings);
      });
    };
    requestGET();
  }, []);

  return (
    <GalleryContainer>
      <GalleryHeader count={images ? images?.length : 0} />
      <GalleryList>
        {images?.map((image, idx) => (
          <GalleryItem key={idx} id={idx} image={image._id} />
        ))}
      </GalleryList>
    </GalleryContainer>
  );
};

const GalleryContainer = styled.div`
  width: 100%;
  height: calc(100vh - 48px);
  padding: 0px 32px 32px;
  overflow: hidden scroll;
  box-sizing: border-box;
`;

const GalleryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-top: 7px;
`;

export default Gallery;
