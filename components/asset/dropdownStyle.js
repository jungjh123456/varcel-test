import styled, { css } from "styled-components";

export const DropDownWrap = styled.div`
  position: relative;
  width: 100%;
  /* z-index: 200; */
  ${(props) => {
    return css`
      & > div {
        z-index: ${props.Zindex};
      }
    `;
  }}
  & > input {
    display: none;
    &:disabled + label {
      color: rgba(0, 0, 0, 0.4);
    }
    &:checked + label + div {
      overflow: unset;
      width: 100%;
      min-height: 100px;
      height: unset;
      /* position: relative; */
      /* z-index: 3000; */
      display: flex;
    }
  }
  & > label {
    display: flex;
    min-height: 48px;
    justify-content: center;
    align-items: center;
    font-size: 1.125rem;
    color: rgba(0, 0, 0, 0.2);
    line-height: 18px;
    /* background: #eff4ff; */
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 8px;
    position: relative;
    width: 100%;
    background: #fff;
    /* z-index: 100; */
    padding: 16px;
    box-sizing: border-box;
    text-align: center;
    /* word-break: keep-all; */
    & > svg {
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
    }
    &.active {
      color: #000;
    }
  }
  & > div {
    position: absolute;
    /* top: 0; */
    display: none;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.4);
    /* border: 1px solid red; */
    /* border-radius: 8px; */
    /* z-index: 200; */
    height: 0;
    overflow: hidden;
    left: 0;
    right: 0;
    /* border: 1px solid red; */
    top: 45px;
    /* z-index: -10; */
    /* border: 1px solid red; */

    & > svg {
      position: absolute;
      top: -10px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 100;
    }
    /* padding: 10px 0; */
    box-sizing: border-box;
    & > div {
      /* overflow: hidden; */
      /* height: 0; */
      width: 100%;

      /* z-index: 100; */
      & > label {
        font-size: 1.125rem;
        font-weight: 400;
        color: rgba(0, 0, 0);

        /* margin-bottom: 8px; */
        height: 48px;
        display: flex;
        border-bottom: 2px solid rgba(0, 0, 0, 0.4);
        justify-content: center;
        background: #fff;
        align-items: center;
        cursor: pointer;
        &:last-child {
          border-bottom: 0;
        }
        &:hover {
          background: gray;
        }
      }
    }
  }
`;
