import styled from "styled-components";

export const HomeGoSection1Wrap = styled.section`
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
    /* padding-bottom: 24px; */
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
      border: 1px solid red;
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
      /* padding: 0 17px; */
      box-sizing: border-box;
      width: 100%;
      /* max-width: 360px; */
      /* bottom: 20px; */
      position: relative;
      margin-top: 41px;

      & > div {
        /* padding: 0 20px; */
        position: absolute;
        left: 20px;
        right: 20px;
        bottom: 44px;
        & > button {
          display: block;
          background: #6100ff;
          /* margin-top: -8%; */
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
export const HomeGoSection2Wrap = styled.div`
  & > .container {
    margin-top: 80px;
    padding: 0 20px;
    padding-bottom: 80px;
    & > h2 {
      font-size: 1.5rem;
      font-weight: 700;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 60px;
      & > span {
        & > span {
          color: #6100ff;
        }
      }
    }
    & > .card_wrap {
      & > .card {
        &:nth-child(2) {
          background: #ffbba6;
        }
        &:nth-child(3) {
          background: #bfd9ff;
          margin-bottom: 0;
        }
        margin-bottom: 16px;
        position: relative;
        display: flex;
        justify-content: space-between;
        min-height: 200px;
        background: #ffdc88;
        border-radius: 8px;
        padding: 14px 16px;
        box-sizing: border-box;
        & > div {
          &:first-child {
            display: flex;
            flex-direction: column;
            word-break: keep-all;
            /* white-space:nowrap; */
            & > span {
              &:first-child {
                font-size: 1.25rem;
                font-weight: 700;
              }
            }
            & > div {
              margin-top: 8px;
              display: flex;
              flex-direction: column;
              word-break: keep-all;
              & > span {
                font-size: 0.85rem;
              }
            }
          }
        }
        & > .img-card {
          display: flex;
          /* justify-content: flex-end; */
          align-items: flex-end;
          /* position: absolute; */
          bottom: 16px;
          right: 16px;
          &.imgs_two {
            min-width: 100px;
            max-width: 108px;
            /* height: 117px; */
            /* max-height: 133px;
            min-height: 133px; */
            bottom: 40px;
          }
          &.imgs_tree {
            min-width: 100px;
            max-width: 108px;
            /* height: 117px; */
            /* max-height: 127px;
            min-height: 127px; */
          }
          & > .img-wrap {
            min-width: 100px;
            max-width: 108px;
            /* height: 117px; */
            /* max-height: 117px;
            min-height: 117px; */
            /* position: absolute; */

            display: flex;
            & > img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        }
      }
    }
  }
`;
export const HomeGoSection3Wrap = styled.div`
  background: #f0eff4;

  padding-top: 80px;
  & > .container {
    padding: 0 20px;
    & > span {
      font-size: 0.75rem;
    }
    & > h2 {
      display: flex;
      flex-direction: column;
      font-size: 1.5rem;
      margin-top: 16px;
      margin-bottom: 44px;
      & > span {
        & > span {
          color: #6100ff;
        }
      }
    }
    & > .renge {
      display: flex;
      justify-content: space-around;
      margin-bottom: 10px;
      & > div {
        /* border-right: 2px solid #c4c4c4; */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        & > div {
          display: flex;
          flex-direction: column;
          margin-bottom: 12px;
          align-items: center;
          & > span {
            font-size: 0.875rem;
          }
        }
        & > span {
          font-size: 0.75rem;
          color: #6100ff;
        }
        &:last-child {
          border-right: 0;
        }
      }
      & > .line {
        display: block;
        /* height: 100%; */
        width: 2px;
        background: #c4c4c4;
      }
    }
    & > .img-wrap {
      min-width: 360px;
      min-height: 386px;
      & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

export const HomeGoSection4Wrap = styled.section`
  background: #fff;

  position: relative;
  padding-top: 80px;
  padding-bottom: 80px;

  & > .container {
    /* padding: 0 20px; */
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
          & > div {
            &:first-child {
              & > div {
                & > span {
                  &:first-child {
                    color: #000;
                  }
                  &:last-child {
                    color: #000;
                    & > span {
                      color: #6100ff;
                    }
                  }
                }
              }
            }
          }
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
                &:last-child {
                  color: #6100ff;
                }
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
    & > h2 {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 60px;
      & > span {
        & > span {
          color: #6100ff;
        }
      }
    }
    & > .tab-wrap {
      margin-bottom: 24px;
      padding: 0 20px;
      & > input {
        display: none;
        &:checked + label {
          color: #6100ff;
          border-bottom: 2px solid #6100ff;
        }
      }
      display: flex;
      justify-content: space-between;
      & > label {
        /* margin-right: 16px; */

        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        padding-bottom: 8px;
        font-size: 1rem;
        font-weight: 700;
        color: rgba(0, 0, 0, 0.4);
      }
    }
    & > .contents-wrap {
      & > ul {
        margin-top: 24px;
        padding: 0 20px;
        list-style: none;
        & > li {
          display: flex;
          align-items: center;
          margin-bottom: 8px;
          &:last-child {
            margin-bottom: 0;
          }
          & > svg {
            margin-right: 16px;
          }
          & > span {
            font-size: 1rem;
            & > span {
              color: #6100ff;
            }
          }
        }
      }
    }
  }
`;
