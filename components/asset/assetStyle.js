import styled, { css, keyframes } from "styled-components";
const ani = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
export const LoadingWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);

  z-index: 1000;
  & > .container {
    & > svg {
      font-size: 3rem;
      animation: ${ani} 500ms ease-in forwards infinite;
    }
  }
`;
export const QuestionDropWrap = styled.div`
  ${(props) =>
    props.white &&
    css`
      & > div {
        & > input {
          &:checked + label {
            background: #fff !important;
          }
        }
      }
    `}
  & > div {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 9px;
    & > input {
      display: none;
      &:checked + label {
        background: #f0eff4;
        & > svg {
          transform: rotate(180deg);
        }
      }
      &:checked + label + label {
        height: fit-content;
        background: #f0eff4;
        padding: 9px;
      }
    }
    & > .label-click {
      width: 100%;
      padding: 9px;

      display: flex;
      align-items: center;
      /* text-align: left; */
      /* word-break: keep-all; */
      justify-content: space-between;
      box-sizing: border-box;
      font-size: 1rem;
      /* border: 1px solid red; */
      & > span {
        width: calc(100% - 24px);
        font-size: 1rem;
        word-break: keep-all;
      }
      & > svg {
        /* width: 100%; */
        width: 24px;

        & > path {
        }
      }
    }
    & > .text-label {
      display: block;
      /* width: 360px; */

      overflow: hidden;
      height: 0;
      transition: padding 0.2s;
      text-align: left;
      /* padding-bottom: 9px; */
      /* box-sizing: border-box; */
      word-break: keep-all;
      & > span {
        font-size: 0.875rem;
      }
    }
  }
`;

export const CheckInputWrap = styled.div`
  & > input {
    display: none;
    &:checked + label {
      & > div {
        position: relative;
        & > svg {
          position: absolute;
          display: block;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
  & > label {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    & > div {
      width: 18px;
      height: 18px;
      border: 2px solid rgba(0, 0, 0, 0.4);
      margin-right: 11px;
      border-radius: 3px;
      box-sizing: border-box;
      background: #fff;
      & > svg {
        display: none;
      }
    }

    & > span {
      font-size: 0.875rem;
      color: rgba(0, 0, 0, 0.4);
      line-height: 17.53px;
    }
  }
`;
export const StarComponentWrap = styled.div`
  margin: 0 auto;
  position: relative;
  & > button {
    position: absolute;
    top: 23px;
    left: 20px;
    border: 0;
    padding: 0;
    margin: 0;
    color: rgba(255, 255, 255, 0.4);
    font-size: 0.875rem;
    background: none;
  }
  & > .container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: 16px;
    /* padding: 0 20px; */
    /* padding-bottom: 40px; */

    & > .grid2 {
      grid-column: 1/8;
      grid-row: 1/2;
      color: #000;
      text-align: center;
      margin-top: 24px;
      & > span {
        font-size: 0.875rem;
      }
    }
  }
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  & > span {
    margin-bottom: 8px;
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    & > div {
      & > input {
        display: none;
        &:checked + label {
          color: #6100ff;
          & > svg {
            /* border: 1px solid red; */
            &:nth-child(2) {
              display: none;
              /* border: 1px solid blue; */
            }
            &:last-child {
              display: block;
            }
          }
        }
      }
      & > label {
        display: flex;
        align-items: center;
        font-size: 0.875rem;
        & > svg {
          margin-left: 8px;
          &:last-child {
            display: none;
          }
        }
      }
    }
  }
  & > input {
    text-align: center;
    width: 100%;
    box-sizing: border-box;
    min-height: 48px;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.4);
    background: #fff;
    color: #000;
    font-size: 1rem;
    &::-webkit-input-placeholder {
      color: rgba(0, 0, 0, 0.4);
    }
  }
`;

export const RadioInputWrap = styled.div`
  & > input {
    display: none;
    &:checked + label {
      & > div {
        &:after {
          content: "";
          display: block;
          width: 32px;
          height: 32px;
          background: #6100ff;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      & > span {
        color: #000;
      }
    }
  }
  & > label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & > div {
      width: 40px;
      height: 40px;
      min-width: 40px;
      min-height: 40px;
      border-radius: 50%;
      border: 1px solid rgba(0, 0, 0, 0.4);
      position: relative;
    }
    & > span {
      margin-top: 8px;
      color: rgba(0, 0, 0, 0.4);
      font-size: 0.875rem;
    }
  }
`;
