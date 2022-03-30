import React from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { offDetailView } from '../store/actions/detailView';
import { deleteImages } from '../store/actions/images';
import { toggleModal } from '../store/actions/modal';

const DetailHeader: React.FC<{ imgUrl: string; id: number }> = ({
  imgUrl,
  id,
}) => {
  const dispatch = useDispatch();

  const onClickClose = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(offDetailView());
  };

  const onClickDownload = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.stopPropagation();
    e.preventDefault();
    axios({
      url: decodeURIComponent(imgUrl),
      method: 'GET',
      responseType: 'blob',
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${imgUrl.split('/').pop()}`);
      document.body.appendChild(link);
      link.click();
    });
  };

  const onClickDelete = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(toggleModal());
    // dispatch(deleteImages([id]));
  };

  return (
    <Header>
      <CloseBtn onClick={onClickClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          viewBox="0 0 24 24"
        >
          <path d="M16.192 6.344l-4.243 4.242l-4.242-4.242l-1.414 1.414L10.535 12l-4.242 4.242l1.414 1.414l4.242-4.242l4.243 4.242l1.414-1.414L13.364 12l4.242-4.242z" />
        </svg>
      </CloseBtn>
      <RightMenu>
        <DownloadBtn onClick={onClickDownload}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            viewBox="0 0 24 24"
            width="18px"
            height="18px"
          >
            <path d="M12 16l4-5h-3V4h-2v7H8z" />
            <path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z" />
          </svg>
          <span>다운로드</span>
        </DownloadBtn>
        <DeleteBtn onClick={onClickDelete}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="18px"
            height="18px"
          >
            <path
              fill="none"
              d="M17.004 20l-.001-12h-10v12h10.001zm-4.001-10h2v8h-2v-8zm-4 0h2v8h-2v-8zm0-6h6v2h-6z"
            />
            <path d="M5.003 20c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V8h2V6h-4V4c0-1.103-.897-2-2-2h-6c-1.103 0-2 .897-2 2v2h-4v2h2v12zm4-16h6v2h-6V4zm-1 4h9l.001 12H7.003V8h1z" />
            <path d="M9.003 10h2v8h-2zm4 0h2v8h-2z" />
          </svg>
        </DeleteBtn>
      </RightMenu>
    </Header>
  );
};

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 56px;
  align-items: center;
  border-bottom: 1px solid rgb(219, 219, 219);
  z-index: 1000;
`;

const CloseBtn = styled.button`
  margin-left: 16px;
  z-index: 1;
  width: 32px;
  height: 32px;
  padding: 8px;
  border-radius: 4px;
  display: inline-block;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  background: rgb(243, 244, 244);
  transition: all 0.32s ease 0s;
  cursor: pointer;
  & svg {
    fill: rgb(91, 91, 91);
  }
`;

const RightMenu = styled.div`
  margin-right: 10px;
  color: rgb(75, 75, 75);
  font-weight: 700;
  display: flex;
  align-items: center;
`;

const DownloadBtn = styled.button`
  display: inline-block;
  height: 32px;
  padding: 8px;
  border-radius: 4px;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  background: rgb(243, 244, 244);
  transition: all 0.32s ease 0s;
  cursor: pointer;

  & span {
    display: inline-block;
    line-height: 18px;
    float: right;
    font-size: 14px;
    font-weight: 500;
    color: rgb(75, 75, 75);
    margin-left: 8px;
  }
`;
const DeleteBtn = styled.button`
  display: inline-block;
  height: 32px;
  padding: 8px;
  border-radius: 4px;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  background: rgb(243, 244, 244);
  transition: all 0.32s ease 0s;
  cursor: pointer;
`;

export default DetailHeader;
