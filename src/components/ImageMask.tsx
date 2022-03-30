import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { onDetailView } from '../store/actions/detailView';
import { RootState } from '../store/reducers';
import { toggleCheckbox } from '../store/actions/selected';

const ImageMask: React.FC<{ id: number }> = ({ id }) => {
  const dispatch = useDispatch();
  const [isToggleMenu, setIsToggleMenu] = useState<boolean>(false);
  const isChecked = useSelector(
    (state: RootState) => state.selected.id
  ).includes(id);
  const checkboxRef = useRef<HTMLInputElement>(null);

  const onClickImage = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    e.stopPropagation();
    e.preventDefault();
    if (e.target !== checkboxRef.current) dispatch(onDetailView(id));
  };

  const onChangeCheckbox = (): void => {
    setTimeout(() => {
      dispatch(toggleCheckbox(id));
    }, 0);
  };

  const onClickMenu = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.stopPropagation();
    e.preventDefault();
    setIsToggleMenu(!isToggleMenu);
  };

  return (
    <Mask onClick={onClickImage}>
      <CheckBox>
        <CheckBoxInner>
          <input
            type="checkbox"
            ref={checkboxRef}
            checked={isChecked ? true : false}
            onChange={onChangeCheckbox}
          />
        </CheckBoxInner>
      </CheckBox>
      <Menu type="button" onClick={onClickMenu}>
        <MenuInner>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="ellipsis"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z" />
          </svg>
        </MenuInner>
      </Menu>
    </Mask>
  );
};

const Mask = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background-color: rgba(75, 79, 84, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  // visibility: hidden;
  opacity: 0;

  &:hover {
    // visibility: visible;
    opacity: 1;
  }
`;

const CheckBox = styled.label`
  position: absolute;
  top: 15px;
  left: 15px;
  line-height: 20px;
`;

const CheckBoxInner = styled.span`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  position: relative;
  top: -0.09em;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  vertical-align: middle;
  outline: none;
  cursor: pointer;

  & input {
    // position: absolute;
    // top: 0;
    // left: 0;
    // width: 100%;
    // height: 100%;
  }
`;

const Menu = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  color: rgb(255, 255, 255);
  border: none;
  background-color: transparent;
  width: 32px;
  height: 32px;
  padding: 2.4px 0;
  font-size: 16px;
  border-radius: 2px;
  line-height: 1.5715;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;
  touch-action: manipulation;
`;

const MenuInner = styled.span`
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
`;

export default React.memo(ImageMask);
