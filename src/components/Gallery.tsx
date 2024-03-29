import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { callAPI } from '../api';
import GalleryHeader from './GalleryHeader';
import GalleryItem from './GalleryItem';
import { setImages } from '../store/actions/images';
import { RootState } from '../store/reducers';

const Gallery: React.FC = () => {
  const dispatch = useDispatch();
  const images = useSelector((state: RootState) => state.images.images);

  useEffect(() => {
    const requestGET = async (): Promise<void> => {
      await callAPI.get('/').then((res) => {
        dispatch(setImages(res.data.renderings));
      });
    };
    requestGET();
  }, []);

  return (
    <GalleryContainer>
      <GalleryHeader count={images ? images.length : 0} />
      <GalleryList>
        {images.map((image, idx) => (
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
