import styled, { keyframes } from "styled-components";

export const Mainsection1Wrap = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;

  box-sizing: border-box;

  position: relative;
  & > .container {
    margin-top: 116px;
    display: flex;
    flex-direction: column;
    /* padding-bottom: 10px; */
    align-items: center;
    justify-content: space-between;
    height: 100%;

    & > div {
      text-align: center;
      & > .heading {
        font-size: 1.5rem;
        font-weight: 700;
        display: block;
        margin-bottom: 34px;
        & > span {
          color: #6100ff;
        }
      }
      & > .heading-wrap {
        font-size: 1.5rem;
        font-weight: 700;
      }
      & > .img-wrap {
        margin-bottom: 16px;
      }
      & > .sub_title {
        display: flex;
        flex-direction: column;
        & > span {
          font-size: 1rem;
          & > span {
            color: #6100ff;
          }
        }
      }
      & > h1 {
        font-size: 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 16px;
      }
      & > span {
        font-size: 1rem;
      }
    }

    & > .img-wrap {
      /* width: 100%;
    padding-bottom: 50%; */
      /* border: 1px solid red; */
      & > img {
        max-width: 360px;
      }
      & > span {
      }
    }

    & > .btn-group {
      /* padding: 0 20px; */
      /* box-sizing: border-box; */
      /* position: absolute; */
      width: 100%;
      /* max-width: 360px; */
      /* bottom: 20px; */
      position: relative;

      & > div {
        position: absolute;
        left: 20px;
        right: 20px;
        bottom: 30px;
        & > button {
          display: block;
          background: #6100ff;
          width: 100%;
          box-sizing: border-box;
          /* max-width: 650px; */
          min-height: 48px;
          border-radius: 8px;
          color: #fff;
          font-size: 1rem;
          padding: 14px 16px;
        }
      }
    }
  }
