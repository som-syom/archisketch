import React from 'react';
import styled from '@emotion/styled';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/reducers';
import DetailHeader from './DetailHeader';
import { nextImages, prevImages } from '../store/actions/detailView';

const DetailView: React.FC = () => {
  const dispatch = useDispatch();
  const DetailData = useSelector((state: RootState) => state.detailView);
  const imageData = useSelector((state: RootState) => state.images.images);

  const onClickPrev = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.stopPropagation();
    e.preventDefault();
    if (DetailData.id > 0) {
      dispatch(prevImages());
    }
  };

  const onClickNext = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.stopPropagation();
    e.preventDefault();
    if (DetailData.id < imageData.length - 1) {
      dispatch(nextImages());
    }
  };

  return (
    <>
      {DetailData.isOpen && (
        <DetailViewContainer>
          <DetailHeader imgUrl={imageData[DetailData.id]._id} />
          <DetailBody>
            {DetailData.id > 0 && (
              <LeftBtn type="button" onClick={onClickPrev}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.707 17.293L8.414 13 18 13 18 11 8.414 11 12.707 6.707 11.293 5.293 4.586 12 11.293 18.707z" />
                </svg>
              </LeftBtn>
            )}
            {DetailData.id < imageData.length - 1 && (
              <RightBtn type="button" onClick={onClickNext}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.293 17.293L12.707 18.707 19.414 12 12.707 5.293 11.293 6.707 15.586 11 6 11 6 13 15.586 13z" />
                </svg>
              </RightBtn>
            )}
            <RoomImage src={imageData[DetailData.id]._id} alt="detailImage" />
          </DetailBody>
        </DetailViewContainer>
      )}
    </>
  );
};

const DetailViewContainer = styled.div`
  background: rgb(255, 255, 255);
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
`;

const DetailBody = styled.div`
  position: relative;
  height: calc(100vh - 56px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(250, 250, 250);
`;

const LeftBtn = styled.button`
  position: absolute;
  top: 50%;
  left: 24px;
  transform: translate(0px, -50%);
  z-index: 1;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  background: rgb(243, 244, 244);
  transition: all 0.32s ease 0s;
  cursor: pointer;

  & svg {
    fill: rgb(56, 62, 68);
  }
`;
const RightBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 24px;
  transform: translate(0px, -50%);
  z-index: 1;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  background: rgb(243, 244, 244);
  transition: all 0.32s ease 0s;
  cursor: pointer;

  & svg {
    fill: rgb(56, 62, 68);
  }
`;

const RoomImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: rgb(250, 250, 250);
`;

export default DetailView;
