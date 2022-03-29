import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { callAPI } from '../api';
import { IImageData } from '../utils/interface';
import GalleryHeader from './GalleryHeader';

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
    </GalleryContainer>
  );
};

const GalleryContainer = styled.div`
  width: 100%;
  height: calc(100% - 48px);
  padding: 0px 32px 32px;
  overflow: hidden scroll;
`;

export default Gallery;
