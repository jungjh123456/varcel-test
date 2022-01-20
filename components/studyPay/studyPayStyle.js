import styled from "styled-components";

export const StudyPaySection1Wrap = styled.section`
  background: #f0eff4;
  padding-bottom: 60px;
  & > .container {
    margin-top: 116px;
    padding: 0 20px;
    box-sizing: border-box;
    & > h1 {
      text-align: center;
      font-size: 1.5rem;
      margin-bottom: 40px;
    }
    & > .drop_wrap {
      & > div {
        margin-bottom: 49px;
        & > span {
          display: block;
          text-align: center;
          font-size: 1rem;
          margin-bottom: 8px;
        }
      }
    }
  }
`;
export const StudyPaySection2Wrap = styled.section`
  background: #fff;
  /* padding-bottom: 60px; */
  position: relative;
  & > .container {
    margin-top: 67px;
    box-sizing: border-box;
    /* height: 300px; */
    padding-bottom: 60px;
    & > .triangle {
      max-width: 60px;
      min-width: 60px;
      position: absolute;
      top: -29px;
      left: 50%;

      width: 60px;
      height: 60px;
      width: 100%;
      background: #f0eff4;
      transform: translateX(-50%) rotate(45deg);
      /* border: 1px solid red; */
    }
    & > .study_list {
      margin-top: 60px;
      &:first-child {
        margin-top: 0;
      }
      & > h2 {
        font-size: 1rem;
        font-weight: 700;
        text-align: center;
        margin-bottom: 24px;
      }
      & > div {
        cursor: pointer;
        & > div {
          display: flex;
          padding: 0 20px;
          min-height: 126px;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 12px;
          border-bottom: 2px solid #f0eff4;
          padding-top: 12px;
          & > div {
            display: flex;
            flex-direction: column;
            &:first-child {
              & > span {
                margin-bottom: 12px;
                box-sizing: border-box;
                &:first-child {
                  /* Purple */
                  max-width: 84px;
                  min-height: 20px;
                  background: #6100ff;
                  border-radius: 4px;
                  font-size: 0.75rem;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  color: #fff;
                }
                &:nth-child(2) {
                  font-size: 1rem;
                  font-weight: 700;
                }
                &:nth-child(3) {
                  font-size: 1rem;
                  font-weight: 700;
                  & > span {
                    font-size: 0.875rem;
                    font-weight: 400;
                  }
                }
                &:last-child {
                  font-size: 0.875rem;
                  margin-bottom: 0;
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const StudyPaySection3Wrap = styled.section`
  background: #f0eff4;
  padding-bottom: 80px;
  & > .container {
    margin-top: 80px;
    /* padding: 0 20px; */
    & > h2 {
      font-size: 1.5rem;
      display: flex;
      flex-direction: column;
      text-align: center;
      margin-bottom: 60px;
    }
    & > .question_list {
      padding: 0 20px;
      padding-bottom: 40px;
      margin-bottom: 40px;
      box-sizing: border-box;
      border-bottom: 2px solid #fff;
      & > h3 {
        font-size: 1rem;
        font-weight: 700;
        margin-bottom: 24px;
      }
      & > div {
        & > span {
          font-size: 0.875rem;
          & > span {
            color: #6100ff;
          }
          &:first-child {
            display: block;
            margin-bottom: 24px;
          }
          &:last-child {
            display: block;
            font-size: 0.75rem;
            margin-top: 16px;
          }
        }
      }
    }
    & > .notice-wrap {
      padding: 0 20px;
      padding-bottom: 40px;
      margin-bottom: 40px;
      box-sizing: border-box;
      border-bottom: 2px solid #fff;
      & > h3 {
        font-size: 1rem;
        font-weight: 700;
        margin-bottom: 24px;
      }
      & > ul {
        padding: 0;
        padding: 0 20px;
        & > li {
          margin-bottom: 16px;
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
    & > .refund_wrap {
      padding: 0 20px;
      /* padding-bottom: 40px; */
      /* margin-bottom: 40px; */
      box-sizing: border-box;
      & > h3 {
        font-size: 1rem;
        font-weight: 700;
        margin-bottom: 24px;
      }
      & > .description {
        margin-bottom: 24px;
        & > span {
          font-size: 0.875rem;
        }
      }
      & > .chaum_description {
        margin-bottom: 24px;
        & > h4 {
          font-size: 0.875rem;
          font-weight: 400;
          margin-bottom: 12px;
        }
        & > div {
          display: flex;
          flex-direction: column;
          & > span {
            font-size: 0.75rem;
          }
        }
      }
      & > .born_description {
        & > h4 {
          font-size: 0.875rem;
          font-weight: 400;
          margin-bottom: 12px;
        }
        display: flex;
        flex-direction: column;
        & > span {
          font-size: 0.75rem;
          display: block;
          &:nth-child(2) {
            margin-bottom: 12px;
          }
        }
        & > div {
          display: flex;
          flex-direction: column;
          margin-top: 29px;
          & > span {
            font-size: 0.75rem;
          }
        }
      }
    }
  }
`;

export const StudyPaySection6Wrap = styled.section`
  background: #fff;
  padding-bottom: 80px;
  /* padding-top: 100px; */
  & > .container {
    margin-top: 80px;
    /* padding: 0 20px; */
    /* max-width: 1200px; */
    /* margin: 0 auto; */
    padding: 0 20px;
    & > h2 {
      font-size: 1.5rem;
      font-weight: 700;
      text-align: center;
      margin-bottom: 60px;
      display: flex;
      flex-direction: column;
    }
    & > .a_list {
      display: flex;
      text-align: center;
      justify-content: center;
      & > a {
        width: 100%;
        /* max-width: 282px; */
        background: #f0eff4;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        margin-right: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 56px;
        text-decoration: none;
        color: #000;
        font-size: 1rem;
        &:last-child {
          margin-right: 0;
        }
        & > svg {
          margin-right: 8px;
        }
      }
    }
  }
`;
