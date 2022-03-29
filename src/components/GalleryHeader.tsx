import React from 'react';
import styled from '@emotion/styled';

interface GalleryHeaderProps {
  count: number;
}

const GalleryHeader: React.FC<GalleryHeaderProps> = ({ count }) => {
  return (
    <Header>
      <RenderCount>{count} 개의 렌더샷</RenderCount>
      <Title>갤러리</Title>
      <SelectBox></SelectBox>
    </Header>
  );
};

const Header = styled.div`
  display: flex;
  width: 100%;
  height: 64px;
  flex-wrap: no-wrap;
  align-items: center;
  padding: 0 12px;
  font-size: 14px;
  color: rgb(153, 153, 153);
`;
const RenderCount = styled.span`
  flex: 1 1 0;
  margin-right: auto;
  color: rgb(102, 102, 102);
  text-transform: lowercase;
  text-align: left;
`;
const Title = styled.div`
  flex: 1 1 0;
  position: relative;
  text-align: center;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 56px;
  text-transform: capitalize;
  color: rgb(45, 50, 54);
  user-select: none;
`;
const SelectBox = styled.div`
  flex: 1 1 0;
`;

export default GalleryHeader;