`;

export const Mainsection2Wrap = styled.section`
  /* @media only screen and (max-width: 768px) { */
  /* border: 1px solid red; */
  /* min-height: 1081px; */
  /* max-height: 1081px; */
  background: #fff;
  & > .container {
    width: 100%;

    padding-bottom: 80px;
    /* box-sizing: border-box; */
    padding: 0 20px;
    box-sizing: border-box;
    height: 100%;

    /* justify-content: space-around; */
    margin-top: 80px;
    & > .heading-text {
      margin-bottom: 60px;

      & > h2 {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 24px;
        box-sizing: border-box;
        & > span {
          font-size: 1.5rem;
          font-weight: 700;
          & > span {
            color: #6100ff;
          }
        }
      }
    }

    & > .tab-menu {
      display: flex;
      width: 100%;
      justify-content: space-around;
      box-sizing: border-box;
      margin-top: 24px;
      margin-bottom: 24px;
      & > input {
        display: none;
        &:checked + label {
          border-bottom: 2px solid #6100ff;
          & > span {
            color: #000;
          }
        }
      }
      & > label {
        display: flex;

        flex-direction: column;
        box-sizing: border-box;
        & > span {
          margin-top: 8px;
          margin-bottom: 8px;
          font-size: 1rem;
        }
      }
    }
    & > .teach-info {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: center;
      /* margin-top: -50px; */
      & > .info_text {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        min-width: 320px;
        margin-bottom: 40px;
        padding: 0 20px;
        box-sizing: border-box;
        & > div {
          width: 100%;
          background: #f0eff4;
          min-height: 48px;
          border: 1px solid rgba(0, 0, 0, 0.4);
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 16px;
          padding: 14px 16px;
          box-sizing: border-box;
          border-radius: 8px;
          & > span {
            font-size: 1rem;
          }
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
      & > .plus-btn {
        & > a {
          display: flex;
          align-items: center;
          text-decoration: none;
          & > span {
            margin-right: 16px;
          }
        }
      }
    }
    & > .homeTeaching_wrap {
      margin-bottom: 82px;
      & > div {
        margin-top: 20px;
        & > div {
          margin-top: 16px;
          text-align: center;
          & > span {
            word-break: keep-all;
            font-size: 0.875rem;
          }
        }
      }
    }
  }
  /* } */
`;
const animation = keyframes`
   0% {
      transform: translateY(3em);
      opacity: 0;
   
  }
  20% {
      /* transform: translateY(0); */
      opacity: 0.5;
     
  }
  80% {
       /* transform: translateY(0); */
       opacity: 0.8;
 
  }
  100% {
       transform: translateY(0);
       opacity: 1;
   
    
  }
`;
export const MainSection3Wrap = styled.section`
  /* @media only screen and (max-width: 768px) { */
  /* border: 1px solid red; */
  /* min-height: 1081px; */
  /* max-height: 1081px; */
  background: #f0eff4;
  & > .container {
    width: 100%;

    /* box-sizing: border-box; */
    padding: 0 20px;
    padding-bottom: 80px;
    box-sizing: border-box;
    height: 100%;
    padding-top: 80px;
    & > span {
      font-size: 0.75rem;
      color: #000;
      opacity: 0;
      transform: translateY(3em);
      &.active {
        animation: ${animation} 1s 500ms forwards;
        /* animation-delay: 500ms; */
      }
    }
    & > h2 {
      display: flex;
      flex-direction: column;
      margin-top: 16px;
      font-size: 1.5rem;
      margin-bottom: 60px;
      &.active {
        & > span {
          transform: translateY(3em);
          opacity: 0;
          &:first-child {
            animation: ${animation} 1s 500ms forwards;
            animation-delay: 300ms;
          }
          &:last-child {
            animation: ${animation} 1s 500ms forwards;
            /* animation-delay: 300ms; */
          }
          & > span {
            color: #6100ff;
          }
        }
      }
      & > span {
        transform: translateY(3em);
        opacity: 0;

        & > span {
          color: #6100ff;
        }
      }
    }
    & > .hakwi_wrap {
      opacity: 0;
      &.active {
        animation: ${animation} 1s 500ms forwards;
        animation-delay: 600ms;
      }
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-bottom: 24px;
      & > .line {
        width: 2px;
        height: 50px;
        /* height: 100%; */
        background: rgba(0, 0, 0, 0.2);
      }
      & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        & > div {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
    }
    & > .img-wrap {
      opacity: 0;
      &.active {
        animation: ${animation} 1s 500ms forwards;
        animation-delay: 700ms;
      }
    }
    & > .btn-group {
      display: flex;
      flex-direction: column;
      opacity: 0;
      transform: translateY(3em);
      &.active {
        animation: ${animation} 1s 500ms forwards;
        animation-delay: 600ms;
      }
      & > a {
        min-height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 16px;
        &:last-child {
          margin-bottom: 0;
        }
        & > svg {
          margin-right: 8px;
        }
        text-decoration: none;
        background: #ffffff;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
      }
    }
  }
`;
export const MainSection4Wrap = styled.section`
  width: 100%;

  /* min-height: 520px; */
  /* padding-bottom: 40%; */
  /* background-size: cover; */
  /* max-width: 768px; */
  /* padding-bottom: 50px; */
  background: #fff;
  & > .container {
    padding: 0 20px;
    padding-bottom: 80px;
    box-sizing: border-box;
    & > h1 {
      font-size: 0.875rem;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.4);
      text-align: center;
      /* margin-top: 80px; */
    }
    & > .reason-text {
      display: flex;
      margin-top: 80px;
      flex-direction: column;
      align-items: center;
      & > span {
        font-weight: 700;
        font-size: 1.5rem;
        & > span {
          color: #6100ff;
        }
      }
      /* margin-top: 24px; */
      margin-bottom: 60px;
    }
    & > .img-wrap {
      /* height: 500px; */
      /* display: flex; */
      /* flex-wrap: wrap; */
      /* width: 100%; */
      /* justify-content: center;
      align-items: center; */
      /* gap: 14px; */

      & > a {
        /* display: flex; */
        display: block;
        text-align: center;
        background: #ffffff;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        border-radius: 12px;
        margin-bottom: 24px;
        flex-direction: column;
        align-items: center;
        /* min-height: 320px; */
        margin-bottom: 14px;
        padding: 24px 20px 0;
        box-sizing: border-box;
        text-decoration: none;
        color: #000;
        & > h1 {
          font-size: 1.25rem;
          margin-bottom: 8px;
        }
        & > span {
          font-size: 0.875rem;
          word-break: keep-all;
        }
        & > .go_text {
          margin-top: 24px;
          margin-bottom: 17px;
          display: flex;
          justify-content: center;
          align-items: center;
          & > svg {
            margin-left: 8px;
          }
        }
        /* width: 320px; */
      }
    }
  }
`;

export const MainSection5Wrap = styled.section`
  width: 100%;

  /* min-height: 520px; */
  /* padding-bottom: 40%; */
  /* background-size: cover; */
  /* max-width: 768px; */
  /* padding-bottom: 50px; */
  overflow: hidden;
  background: #f0eff4;
  & > .container {
    padding: 0 20px;
    padding-bottom: 80px;
    box-sizing: border-box;
    min-height: 1768px;
    max-height: 1768px;
    height: 768px;
    & > h2 {
      font-size: 0.875rem;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.4);
      text-align: center;
      margin-top: 80px;
    }
    & > .reason-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      & > span {
        font-weight: 700;
        font-size: 1.5rem;
        word-break: keep-all;
        & > span {
          word-break: keep-all;
          color: #6100ff;
        }
      }
      margin-top: 24px;
      margin-bottom: 60px;
    }
    position: relative;
    overflow: hidden;
    min-height: 704px;
    & > .slider {
      width: 100%;
      min-height: 360px;
      position: absolute;
      padding-right: 20px;
      box-sizing: border-box;
      & > div {
        /* padding-bottom: 40%; */
        display: inline-flex;
        /* flex-wrap: wrap; */
        /* justify-content: center; */
        /* align-items: center; */
        overflow-x: scroll;
        width: 100%;
        padding-bottom: 20px;
        box-sizing: border-box;
        &::-webkit-scrollbar {
          /* width: 1.2px !important; */
        }
        &::-webkit-scrollbar-thumb {
          background-color: #2f3542;
        }
        &::-webkit-scrollbar-track {
          background-color: grey;
        }
        & > div {
          width: 100%;
          min-width: 264px;
          margin-right: 16px;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 8px 8px 0px 0px;
          background: #fff;
          & > .img-wrap {
          }
          & > .text-title {
            /* border-bottom: 2px solid #6100ff; */
            /* height: calc(360px - 254px); */
            border-top: 2px solid #f0eff4;
            display: flex;
            flex-direction: column;
            padding: 16px 16px;
            & > span {
              font-size: 0.875rem;
              margin-bottom: 8px;
              &:first-child {
                font-size: 1rem;
                font-weight: 700;
              }
              &:last-child {
                margin-bottom: 0;
              }
            }
          }

          & > img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    & > .go_text {
      position: absolute;
      bottom: 80px;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      & > a {
        display: flex;
        align-items: center;
        color: #000;
        text-decoration: none;
      }
    }
  }
`;
const animate = keyframes`
  100% {
     transform: translateY(-350%);
  }

  80% {
     transform: translateY(-250%);
  }

  60% {
     transform: translateY(-150%);
  }
 
  40% {
     transform: translateY(-50%);
  }

  20% {
    opacity: 1;
     transform: translateY(100%);
  }
 
  0% {
    opacity: 0;
     transform: translateY(250%);
  }
`;
export const MainSection6Wrap = styled.section`
  width: 100%;

  /* min-height: 520px; */
  /* padding-bottom: 40%; */
  /* background-size: cover; */
  /* max-width: 768px; */
  /* padding-bottom: 50px; */
  overflow: hidden;
  background: #f0eff4;
  & > .container {
    padding: 0 20px;
    padding-bottom: 80px;
    box-sizing: border-box;
    margin-top: 80px;

    & > h2 {
      font-size: 0.875rem;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.4);
      text-align: center;
    }
    & > .reason-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      & > span {
        font-weight: 700;
        font-size: 1.5rem;
        & > span {
          color: #6100ff;
        }
      }
      margin-top: 24px;
      margin-bottom: 60px;
    }
    overflow: hidden;
    & > .card {
      width: 100%;

      /* max-height: 543px; */
      overflow: hidden;
    }
    & > .plus-btn {
      display: flex;
      justify-content: center;
      margin-top: 40px;
      & > a {
        display: flex;
        align-items: center;
        text-decoration: none;
        & > span {
          margin-right: 16px;
        }
      }
    }
  }
`;
export const MainSectionNew7Wrap = styled.section`
  background: #004444;
  & > .container {
    text-align: center;
    margin-top: 80px;
    padding: 0 20px;
    padding-bottom: 80px;
    & > h2 {
      display: flex;
      flex-direction: column;
      font-size: 1.5rem;
      margin-bottom: 16px;
      & > span {
        color: #fff;
        &:last-child {
          /* color: #6100ff; */
        }
      }
    }
    & > span {
      font-size: 1rem;
      color: #fff;
      & > span {
      }
    }
    & > div {
      margin-top: 60px;
      & > span {
        display: block;
        font-size: 1rem;
        color: #fff;
        font-weight: 700;
        margin-bottom: 16px;
      }
    }
    & > .list-wrap {
      margin-top: 0;
      margin-top: 80px;
      & > div {
        /* White */

        background: #ffffff;
        border-radius: 8px;
        min-height: 72px;
        display: flex;
        margin-bottom: 16px;
        &:last-child {
          margin-bottom: 0;
        }
        & > h3 {
          min-width: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.5rem;
          font-weight: 700;
        }
        & > div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          margin-left: 12px;
          & > span {
            font-size: 1rem;
          }
        }
      }
    }
    & > .go_text {
      margin-top: 40px;
      /* margin-bottom: 17px; */
      display: flex;
      justify-content: center;
      align-items: center;
      & > a {
        text-decoration: none;
        display: flex;
        align-items: center;
        color: #fff;
        & > span {
          font-size: 1rem;
        }
        & > svg {
          margin-left: 8px;
        }
      }
    }
  }
