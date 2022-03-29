import React from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import DetailHeader from './DetailHeader';

const DetailView: React.FC = () => {
  const DetailData = useSelector((state: RootState) => state.detailView);

  return (
    <>
      {DetailData.isOpen && (
        <DetailViewContainer>
          <DetailHeader />
          <DetailBody>
            <LeftBtn></LeftBtn>
            <RightBtn></RightBtn>
            {/* <RoomImage src={} /> */}
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

const LeftBtn = styled.button``;
const RightBtn = styled.button``;
const RoomImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: rgb(250, 250, 250);
`;

export default DetailView;
