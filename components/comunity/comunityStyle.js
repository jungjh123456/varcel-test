import styled from "styled-components";

export const ComunitySection1Wrap = styled.section`
  width: 100%;

  background: #f0eff4;

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
    & > .slick_list {
      /* border: 1px solid red; */
      & > div {
        /* border: 1px solid red; */
        & > div {
          /* border: 1px solid red; */
        }
      }
    }
  }
`;

export const ComunitySection2Wrap = styled.div`
  overflow: hidden;
  min-height: 360px;
  & > .container {
    padding: 0 20px;
    padding-bottom: 56px;
    & > .tab_list-wrap {
      display: flex;
      width: 100%;
      margin-top: 24px;
      margin-bottom: 40px;
      /* max-width: 450px; */
      /* justify-content: center; */
      padding: 0 20px;
      /* overflow: hidden; */
      overflow-x: scroll;
      position: relative;
      & > div {
        display: flex;
        /* max-width: 300px; */
        /* overflow-x: auto; */
        /* width: 100%; */

        /* justify-content: center;
        align-items: center; */
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
          /* overflow: auto; */
          min-width: 72px;

          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-right: 16px;
          /* margin-left: 16px; */
          padding-bottom: 8px;

          & > span {
            color: rgba(0, 0, 0, 0.4);
            &:first-child {
              font-size: 1.5rem;
              height: 24px;
            }
            &:last-child {
              font-size: 1rem;
              height: 20px;
              margin-top: 8px;
              font-weight: 700;
              word-break: keep-all;
              word-wrap: none;
              text-align: center;
              white-space: nowrap;
            }
          }
        }
      }
    }
    & > .card-wrap {
      & > .card {
        min-height: 320px;
        background: #ffffff;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        margin-bottom: 24px;
        & > .img-wrap {
          & > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        & > .text-wrap {
          padding: 24px 12px;
          box-sizing: border-box;
          & > h2 {
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 12px;
          }
          & > div {
            display: -webkit-box;
            display: -ms-flexbox;
            display: box;
            margin-top: 1px;
            max-height: 80px;
            overflow: hidden;
            vertical-align: top;
            text-overflow: ellipsis;
            word-break: break-all;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            & > span {
              font-size: 0.875rem;
            }
          }
        }
      }
    }
  }
`;

export const ComunityInfoWrap = styled.section`
  & > .container {
    margin-top: 112px;
    & > h1 {
      padding: 0 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 16px;
      & > span {
        &:first-child {
          color: #6100ff;
          font-size: 0.875rem;
        }
        &:last-child {
          font-size: 1.25rem;
          font-weight: 700;
          margin-top: 24px;
          text-align: center;
          word-break: keep-all;
        }
      }
    }
    & > .img-wrap {
      & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    & > .date {
      text-align: center;
      margin-bottom: 24px;

      & > span {
        font-size: 0.875rem;
        color: rgba(0, 0, 0, 0.4);
      }
    }
    & > .info_description {
      padding: 0 20px;
      box-sizing: border-box;
      margin-top: 60px;
      margin-bottom: 60px;
      & > span {
        font-size: 0.875rem;
        white-space: pre-line;
      }
      & > pre {
        font-size: 0.875rem;
        box-sizing: border-box;
        white-space: pre-wrap;
        overflow: hidden;
        font-family: "Spoqa Han Sans Neo";
      }
    }
    & > .quest_text {
      padding: 0 20px;
      margin-bottom: 60px;
      & > h2 {
        font-size: 1rem;
        font-weight: 700;
      }
      & > .info_description {
        box-sizing: border-box;
        margin-top: 60px;
        & > span {
          white-space: pre-line;
          font-size: 0.875rem;
        }
        & > pre {
          font-size: 0.875rem;
          box-sizing: border-box;
          white-space: pre-wrap;
          overflow: hidden;
          font-family: "Spoqa Han Sans Neo";
        }
      }
    }
    & > .quest_text_two {
      padding: 0 20px;
      margin-bottom: 60px;
      margin-top: 60px;
      & > h2 {
        font-size: 1rem;
        font-weight: 700;
      }
      & > .info_description {
        box-sizing: border-box;
        margin-top: 60px;
        & > span {
          white-space: pre-line;
          font-size: 0.875rem;
        }
        & > pre {
          font-size: 0.875rem;
          box-sizing: border-box;
          white-space: pre-wrap;
          overflow: hidden;
          /* line-height: 17.53px; */
          font-family: "Spoqa Han Sans Neo";
          /* line-height: 17.53px; */
        }
      }
    }
  }
`;