`;
export const MainSectionNew8Wrap = styled.section`
  background: #f0eff4;
  position: relative;
  & > .container {
    margin-top: 80px;
    padding: 0 20px;
    text-align: center;
    padding-bottom: 80px;
    & > img {
      position: absolute;
      top: -30px;
      left: 50%;

      width: 60px;
      transform: translateX(-50%) rotate(45deg);
    }
    & > h2 {
      display: flex;
      flex-direction: column;
      font-size: 1.5rem;
      margin-bottom: 16px;
      & > span {
        &:last-child {
          color: #6100ff;
        }
      }
    }
    & > .home_study-list {
      & > div {
        background: #ffffff;
        border-radius: 8px;
        min-height: 72px;
        display: flex;
        align-items: center;
        margin-bottom: 16px;
        &:last-child {
          margin-bottom: 0;
        }
        & > h3 {
          /* width: calc(100% - 72px); */
          min-width: 72px;
          display: flex;
          justify-content: center;
          align-items: center;
          /* flex-shrink: 1; */
          font-size: 1.5rem;
          font-weight: 700;
          color: #6100ff;
        }
        & > div {
          /* flex-shrink: 2; */
          display: flex;
          flex-direction: column;
          /* justify-content: flex-start; */
          align-items: flex-start;
          & > span {
            font-size: 1rem;
          }
        }
      }
    }
    & > .go_text {
      margin-top: 40px;
      /* margin-bottom: 17px; */
      display: flex;
      justify-content: center;
      align-items: center;
      & > a {
        text-decoration: none;
        display: flex;
        align-items: center;
        color: #000;
        & > span {
          font-size: 1rem;
        }
        & > svg {
          margin-left: 8px;
        }
      }
    }
  }
