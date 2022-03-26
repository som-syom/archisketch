import React from 'react';
import styled from '@emotion/styled';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <CloseBtn>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M16.192 6.344l-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z" />
        </svg>
      </CloseBtn>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: relative;
  width: 100vw;
  height: 48px;
  background: rgba(255, 255, 255, 0.8);
  border-bottom: 1px solid rgba(235, 235, 235, 0.8);
  display: flex;
  padding: 8px;
  min-width: 1024px;
  box-sizing: border-box;
`;

const CloseBtn = styled.button`
  position: relative;
  box-sizing: border-box;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  border: none;
  border-radius: 4px;
  appearance: none;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 12px;
  text-align: center;
  fill: rgb(75, 75, 75);
  color: rgb(75, 75, 75);
  background: rgba(238, 238, 238, 0.8);
  transition: background-color 0.16s ease 0s, color 0.16s ease 0s;
  cursor: pointer;
`;

export default Header;
