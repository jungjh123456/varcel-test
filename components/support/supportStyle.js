import styled, { keyframes } from "styled-components";

export const SupportSection1Wrap = styled.section`
  /* height: 100vh; */
  /* height: 100%; */
  /* max-width: 360px;
  max-width: 360px; */

  width: 100%;
  /* margin: 0 auto; */
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-between;
  background: #f0eff4;
  /* background: #f0eff4 url("/imgs/sectionBgs.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center 90%; */
  position: relative;
  & > .container {
    margin-top: 116px;
    display: flex;
    flex-direction: column;
    /* padding-bottom: 60px; */
    align-items: center;
    justify-content: space-between;
    height: 100%;

    & > .piting {
      text-align: center;
      padding: 0 20px;
      box-sizing: border-box;
      & > h1 {
        font-size: 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 16px;
      }
      & > div {
        display: flex;
        flex-direction: column;
        & > span {
          font-size: 1rem;
          word-break: keep-all;
          text-align: center;
        }
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
      margin-top: 41px;
      & > div {
        position: absolute;
        left: 20px;
        right: 20px;
        bottom: 25px;
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
export const SupportSection2Wrap = styled.section`
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
      font-size: 1.5rem;
      font-weight: 700;
      text-align: center;
      margin-top: 80px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 24px;
      & > span {
        & > span {
          color: #6100ff;
        }
      }
    }
    & > .study_text {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 60px;
      & > span {
        font-size: 1rem;
        line-height: 20.03px;
      }
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
        align-items: center;
      }
    }
  }
