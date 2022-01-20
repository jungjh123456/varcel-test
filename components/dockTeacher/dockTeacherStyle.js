import styled from "styled-components";

export const DockTeacherSection1wrap = styled.section`
  width: 100%;
  /* margin: 0 auto; */
  /* display: flex; */
  /* flex-direction: column; */

  background: #f0eff4;

  /* height: 100vh; */
  /* max-height: 640px; */

  width: 100%;

  display: flex;
  flex-direction: column;

  background: #fff;

  & > .container {
    margin-top: 116px;
    /* display: flex; */
    flex-direction: column;
    /* padding: 0 20px; */
    box-sizing: border-box;
    align-items: center;

    height: 100%;
    & > h1 {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 1.5rem;
      & > span {
        & > span {
          color: #6100ff;
        }
      }
    }
    & > .teacher_text {
      /* margin-top: 16px; */
      margin-bottom: 16px;
      text-align: center;
      word-break: keep-all;
      & > span {
        font-size: 1rem;
      }
    }
    & > .btn-group {
      margin-top: 40px;
      /* padding: 0 20px; */
      position: relative;
      & > .img-wrap {
        /* width: 100%;
    padding-bottom: 50%; */
        /* border: 1px solid red; */
        /* border: 1px solid red; */
      }
      & > div {
        text-align: center;
        & > button {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          /* left: 20px; */
          /* right: 20px; */
          /* box-sizing: border-box; */
        }
      }
    }
  }
`;

export const DockTeacherSection2wrap = styled.section`
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
    /* min-height: 1768px; */
    /* max-height: 1768px; */
    /* height: 768px; */
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

export const DockTeacherSection3wrap = styled.section``;
export const DockTeacherSection4wrap = styled.section`
  width: 100%;

  /* min-height: 520px; */
  /* padding-bottom: 40%; */
  /* background-size: cover; */
  /* max-width: 768px; */
  /* padding-bottom: 50px; */
  overflow: hidden;
  background: #fff;
  & > .container {
    padding-bottom: 80px;
    box-sizing: border-box;
    text-align: center;
    & > h2 {
      font-size: 1.5rem;
      padding: 0 20px;

      font-weight: 700;
      text-align: center;
      margin-top: 80px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 60px;
      & > span {
        &:last-child {
          color: #6100ff;
        }
      }
    }
    & > .tab_list {
      margin-top: 38.82px;
      margin-bottom: 24px;
      padding: 0 20px;

      & > input {
        display: none;
        &:checked + label {
          border-bottom: 2px solid #6100ff;
          & > span {
            color: #000;
          }
        }
      }
      display: flex;
      justify-content: space-around;
      & > label {
        display: flex;
        flex-direction: column;

        align-items: center;
        padding-bottom: 8px;
        & > span {
          color: rgba(0, 0, 0, 0.4);
          &:first-child {
            font-size: 1.5rem;
            margin-bottom: 8px;
          }
          &:last-child {
            font-size: 1rem;
          }
        }
      }
    }
    & > .list_wrap {
      padding: 0 20px;

      & > div {
        background: #f0eff4;
        /* Black */
        min-height: 48px;
        border: 1px solid #000000;
        box-sizing: border-box;
        margin-bottom: 16px;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        font-size: 1rem;
        align-items: center;
      }
    }
  }
`;
export const DockTeacherSectionNew5Wrap = styled.section`
  min-height: 770px;
  background: #f4f4f4;
  & > .container {
    margin-top: 80px;
    padding: 0 28px;
    padding-bottom: 80px;
    & > h2 {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 60px;
      font-size: 1.5rem;
      & > span {
        &:last-child {
          color: #6100ff;
        }
      }
    }
    & > .review-wrap {
      min-height: 495px;
      /* background: #fff;
      display: flex;
      justify-content: center;
      align-items: center; */
    }
  }
`;
export const DockTeacherSection5wrap = styled.section`
  width: 100%;

  /* min-height: 520px; */
  /* padding-bottom: 40%; */
  /* background-size: cover; */
  /* max-width: 768px; */
  /* padding-bottom: 50px; */
  overflow: hidden;
  background: #f0eff4;
  & > .container {
    /* padding: 0 20px; */
    padding-bottom: 80px;
    box-sizing: border-box;
    & > h2 {
      font-size: 1.5rem;
      font-weight: 700;
      text-align: center;
      margin-top: 80px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 60px;
    }
    & > .study_way {
      text-align: center;
      margin-bottom: 60px;
      &:last-child {
        margin-bottom: 0;
      }
      & > h3 {
        font-size: 1.25rem;
        font-weight: 700;
        display: flex;
        flex-direction: column;
        & > span {
          &:first-child {
            margin-bottom: 16px;
          }
        }
      }
      & > div {
        margin-top: 16px;
        margin-bottom: 24px;
        display: flex;
        flex-direction: column;
      }
    }
  }
`;
export const DockTeacherSectionHomeWrap = styled.section`
  width: 100%;

  /* min-height: 520px; */
  /* padding-bottom: 40%; */
  /* background-size: cover; */
  /* max-width: 768px; */
  /* padding-bottom: 50px; */
  background: #f0eff4;
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
export const DockTeacherStoryWrap = styled.section`
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
      display: flex;
      flex-direction: column;
      & > span {
        &:first-child {
          color: #6100ff;
        }
      }
    }
    & > .children_wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 60px;
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
export const DockTeacher6Wrap = styled.section`
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
    margin-top: 80px;
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
      margin-top: 80px;
      margin-bottom: 60px;
    }
    & > .img-wrap {
      /* padding: 0 76px; */
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
