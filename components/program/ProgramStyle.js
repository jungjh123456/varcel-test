import styled from "styled-components";

export const ProgramWrap = styled.section`
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
    & > .text_header {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 16px;
      & > span {
        font-size: 1rem;
        & > span {
          color: #6100ff;
        }
      }
    }
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
        & > span {
          & > span {
            color: #6100ff;
          }
        }
      }
      & > span {
        font-size: 1rem;
        word-break: keep-all;
        text-align: center;
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
        bottom: 50px;
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
export const Program1Wrap = styled.section`
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
        & > span {
          & > span {
            color: #6100ff;
          }
        }
      }
      & > span {
        font-size: 1rem;
        word-break: keep-all;
        text-align: center;
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
export const Program2Wrap = styled.section`
  /* height: 100vh; */
  /* height: 100%; */
  /* max-width: 360px;
  max-width: 360px; */
  /* min-height: 1374px; */
  width: 100%;
  /* margin: 0 auto; */
  background: #fff;

  position: relative;
  padding-bottom: 80px;
  & > .container {
    margin-top: 80px;
    /* display: flex; */
    /* flex-direction: column; */
    /* padding-bottom: 60px; */

    height: 100%;
    /* padding: 0 20px; */

    box-sizing: border-box;
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
    & > .home_piting-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 24px;
      margin-bottom: 40px;
    }
    & > .home-card {
      display: flex;

      width: 100%;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 24px;
      & > .card1 {
        width: 100%;
        /* max-width: 320px; */
        /* min-width: 320px; */
        min-height: 219px;
        /* padding: 24px 20px; */
        box-sizing: border-box;
        text-align: center;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        & > .number {
          /* width: 40px; */
          /* height: 40px; */
          margin-top: 24px;
          width: 100%;
          display: flex;
          justify-content: center;
          & > span {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            background: #6100ff;
            color: #fff;
            font-size: 1.5rem;
            border-radius: 4px;
          }
        }
        & > h3 {
          font-size: 1.25rem;
          margin-top: 24px;
          margin-bottom: 16px;
        }
        & > div {
          padding: 0 20px;
          box-sizing: border-box;
          margin-bottom: 24px;
          & > span {
            font-size: 0.875rem;
          }
        }
      }
    }
  }
`;
export const Program3Wrap = styled.section`
  /* height: 100vh; */
  /* height: 100%; */
  /* max-width: 360px;
  max-width: 360px; */
  /* min-height: 1374px; */
  width: 100%;
  /* margin: 0 auto; */
  background: #f0eff4;

  position: relative;
  padding-top: 80px;
  padding-bottom: 60px;
  & > .container {
    /* margin-top: 80px; */
    /* display: flex; */
    /* flex-direction: column; */
    /* padding-bottom: 60px; */

    height: 100%;
    padding: 0 20px;

    /* padding-bottom: 80px; */
    box-sizing: border-box;
    & > h2 {
      /* margin-top: 80px; */
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 24px;
      & > span {
        font-size: 1.5rem;
        & > span {
          color: #6100ff;
        }
      }
    }
    & > .text_gae {
      /* White */

      background: #ffffff;
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
      border-radius: 8px;
      min-height: 162px;
      padding: 36px 8px;
      box-sizing: border-box;
      text-align: center;
      & > h3 {
        font-size: 1rem;
        font-weight: 700;
        margin-bottom: 16px;
        & > span {
          color: #6100ff;
        }
      }
      & > span {
        font-size: 0.875rem;
        & > span {
          color: #6100ff;
        }
      }
    }
    & > .imgwrap {
      margin-top: 40px;
      & > h2 {
        text-align: center;
        /* margin-bottom: 16px; */
        font-size: 1rem;
        font-weight: 700;
      }
      & > span {
        display: block;
        text-align: center;
        font-size: 0.75rem;
      }
    }
  }
`;
export const Program4Wrap = styled.section`
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
export const Program5Wrap = styled.section`
  width: 100%;

  /* min-height: 520px; */
  /* padding-bottom: 40%; */
  /* background-size: cover; */
  /* max-width: 768px; */
  /* padding-bottom: 50px; */

  background: #fff;
  padding-top: 80px;
  & > .container {
    /* padding: 0 20px; */
    padding-bottom: 80px;
    box-sizing: border-box;
    & > h2 {
      font-size: 1.5rem;
      font-weight: 700;
      display: flex;
      flex-direction: column;
      align-items: center;
      /* margin-top: 80px; */
      margin-bottom: 24px;
    }

    & > .teacher_text {
      text-align: center;
      display: flex;
      flex-direction: column;
      padding: 0 20px;
      margin-bottom: 40px;
      & > span {
        font-size: 1rem;
        word-break: keep-all;
      }
    }
    & > .plus-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      & > a {
        display: flex;
        min-width: 112px;
        min-height: 36px;
        align-items: center;
        justify-content: center;
        /* White */

        background: #ffffff;
        /* Gray 40% */

        border: 1px solid rgba(0, 0, 0, 0.4);
        box-sizing: border-box;
        border-radius: 18px;
        font-size: 0.875rem;
        padding: 0 8px;
        text-decoration: none;
        color: #000;
        & > span {
          margin-right: 16px;
        }
      }
    }
    & > .img-wrap {
      box-sizing: border-box;
    }
    & > .btn-group {
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
`;
export const EssetMainProgramWrap = styled.section`
  /* height: 100vh; */
  /* height: 100%; */
  /* max-width: 360px;
  max-width: 360px; */
  /* min-height: 1374px; */
  width: 100%;
  /* margin: 0 auto; */
  background: #fff;

  position: relative;
  padding-bottom: 80px;
  & > .container {
    margin-top: 80px;
    /* display: flex; */
    /* flex-direction: column; */
    /* padding-bottom: 60px; */

    height: 100%;
    /* padding: 0 20px; */

    box-sizing: border-box;
    padding: 0 20px;
    & > h2 {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 1.5rem;
      margin-bottom: 60px;
      & > span {
        &:last-child {
          color: #6100ff;
        }
      }
    }
    & > .card_group {
      display: flex;
      flex-direction: column;

      & > .card {
        background: #bfd9ff;
        border-radius: 12px;
        text-align: center;
        /* min-height: 360px; */
        height: 100%;
        margin-bottom: 40px;
        &:nth-child(2) {
          background: #ffbba6;
        }
        &:last-child {
          margin-bottom: 0;
          background: #ffe095;
        }
        & > h3 {
          font-size: 1.25rem;
          font-weight: 700;
          padding: 0 16px;
          margin-bottom: 12px;
          margin-top: 24px;
        }
        & > .text_wrap {
          word-break: keep-all;
          padding: 0 20px;
          margin-bottom: -100px;
          padding-bottom: 20px;
          & > span {
            font-size: 0.875rem;
          }
        }
      }
    }
  }
`;
export const Program6Wrap = styled.section`
  width: 100%;

  /* min-height: 520px; */
  /* padding-bottom: 40%; */
  /* background-size: cover; */
  /* max-width: 768px; */
  /* padding-bottom: 50px; */

  background: #fff;
  padding-top: 80px;
  padding-bottom: 80px;
  & > .container {
    /* padding: 0 20px; */
    /* padding-bottom: 80px; */
    box-sizing: border-box;
    padding: 0 20px;
    & > .btn-group {
      box-sizing: border-box;
      margin-top: 40px;
    }
  }
`;

export const ProgramSection3SubWrap = styled.section`
  & > .container {
    padding-bottom: 80px;
    & > h1 {
      margin-top: 80px;
      padding: 0 20px;
      display: flex;
      flex-direction: column;
      text-align: center;
      font-size: 1.5rem;
      margin-bottom: 40px;
      & > span {
        &:first-child {
          color: #6100ff;
        }
      }
    }
    & > .img-wrap {
      margin-bottom: 24px;
    }
    & > .list_wrap {
      /* padding: 0 20px; */
      & > div {
        padding: 0 44px 0 36px;
        padding-bottom: 29px;
        padding-top: 28px;
        display: flex;
        justify-content: space-between;
        border-bottom: 2px solid #f0eff4;
        align-items: center;
        &:last-child {
          border-bottom: 0;
        }
        & > div {
          &:first-child {
            & > span {
              font-size: 0.75rem;
              color: rgba(0, 0, 0, 0.4);
            }
            & > div {
              display: flex;
              flex-direction: column;
              margin-top: 8px;
              & > span {
                font-size: 1rem;
              }
            }
          }
          &:last-child {
            background: #f0eff4;
            border-radius: 50%;
          }
        }
      }
    }
  }
`;