`;

export const MainSectionNew9Wrap = styled.section`
  width: 100%;

  background: #fff;

  padding-top: 116px;

  padding-bottom: 60px;
  box-sizing: border-box;
  & > .container {
    padding: 0 20px;
    box-sizing: border-box;
    position: relative;
    & > h1 {
      text-align: center;
      font-size: 1.5rem;
      & > span {
        color: #6100ff;
      }
    }
    & > .children_wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 24px;
      margin-bottom: 40px;
      & > span {
        font-size: 1rem;
      }
    }
    /* position: relative; */
    & > .slick_list {
      /* border: 1px solid red; */
      /* border: 1px solid red; */
      /* position: absolute; */
      position: relative;
      /* min-height: 460px; */
      & > div {
        /* border: 1px solid red; */
        & > div {
          /* border: 1px solid red; */
        }
      }
    }
    & > .go_text {
      margin-top: 40px;
      /* margin-bottom: 17px; */
      display: flex;
      justify-content: center;
      align-items: center;
      & > a {
        text-decoration: none;
        display: flex;
        align-items: center;
        color: #000;
        & > span {
          font-size: 1rem;
        }
        & > svg {
          margin-left: 8px;
        }
      }
    }
  }
`;
export const MainQuestionWrap = styled.section`
  width: 100%;

  background: #f0eff4;

  padding-top: 80px;

  padding-bottom: 60px;
  box-sizing: border-box;
  & > .container {
    padding: 0 20px;
    box-sizing: border-box;
    position: relative;
    & > h2 {
      text-align: center;
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 60px;
    }
  }
`;
export const MainSection7wrap = styled.section`
  width: 100%;

  /* min-height: 520px; */
  /* padding-bottom: 40%; */
  /* background-size: cover; */
  /* max-width: 768px; */
  /* padding-bottom: 50px; */
  overflow: hidden;
  background: #fff;
  & > .container {
    padding: 0 20px;
    padding-bottom: 80px;
    box-sizing: border-box;
    & > h2 {
      font-size: 0.875rem;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.4);
      text-align: center;
      margin-top: 80px;
    }
    & > .reason-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      & > span {
        font-weight: 700;
        font-size: 1.5rem;
        & > span {
          color: #6100ff;
        }
      }
      margin-top: 24px;
      margin-bottom: 40px;
    }
    & > .img-wrap {
      /* padding: 0 76px; */
      margin-top: 80px;
      box-sizing: border-box;
    }
    & > .btn-group {
      margin-top: 60px;
      & > button {
        min-height: 48px;
        background: #6100ff;
        width: 100%;
        border-radius: 8px;
        color: #fff;
        font-size: 1rem;
      }
    }
  }
`;