`;
const animation = keyframes`
to {
  opacity: 1;
}
from {
  opacity: 0;
}
`;
export const SupportSection3Wrap = styled.section`
  width: 100%;

  /* min-height: 520px; */
  /* padding-bottom: 40%; */
  /* background-size: cover; */
  /* max-width: 768px; */
  /* padding-bottom: 50px; */
  background: #f4f4f4;
  padding-top: 80px;
  & > .container {
    padding: 0 20px;
    padding-bottom: 80px;
    box-sizing: border-box;
    position: relative;
    & > h2 {
      font-size: 1.5rem;
      font-weight: 700;
      display: flex;
      flex-direction: column;
      align-items: center;
      /* margin-top: 80px; */
    }
    & > div {
    }
    & > .list_wrap {
      animation: ${animation} 500ms forwards;
      & > .emoticon {
        display: flex;
        margin-top: 40px;
        margin-bottom: 24px;
        justify-content: center;
        align-items: center;
      }
      & > .teacher_text {
        text-align: center;
        display: flex;
        flex-direction: column;
        & > span {
          font-size: 1rem;
          word-break: keep-all;
          &:last-child {
            font-size: 0.75rem;
            margin-top: 16px;
          }
        }
      }
      & > .img-wrap {
        /* height: 50px; */
        & > img {
          width: 100%;
          height: 100%;
          /* min-height: 360px; */

          object-fit: cover;
        }
      }
    }
    & > .btn-group {
      display: flex;
      justify-content: center;
      margin-top: 25px;
      & > button {
        margin-right: 48px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
`;

export const SupportSection4Wrap = styled.section`
  width: 100%;

  /* min-height: 520px; */
  /* padding-bottom: 40%; */
  /* background-size: cover; */
  /* max-width: 768px; */
  /* padding-bottom: 50px; */

  background: #fff;
  padding-top: 80px;
  & > .container {
    padding: 0 20px;
    padding-bottom: 80px;
    box-sizing: border-box;
    & > h2 {
      font-size: 1.5rem;
      font-weight: 700;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 40px;
      /* word-break: keep-all; */
      & > span {
        & > span {
          color: #6100ff;
        }
      }

      /* margin-top: 80px; */
    }
    & > .drop_down-wrap {
      border-bottom: 1px solid #c4c4c4;
      padding-bottom: 41px;
      box-sizing: border-box;
      & > div {
        text-align: center;
        margin-bottom: 49px;
        &:last-child {
          margin-bottom: 0;
        }
        & > span {
          font-size: 1rem;
        }
        & > div {
          margin-top: 8px;
        }
      }
    }
    & > .cost_avail {
      text-align: center;
      & > span {
        display: block;
        margin-top: 21px;
        margin-bottom: 16px;
        font-size: 1rem;
        font-weight: 700;
      }
      & > .cost {
        font-weight: 700;
        margin-bottom: 16px;
        & > span {
          font-size: 1.5rem;
          color: #6100ff;
        }
      }
      & > .text_subscription {
        display: flex;
        flex-direction: column;
        & > span {
          font-size: 0.875rem;
          color: rgba(0, 0, 0, 0.4);
        }
      }
    }
  }
`;
export const SupportSection5Wrap = styled.section`
  width: 100%;

  /* min-height: 520px; */
  /* padding-bottom: 40%; */
  /* background-size: cover; */
  /* max-width: 768px; */
  /* padding-bottom: 50px; */

  background: #fff;
  padding-top: 80px;
  & > .container {
    padding: 0 20px;
    padding-bottom: 80px;
    box-sizing: border-box;
    text-align: center;
    & > h2 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 40px;
    }
    & > .register_way {
      margin-bottom: 40px;
      &:last-child {
        margin-bottom: 0;
      }
      & > div {
        & > h3 {
          font-size: 1.25rem;
          margin-bottom: 12px;
        }
        & > span {
          font-size: 0.875rem;
          word-break: keep-all;
        }
        & > div {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
`;
export const SupportSection6Wrap = styled.section`
  width: 100%;

  /* min-height: 520px; */
  /* padding-bottom: 40%; */
  /* background-size: cover; */
  /* max-width: 768px; */
  /* padding-bottom: 50px; */

  background: #f0eff4;
  padding-top: 80px;
  & > .container {
    padding: 0 20px;
    padding-bottom: 80px;
    box-sizing: border-box;
    & > h2 {
      text-align: center;
      margin-bottom: 40px;
    }
  }
`;

export const SupportSection7Wrap = styled.section`
  width: 100%;

  /* min-height: 520px; */
  /* padding-bottom: 40%; */
  /* background-size: cover; */
  /* max-width: 768px; */
  /* padding-bottom: 50px; */

  background: #f0eff4;
  padding-top: 80px;
  & > .container {
    padding: 0 20px;
    padding-bottom: 30px;
    box-sizing: border-box;
    text-align: center;
    & > h2 {
      display: flex;
      flex-direction: column;
      margin-bottom: 24px;
      & > span {
        font-size: 1.5rem;
        font-weight: 700;
        & > span {
          color: #6100ff;
        }
      }
    }
    & > .text-teacher {
      font-size: 1rem;
      margin-bottom: 40px;
    }
    & > .icon-wrap {
      margin-bottom: 24px;
    }
    & > .descript-wrap {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;

      flex-direction: row;
      flex-wrap: wrap;
      gap: 16px;
      & > div {
        min-height: 48px;
        display: flex;
        width: 100%;
        max-width: 320px;
        justify-content: center;
        align-items: center;
        background: #fff;
        border-radius: 8px;
        /* margin-bottom: 16px; */
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    & > .btn-group {
      margin-top: 40px;
    }
  }
`;

export const SupportSection8Wrap = styled.section`
  width: 100%;

  /* min-height: 520px; */
  /* padding-bottom: 40%; */
  /* background-size: cover; */
  /* max-width: 768px; */
  /* padding-bottom: 50px; */

  background: #fff;
  padding-top: 80px;
  & > .container {
    padding: 0 20px;
    padding-bottom: 80px;
    box-sizing: border-box;
    text-align: center;
    & > h2 {
      display: flex;
      flex-direction: column;
      margin-bottom: 80px;
      & > span {
        font-size: 1.5rem;
        font-weight: 700;
      }
    }
    & > .text-wrap {
      display: flex;
      flex-direction: row;

      & > a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        min-height: 48px;
        border: 1px solid rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        margin-right: 16px;
        text-decoration: none;
        color: rgba(0, 0, 0, 0.4);
        &:last-child {
          margin-right: 0;
        }
      }
      & > div {
        min-height: 48px;
      }
    }
  }
`;
