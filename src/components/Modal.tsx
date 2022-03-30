import React from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../store/actions/modal';
import { RootState } from '../store/reducers';
import { deleteImages } from '../store/actions/images';

const Modal: React.FC = () => {
  const dispatch = useDispatch();
  const selected = useSelector((state: RootState) => state.selected.id);
  const DetailData = useSelector((state: RootState) => state.detailView);

  const onClickCancel = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(toggleModal());
  };

  const onClickDelete = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    e.preventDefault();
    if (DetailData.isOpen) {
      dispatch(deleteImages([DetailData.id]));
    } else {
      dispatch(deleteImages([...selected]));
    }
    dispatch(toggleModal());
  };

  return (
    <ModalContainer>
      <ModalBox>
        <ModalImageWrap>
          <ModalImage
            src="https://resources.archisketch.com/editor/assets_test/img/pop-up/gallery_delete@2x.gif"
            alt="deleteImage"
          />
        </ModalImageWrap>
        <ModalText>
          <br />
          <Title>
            {selected.length > 1
              ? `${selected.length} 개의 이미지가 선택되었습니다`
              : '확인'}
          </Title>
          <SubTitle>
            <br />
            정말 이 이미지{selected.length > 1 ? '들을' : '를'}{' '}
            삭제하시겠습니까?
          </SubTitle>
        </ModalText>
        <ModalBtnWrap>
          <ModalBtn onClick={onClickDelete}>삭제</ModalBtn>
          <ModalBtn onClick={onClickCancel}>돌아가기</ModalBtn>
        </ModalBtnWrap>
      </ModalBox>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  z-index: 10000;
  background: rgba(0, 0, 0, 0.72);
`;

const ModalBox = styled.div`
  position: absolute !important;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 440px;
  height: 530px;
  box-shadow: 0px 2px 32px rgb(22 65 76 / 8%);
  background: #fdfdfd;
  border-radius: 16px;
`;

const ModalImageWrap = styled.div`
  width: 440px;
  border-radius: 16px 16px 0 0;
`;

const ModalImage = styled.img`
  width: 440px;
  height: 220px;
  border-radius: 16px 16px 0 0;
  background: #6db2c5;
`;

const ModalText = styled.div`
  margin: 24px auto;
  text-align: center;
`;
const Title = styled.h5`
  user-select: none;
  color: #2b2b2b;
  margin-bottom: 8px;
  white-space: pre-line;
`;
const SubTitle = styled.span`
  user-select: none;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
  font-weight: 300;
  color: #8b8b8b;
  text-transform: none;
  white-space: pre-line;
`;

const ModalBtnWrap = styled.div`
  position: absolute !important;
  bottom: 24px;
`;
const ModalBtn = styled.button`
  width: 392px;
  height: 48px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.1px;
  user-select: none;
  margin: auto 24px;
  border: 0;
  border-radius: 4px;
  text-transform: uppercase;
  line-height: 48px !important;

  &:first-of-type {
    background: #6db2c5;
    margin-bottom: 14px !important;
    color: #fbfbfb;
    cursor: pointer;
    &:hover {
      background: #93c4d3;
    }
  }
  &:last-of-type {
    background: #fff;
    color: #6db2c5;
    cursor: pointer;
    &:hover {
      background: #f9f9f9;
    }
  }
`;

export default Modal;
