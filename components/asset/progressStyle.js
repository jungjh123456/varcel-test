import styled, { keyframes } from "styled-components";
import { css } from "styled-components";
const progressAni = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 50%;
  }
`;
const progress1Ani = keyframes`
  0% {
    width: 50%;
  }
  100% {
    width: 100%;
  }
`;
const progress2Ani = keyframes`
0% {
    width: 60%;
  }
  100% {
    width: 100%;
  }
`;

const progressAni1 = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 14%;
  }
`;
const progressAni2 = keyframes`
  0% {
    width: 14%;
  }
  100% {
    width: 28%;
  }
`;
const progressAni3 = keyframes`
  0% {
    width: 28%;
  }
  100% {
    width: 42%;
  }
`;
const progressAni4 = keyframes`
  0% {
    width: 42%;
  }
  100% {
    width: 56%;
  }
`;
const progressAni5 = keyframes`
  0% {
    width: 56%;
  }
  100% {
    width: 70%;
  }
`;
const progressAni6 = keyframes`
  0% {
    width: 70%;
  }
  100% {
    width: 84%;
  }
`;
const progressAni7 = keyframes`
  0% {
    width: 84%;
  }
  100% {
    width: 96%;
  }
`;
const progressAni8 = keyframes`
  0% {
    width: 96%;
  }
  100% {
    width: 100%;
  }
`;
export const ProgressWrap = styled.div`
  ${(props) =>
    +props.param === 1 &&
    props.info === "reservation" &&
    css`
      & > div {
        &:after {
          content: "";
          transition: width 1s;
          animation: ${progressAni} 500ms 0s ease-in forwards;
        }
      }
    `}
  ${(props) =>
    +props.param === 2 &&
    props.info === "reservation" &&
    css`
      & > div {
        &:after {
          content: "";
          transition: width 1s;
          animation: ${progress1Ani} 500ms 0s ease-in forwards;
        }
      }
    `}
 ${(props) =>
    +props.param === 1 &&
    props.info === "application" &&
    css`
      & > div {
        &:after {
          content: "";
          transition: width 1s;
          animation: ${progressAni1} 500ms 0s ease-in forwards;
        }
      }
    `}
     ${(props) =>
    +props.param === 2 &&
    props.info === "application" &&
    css`
      & > div {
        &:after {
          content: "";
          transition: width 1s;
          animation: ${progressAni2} 500ms 0s ease-in forwards;
        }
      }
    `}
      ${(props) =>
    +props.param === 3 &&
    props.info === "application" &&
    css`
      & > div {
        &:after {
          content: "";
          transition: width 1s;
          animation: ${progressAni3} 500ms 0s ease-in forwards;
        }
      }
    `}
        ${(props) =>
    +props.param === 4 &&
    props.info === "application" &&
    css`
      & > div {
        &:after {
          content: "";
          transition: width 1s;
          animation: ${progressAni4} 500ms 0s ease-in forwards;
        }
      }
    `}
   ${(props) =>
    +props.param === 5 &&
    props.info === "application" &&
    css`
      & > div {
        &:after {
          content: "";
          transition: width 1s;
          animation: ${progressAni5} 500ms 0s ease-in forwards;
        }
      }
    `}
            ${(props) =>
    +props.param === 6 &&
    props.info === "application" &&
    css`
      & > div {
        &:after {
          content: "";
          transition: width 1s;
          animation: ${progressAni6} 500ms 0s ease-in forwards;
        }
      }
    `}
  ${(props) =>
    +props.param === 7 &&
    props.info === "application" &&
    css`
      & > div {
        &:after {
          content: "";
          transition: width 1s;
          animation: ${progressAni7} 500ms 0s ease-in forwards;
        }
      }
    `}
     ${(props) =>
    +props.param === 8 &&
    props.info === "application" &&
    css`
      & > div {
        &:after {
          content: "";
          transition: width 1s;
          animation: ${progressAni8} 500ms 0s ease-in forwards;
        }
      }
    `}
  & > div {
    width: 100%;
    height: 4px;

    background: rgba(0, 0, 0, 0.2);
    border-radius: 28px;
    position: relative;
    box-sizing: border-box;
    margin-bottom: 8px;
    &:after {
      content: "";
      position: absolute;
      display: block;
      left: 0;
      top: 50%;
      width: 0;
      transform: translateY(-50%);
      box-sizing: border-box;
      height: 5px;

      background: #6100ff;
      border-radius: 28px;
    }
  }
  & > span {
    font-size: 0.75rem;
    color: rgba(0, 0, 0, 0.4);
  }
`;
