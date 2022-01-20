import styled from "styled-components";

export const CounSelorMenuWrap = styled.section`
  /* min-height: 100vh; */
  padding-bottom: 24px;
  background: #fff;
  & > .container {
    padding-bottom: 24px;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    height: 100%;
    box-sizing: border-box;
    & > .messag-wrap {
      position: fixed;
      max-width: 450px;

      margin: 0 auto;
      top: 55px;
      width: 100%;
      min-height: 40px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #f0eff4;
    }
    margin-top: 156px;
    & > h1 {
      text-align: center;

      padding: 0 20px;
    }
    & > .setting-list {
      width: 100%;
      margin-top: 40px;
      padding: 0 20px;
      box-sizing: border-box;
      & > .list-click {
        width: 100%;
        display: flex;
        align-items: center;

        padding: 16px 14px;
        box-sizing: border-box;
        border-bottom: 1px solid #f0eff4;
        justify-content: space-between;
        & > span {
          font-size: 1rem;
        }
        & > svg {
          transform: rotate(270deg);
        }
      }
    }
    & > .btn-group {
      margin-top: 182px;
      padding: 0 20px;
      box-sizing: border-box;
      & > button {
        & > svg {
          margin-right: 8px;
        }
      }
    }
  }
`;

export const CounSelorStudyDateContainerWrap = styled.div`
  max-width: 450px;
  margin: 0 auto;
  & > .messag-wrap {
    width: 100%;
    min-height: 40px;
    max-width: 450px;
    margin: 0 auto;
    position: fixed;
    z-index: 100;
    top: 55px;
    left: 0;
    right: 0;
    /* margin-top: 156px; */
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f0eff4;
  }
  & > .container {
    padding: 0 20px;
    padding-bottom: 24px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    height: 100%;
    box-sizing: border-box;
    margin-top: 156px;
    & > h1 {
      text-align: center;
      font-size: 1.5rem;
      /* margin-top: 60px; */
      margin-bottom: 24px;
    }
    & > .text-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      & > span {
        font-size: 0.875rem;
        text-align: center;
        word-break: keep-all;
      }
      margin-bottom: 24px;
    }
    & > .date_description {
      text-align: center;
      word-break: keep-all;
      margin-bottom: 12px;
      & > span {
        font-size: 0.75rem;
        color: #6100ff;
      }
    }
    & > .description {
      display: flex;
      flex-direction: column;
      margin-top: 24px;
      & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 16px;
        & > span {
          font-size: 0.875rem;
        }
      }
      & > textarea {
        resize: none;
        width: 100%;
        min-height: 320px;
        box-sizing: border-box;
        /* Background */

        background: #f0eff4;
        /* Gray 40% */

        border: 1px solid rgba(0, 0, 0, 0.4);
        box-sizing: border-box;
        border-radius: 8px;
        padding: 16px;
        font-size: 0.875rem;
        color: #000;
        &::-webkit-input-placeholder {
          color: rgba(0, 0, 0, 0.4);
        }
      }
    }
    & > .btn-group {
      display: flex;
      flex-direction: column;
      margin-top: 40px;
      & > button {
        min-height: 48px;
        &:disabled {
          background: #c9c9c9 !important;
          box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
          border-radius: 8px;
          /* Mobile Body2 */

          font-family: Spoqa Han Sans Neo;
          font-style: normal;
          font-weight: normal;
          font-size: 1rem;
          line-height: 20px;
          /* identical to box height */

          text-align: center;

          /* Gray 40% */

          color: rgba(0, 0, 0, 0.4) !important;
        }
        &:first-child {
          /* White */
          background: #ffffff;
          box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
          border-radius: 8px;
          /* Mobile Body2 */

          font-family: Spoqa Han Sans Neo;
          font-style: normal;
          font-weight: normal;
          font-size: 1rem;
          line-height: 20px;
          /* identical to box height */

          text-align: center;

          /* Black */

          color: #000000;
          margin-bottom: 16px;
        }
        &:last-child {
          /* Purple */

          background: #6100ff;
          box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
          border-radius: 8px;
          /* Mobile Body2 */

          font-family: Spoqa Han Sans Neo;
          font-style: normal;
          font-weight: normal;
          font-size: 1rem;
          line-height: 20px;
          /* identical to box height */

          text-align: center;

          /* White */

          color: #ffffff;
        }
      }
    }
  }
`;

export const CounSelorReviewContainerWrap = styled.div`
  max-width: 450px;
  margin: 0 auto;
  & > .messag-wrap {
    width: 100%;
    min-height: 40px;
    max-width: 450px;
    margin: 0 auto;
    position: fixed;
    z-index: 100;
    top: 55px;
    left: 0;
    right: 0;
    /* margin-top: 156px; */
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f0eff4;
  }
  & > .container {
    padding: 0 20px;
    padding-bottom: 24px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    height: 100%;
    box-sizing: border-box;
    margin-top: 156px;
    & > h1 {
      text-align: center;
      font-size: 1.5rem;

      margin-bottom: 24px;
    }
    & > .text-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      & > span {
        font-size: 0.875rem;
        text-align: center;
        word-break: keep-all;
      }
      margin-bottom: 40px;
    }
    & > .review_list {
      & > .review_card {
        /* White */

        background: #ffffff;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        min-height: 147px;
        margin-bottom: 24px;
        & > div {
          &:first-child {
            display: flex;
            flex-direction: column;

            padding: 16px 12px;
            box-sizing: border-box;
            & > div {
              &:first-child {
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid rgba(0, 0, 0, 0.4);
                padding-bottom: 8px;
                margin-bottom: 16px;
                & > div {
                  & > span {
                    &:first-child {
                      font-size: 1rem;
                    }
                  }
                  &:last-child {
                    & > span {
                      font-size: 0.75rem;
                    }
                  }
                }
              }
              &:last-child {
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
              }
            }
          }
          &:last-child {
            /* Light Red */
            min-height: 34px;
            background: #6100ff;
            border-radius: 0px 0px 8px 8px;
            display: flex;
            justify-content: space-between;
            padding: 0 16px;
            align-items: center;
            &.active {
              background: #f0eff4;
              & > span {
                color: #000;
              }
              & > svg {
                & > path {
                  fill: #000;
                }
              }
            }
            & > span {
              font-size: 0.875rem;
              color: #ffffff;
            }
            & > svg {
              & > path {
                fill: #ffffff;
              }
            }
          }
        }
      }
    }
  }
`;

export const RePlayContainerWrap = styled.div`
  background: #fff;
  max-width: 450px;

  margin: 0 auto;
  & > .container {
    padding: 0 20px;
    padding-bottom: 24px;
    margin-top: 116px;
    & > h1 {
      text-align: center;
      font-family: Spoqa Han Sans Neo;

      font-weight: 700;
      font-size: 1.5rem;
      line-height: 30px;
      /* identical to box height */

      /* Black */

      color: #000000;
    }
    & > .star_wrap {
      margin-bottom: 24px;
    }
    & > .customer_review {
      display: flex;
      flex-direction: column;
      margin-bottom: 40px;
      & > span {
        margin-bottom: 1rem;
      }
      & > div {
        width: 100%;
        min-height: 240px;
        box-sizing: border-box;
        padding: 16px;
        /* Background */

        background: #f0eff4;
        /* Gray 40% */

        border: 1px solid rgba(0, 0, 0, 0.4);
        box-sizing: border-box;
        border-radius: 8px;
        & > span {
          /* Mobile_Body3 */

          font-family: Spoqa Han Sans Neo;
          font-style: normal;
          font-weight: normal;
          font-size: 0.875rem;
          line-height: 18px;

          /* Black */

          color: #000000;
        }
      }
    }
    & > .teacher_review {
      display: flex;
      flex-direction: column;
      margin-bottom: 40px;
      & > span {
        margin-bottom: 1rem;
      }
      & > textarea {
        width: 100%;
        resize: none;
        min-height: 240px;
        box-sizing: border-box;
        padding: 16px;
        /* Background */

        background: #f0eff4;
        /* Gray 40% */

        border: 1px solid rgba(0, 0, 0, 0.4);
        box-sizing: border-box;
        border-radius: 8px;
        font-family: Spoqa Han Sans Neo;
        font-style: normal;
        font-weight: normal;
        font-size: 0.875rem;
        line-height: 18px;

        /* Gray 40% */
        color: #000;
        &::-webkit-input-placeholder {
          color: rgba(0, 0, 0, 0.4);
        }
      }
    }
  }
`;

export const CounSelorStudyCheckWrap = styled.div`
  max-width: 450px;

  margin: 0 auto;
  & > .messag-wrap {
    width: 100%;
    min-height: 40px;
    max-width: 450px;
    margin: 0 auto;
    position: fixed;
    z-index: 100;
    top: 55px;
    left: 0;
    right: 0;
    /* margin-top: 156px; */
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f0eff4;
  }
  & > .container {
    padding: 0 20px;
    margin-top: 156px;
    & > .time_list {
      text-align: center;
      display: flex;
      justify-content: space-between;
      align-items: center;
      & > div {
        & > button {
          width: 12px;
          background: none;
          border: 0;
        }
      }
      & > h2 {
        font-size: 1.25rem;
        font-weight: 700;
      }
    }
    & > .study_no-list {
      margin-top: 40px;
      & > span {
        font-size: 1rem;
        font-weight: 700;
      }
      & > div {
        margin-top: 16px;
        & > .card {
          /* White */
          min-height: 104px;
          background: #ffffff;
          box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
          border-radius: 8px;
          margin-bottom: 24px;
          /* display: flex; */
          /* height: 100%; */
          & > div {
            &:first-child {
              display: flex;
              /* Light Red */
              &.expected {
                background: rgba(0, 0, 0, 0.2);
              }
              &.complete {
                background: #f0eff4;
                & > span {
                  color: #000;
                }
                & > svg {
                  & > path {
                    fill: #000;
                  }
                }
              }
              background: #ff7575;
              border-radius: 8px 8px 0px 0px;
              min-height: 34px;
              justify-content: space-between;
              align-items: center;
              padding: 0 16px;
              & > span {
                font-size: 0.875rem;
                color: #ffffff;
              }
            }
            &:last-child {
              display: flex;
              flex-direction: column;
              /* align-items: center; */

              /* min-height: 100%; */
              /* justify-content: center; */
              padding: 12px 16px;
              box-sizing: border-box;

              & > span {
                &:first-child {
                  margin-bottom: 8px;
                  font-size: 1rem;
                  font-weight: 700;
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const ClassDetailStyleWrap = styled.div`
  padding-bottom: 116px;
  max-width: 450px;
  margin: 0 auto;
  & > .container {
    margin-top: 40px;
    & > .user_info-wrap {
      & > h2 {
        display: flex;
        align-items: center;
        margin-bottom: 16px;
        justify-content: space-between;
        font-weight: 700;
        padding: 0 20px;
        & > span {
          font-size: 1rem;
          font-weight: 700;
          &:last-child {
            font-size: 1.25rem;
          }
        }
      }
      border-bottom: 2px solid #f0eff4;
      padding-top: 24px;
      &:nth-child(1) {
        padding-top: 0;
      }
      & > div {
        padding-bottom: 24px;
        & > div {
          display: flex;
          padding: 0 20px;
          justify-content: space-between;
          margin-bottom: 8px;
          &:nth-child(4) {
            /* color: red; */
            margin-bottom: 16px;
          }
          &:last-child {
            margin-bottom: 0;
          }
          & > span {
            font-size: 0.875rem;
            &:first-child {
              color: rgba(0, 0, 0, 0.4);
            }
          }
        }
      }
    }
    & > .detail_info-wrap {
      & > h2 {
        display: flex;
        align-items: center;
        margin-top: 24px;
        margin-bottom: 16px;
        justify-content: space-between;
        font-weight: 700;
        padding: 0 20px;
        & > span {
          font-size: 1rem;
          font-weight: 700;
          &:last-child {
            font-size: 1.25rem;
          }
        }
      }
      & > div {
        border-bottom: 2px solid #f0eff4;
        padding-bottom: 24px;
        & > div {
          display: flex;
          padding: 0 20px;
          justify-content: space-between;
          margin-bottom: 8px;
          &.cuer_date {
            flex-direction: column;
            & > span {
              margin-bottom: 8px;
            }
            & > div {
              background: #f0eff4;
              padding: 8px;
              box-sizing: border-box;
              & > span {
                font-size: 0.875rem;
              }
            }
          }
          &:last-child {
            margin-bottom: 0;
          }
          & > span {
            font-size: 0.875rem;
            &:first-child {
              color: rgba(0, 0, 0, 0.4);
            }
          }
        }
      }
    }
    & > .address_info-wrap {
      & > h2 {
        display: flex;
        align-items: center;
        margin-top: 24px;
        margin-bottom: 16px;
        justify-content: space-between;
        font-weight: 700;
        padding: 0 20px;
        & > span {
          font-size: 1rem;
          font-weight: 700;
          &:last-child {
            font-size: 1.25rem;
          }
        }
      }
      & > div {
        border-bottom: 2px solid #f0eff4;
        padding-bottom: 24px;
        & > h2 {
          display: flex;
          align-items: center;
          margin-top: 24px;
          margin-bottom: 16px;
          justify-content: space-between;
          font-weight: 700;
          padding: 0 20px;
          & > span {
            font-size: 1rem;
            font-weight: 700;
            /* color: red; */
            &:last-child {
              /* background-color: red; */
              font-size: 1.25rem;
            }
          }
        }
        & > .visit_list-wrap {
          & > .visit_list {
            display: flex;
            align-items: center;
            font-size: 0.875rem;
            & > svg {
              margin-right: 8px;
            }
          }
        }
        & > div {
          display: flex;
          padding: 0 20px;
          flex-direction: column;
          /* justify-content: space-between; */
          margin-bottom: 8px;
          &:last-child {
            margin-bottom: 0;
          }
          & > span {
            font-size: 0.875rem;
            &:first-child {
              /* color: rgba(0, 0, 0, 0.4); */
            }
          }
        }
      }
    }
    & > .study_purpose-wrap {
      & > h2 {
        display: flex;
        align-items: center;
        margin-top: 24px;
        margin-bottom: 16px;
        justify-content: space-between;
        font-weight: 700;
        padding: 0 20px;
        & > span {
          font-size: 1rem;
          font-weight: 700;
          &:last-child {
            font-size: 1.25rem;
          }
        }
      }
      & > div {
        padding-bottom: 24px;
        & > h2 {
          display: flex;
          align-items: center;
          margin-top: 24px;
          margin-bottom: 16px;
          justify-content: space-between;
          font-weight: 700;
          padding: 0 20px;
          & > span {
            font-size: 1rem;
            font-weight: 700;
            /* color: red; */
            &:last-child {
              /* background-color: red; */
              font-size: 1.25rem;
            }
          }
        }
        & > .visit_list-wrap {
          & > .visit_list {
            display: flex;
            align-items: center;
            font-size: 0.875rem;
            & > svg {
              margin-right: 8px;
            }
          }
        }
        & > div {
          display: flex;
          padding: 0 20px;
          flex-direction: column;
          /* justify-content: space-between; */
          margin-bottom: 8px;
          &:last-child {
            margin-bottom: 0;
          }
          & > span {
            font-size: 0.875rem;
            &:first-child {
              /* color: rgba(0, 0, 0, 0.4); */
            }
          }
        }
      }
    }
    & > .children_status {
      border-bottom: 2px solid #f0eff4;
      padding-bottom: 24px;
      &:last-child {
        padding-bottom: 0;
        border-bottom: 0;
      }
      & > h2 {
        display: flex;
        align-items: center;
        margin-top: 24px;
        margin-bottom: 16px;
        justify-content: space-between;
        font-weight: 700;
        padding: 0 20px;
        & > span {
          font-size: 1rem;
          font-weight: 700;
          &:last-child {
            font-size: 1.25rem;
          }
        }
      }
      & > div {
        padding: 0 20px;
        & > span {
          font-size: 0.875rem;
        }
      }
    }
    & > .btn-group {
      margin-top: 40px;
      position: fixed;
      bottom: 20px;
      left: 20px;
      right: 20px;
      max-width: 450px;
      margin: 0 auto;
    }
  }
`;

export const ClassReviewModalWrap = styled.div`
  position: fixed;
  max-width: 450px;
  margin: 0 auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  & > .container {
    /* width: 80vw; */
    /* max-width: 430px; */
    /* min-width: 430px; */
    background: #fff;
    border-radius: 8px;
    /* width: 70vw; */
    /* min-width: 320px; */
    /* width: 100%; */
    min-height: 295px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
    box-sizing: border-box;
    & > span {
      font-size: 3.125rem;
      margin-bottom: 40px;
    }
    & > h2 {
      font-size: 1.25rem;
      margin-bottom: 16px;
    }
    & > .text-wrap {
      text-align: center;
      margin-bottom: 24px;
      & > span {
        font-size: 0.875rem;
      }
    }
    & > .btn-group {
      display: flex;
      width: 100%;
      /* flex-direction: column; */
      & > button {
        width: 100%;
        font-size: 1rem;
        margin-right: 16px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
`;
export const ClassDetailContainerWrap = styled.div`
  max-width: 450px;
  margin: 0 auto;
  background: #fff;
  min-height: 100vh;
  overflow: hidden;
  & > .container {
    width: 100%;
    /* padding: 0 20px; */
    /* padding-bottom: 116px; */
    box-sizing: border-box;
    padding-bottom: 28px;
    & > .grid2 {
      margin-top: 32px;
      margin-bottom: 40px;
      & > h2 {
        text-align: center;
        margin-bottom: 16px;
        font-size: 1.25rem;
        font-weight: 700;
      }
      & > span {
        display: block;
        text-align: center;
        font-size: 0.75rem;
        color: #6100ff;
      }
    }
    & > .grid3 {
      border-top: 2px solid #f0eff4;
      padding: 24px 20px;
      & > h2 {
        display: flex;
        justify-content: space-between;

        align-items: center;
        margin-bottom: 16px;
        & > span {
          font-size: 1rem;
        }
      }
      & > input {
        display: none;
      }
      & > label {
        display: flex;
        justify-content: center;
        align-items: center;
        /* White */

        background: #ffffff;
        /* Gray 40% */

        box-sizing: border-box;
        border-radius: 4px;
        min-height: 34px;
        border: 1px solid #000;
        & > span {
          font-size: 0.875rem;
        }
        &.text-wrap_no {
          border: 1px solid rgba(0, 0, 0, 0.4);
        }
        position: relative;
        & > button {
          position: absolute;
          right: 0;
        }
      }
    }
    & > .grid4 {
      border-top: 2px solid #f0eff4;
      padding: 24px 20px;
      & > h2 {
        display: flex;
        justify-content: space-between;

        align-items: center;
        margin-bottom: 16px;
        & > span {
          font-size: 1rem;
        }
      }
      & > div {
        &.complete {
          & > span {
            font-size: 0.875rem;
          }
        }
        & > textarea {
          resize: none;
          display: flex;
          width: 100%;
          padding: 16px;
          box-sizing: border-box;
          /* White */

          background: #ffffff;
          /* Gray 40% */

          border: 1px solid rgba(0, 0, 0, 0.4);
          box-sizing: border-box;
          border-radius: 4px;
          color: #000;
          font-size: 0.875rem;
          font-family: "Spoqa Han Sans Neo";
          &::-webkit-input-placeholder {
            color: rgba(0, 0, 0, 0.4);
          }
        }
      }
    }
    & > .mask_is {
      padding: 0 20px;
      border-top: 2px solid #f0eff4;
      padding-top: 24px;
      padding-bottom: 24px;
      & > h2 {
        display: flex;
        justify-content: space-between;

        align-items: center;
        margin-bottom: 16px;
        & > span {
          font-size: 1rem;
          &:last-child {
            font-size: 1.25rem;
          }
        }
      }
      & > .input_list {
        & > input {
          display: none;
          &:checked + label {
            & > div {
              position: relative;
              &:after {
                content: "";
                position: absolute;
                display: block;
                width: 32px;
                height: 32px;
                top: 50%;
                left: 50%;
                border-radius: 50%;
                background: #6100ff;
                transform: translate(-50%, -50%);
              }
            }
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
          & > div {
            width: 40px;
            height: 40px;
            border: 1px solid rgba(0, 0, 0, 0.4);
            border-radius: 50%;
          }
          & > span {
            margin-top: 12px;
            font-size: 0.875rem;
            color: rgba(0, 0, 0, 0.4);
          }
        }
      }
    }
    & > .Uniqueness {
      padding: 0 20px;
      border-top: 2px solid #f0eff4;
      padding-top: 24px;
      padding-bottom: 40px;
      & > h2 {
        display: flex;
        justify-content: space-between;

        align-items: center;
        margin-bottom: 16px;
        & > span {
          font-size: 1rem;
          &:last-child {
            font-size: 1.25rem;
          }
        }
      }
      & > textarea {
        width: 100%;
        resize: none;
        background: #ffffff;
        /* Gray 40% */
        min-height: 176px;
        border: 1px solid rgba(0, 0, 0, 0.4);
        box-sizing: border-box;
        border-radius: 4px;
        padding: 16px;
        box-sizing: border-box;
        font-size: 0.875rem;
        font-family: "Spoqa Han Sans Neo";
        &::-webkit-input-placeholder {
          color: rgba(0, 0, 0, 0.4);
        }
      }
      & > .uniqueness_text {
        padding: 12px 8px;
        box-sizing: border-box;
        background: #f0eff4;
        margin-bottom: 16px;
        &.complete {
          background: none;
          padding: 0;
        }
        & > span {
          font-size: 0.875rem;
        }
        & > h3 {
          font-size: 0.875rem;
          font-weight: 400;
        }
        & > div {
          display: flex;
          flex-direction: column;
          & > span {
            font-size: 0.875rem;
            font-weight: 400;
          }
        }
      }
    }
    & > .study_num {
      padding: 0 20px;
      border-top: 2px solid #f0eff4;
      padding-top: 24px;
      padding-bottom: 24px;
      & > h2 {
        display: flex;
        justify-content: space-between;

        align-items: center;
        margin-bottom: 16px;
        & > span {
          font-size: 1rem;
          &:last-child {
            font-size: 1.25rem;
          }
        }
      }
      & > .study-check-wrap {
        margin-bottom: 40px;
        & > input {
          display: none;
          &:checked + label {
            background: #ffc845;
            color: #fff;
          }
        }
        display: flex;
        justify-content: space-between;
        & > label {
          min-width: 52px;
          min-height: 52px;
          background: #f0eff4;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 0.875rem;
          color: rgba(0, 0, 0, 0.4);
        }
      }
      & > .weekly_input-wrap {
        /* margin-bottom: 40px; */
        & > input {
          display: none;
          &:checked + label {
            background: #ffc845;
            color: #fff;
          }
        }
        display: flex;
        justify-content: space-around;
        & > label {
          min-width: 52px;
          min-height: 52px;
          background: #f0eff4;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 0.875rem;
          color: rgba(0, 0, 0, 0.4);
        }
      }
    }
    & > .parent_opinion-wrap {
      padding: 0 20px;
      border-top: 2px solid #f0eff4;
      padding-top: 24px;
      & > h2 {
        display: flex;
        justify-content: space-between;

        align-items: center;
        margin-bottom: 16px;
        & > span {
          font-size: 1rem;
          &:last-child {
            font-size: 1.25rem;
          }
        }
      }
      & > div {
        & > span {
          font-size: 0.875rem;
        }
      }
    }
    & > .grid5 {
      & > h2 {
        display: flex;
        justify-content: space-between;

        align-items: center;
        margin-bottom: 16px;
        & > span {
          font-size: 1rem;
        }
      }
      border-top: 2px solid #f0eff4;
      padding: 24px 20px;
      & > div {
        & > input {
          display: none;
          &:checked + label {
            color: #fff;
            background: #6100ff;
          }
        }
        display: flex;
        justify-content: space-between;
        & > label {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          color: rgba(0, 0, 0, 0.2);
          font-size: 0.875rem;
          background: #f0eff4;
          /* width: 100%; */
        }
      }
    }
    & > .parent_reaction_wrap {
      & > h2 {
        display: flex;
        justify-content: space-between;

        align-items: center;
        margin-bottom: 16px;
        & > span {
          font-size: 1rem;
        }
      }
      border-top: 2px solid #f0eff4;
      padding: 24px 20px 0 20px;
      & > .phygical-check-wrap {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-top: 24px;
        box-sizing: border-box;
        /* margin-bottom: 32px; */
        & > input {
          display: none;
          &:checked + label {
            & > svg {
              & > circle {
                fill: #6100ff;
                fillopacity: 1;
                &:nth-child(2) {
                  fill: #fff;
                }
                &:nth-child(3) {
                  fill: #fff;
                }
              }
              & > ellipse {
                fill: #fff;
                fillopacity: 1;
              }
              & > path {
                stroke: #fff;
                stroke-opacity: 1;
              }
            }
            & > div {
              & > span {
                color: #000 !important;
              }
            }
          }
        }
        & > label {
          display: flex;

          /* min-width: 80px; */
          flex-direction: column;
          align-items: center;
          /* justify-content: center; */
          & > svg {
            min-width: 52px;
          }
          & > div {
            margin-top: 16px;
            display: flex;
            flex-direction: column;
            & > span {
              font-size: 1rem;
              text-align: center;
              color: rgba(0, 0, 0, 0.4);
              word-break: keep-all;
            }
          }
        }
      }
    }
    & > .btn-group {
      padding: 0 20px;
      /* margin-top: 40px; */
      & > button {
      }
    }
  }
`;

export const CounselorContainerWrap = styled.div`
  max-width: 450px;

  margin: 0 auto;
`;

export const CounselorManageMentWrap = styled.div`
  max-width: 450px;

  margin: 0 auto;
  & > .container {
    padding: 0 20px;
    /* border: 1px solid red; */
    & > .tab_wrap {
      display: flex;
      margin-top: 24px;
      margin-bottom: 40px;
      & > input {
        display: none;
        &:checked + label {
          color: #6100ff;
          border-bottom: 2px solid #6100ff;
          font-weight: 700;
        }
      }
      & > label {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        padding-bottom: 8px;
        color: rgba(0, 0, 0, 0.4);
        margin-right: 16px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
    & > .study_wrap {
      & > .card {
        background: #ffffff;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        margin-bottom: 16px;
        &:last-child {
          margin-bottom: 0;
        }
        display: flex;
        flex-direction: column;
        & > div {
          &:first-child {
            padding: 16px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: space-between;
            & > div {
              display: flex;
              flex-direction: column;
              &:first-child {
                & > span {
                  margin-bottom: 8px;
                  font-size: 0.875rem;
                  &:first-child {
                    font-size: 1rem;
                    font-weight: 700;
                  }
                  &:last-child {
                    margin-bottom: 0;
                  }
                }
              }
              &:last-child {
                border: 1px solid #6100ff;
                width: 60px;
                height: 60px;
                border-radius: 50%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                & > div {
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  & > div {
                    & > span {
                      font-weight: 700;
                      &:first-child {
                        color: #6100ff;
                      }
                    }
                  }
                  & > span {
                    &:last-child {
                      font-size: 0.75rem;
                    }
                  }
                }
              }
            }
          }
          &:last-child {
            background: #f0eff4;
            min-height: 34px;
            padding: 0 16px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: space-between;
            /* color: red; */
            font-size: 0.875rem;
          }
        }
      }
    }
  }
`;
export const CounselorManageMentInfoWrap = styled.div`
  max-width: 450px;

  margin: 0 auto;
  & > .container {
    & > .tab_wrap {
      padding: 0 20px;
      display: flex;
      margin-top: 80px;
      margin-bottom: 40px;
      & > input {
        display: none;
        &:checked + label {
          color: #6100ff;
          border-bottom: 2px solid #6100ff;
          font-weight: 700;
        }
      }
      & > label {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        padding-bottom: 8px;
        color: rgba(0, 0, 0, 0.4);
        margin-right: 16px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
    & > .user_wrap {
    }
    & > .program_info-h2 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
      font-weight: 700;
      padding: 0 20px;
      & > span {
        font-size: 1rem;
        font-weight: 700;
      }
    }
    & > .teacher_info {
      padding: 0 20px;
      margin-bottom: 24px;
      & > div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
        &:last-child {
          margin-bottom: 0;
        }
        & > span {
          &:first-child {
            font-size: 1rem;
            font-weight: 400;
            color: rgba(0, 0, 0, 0.4);
          }
          &:last-child {
            font-size: 1rem;
          }
        }
      }
    }
    & > .study_log {
      & > .card {
        border-top: 1px solid #f0eff4;
        padding: 16px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        & > div {
          display: flex;
          flex-direction: column;
          &:first-child {
            & > span {
              margin-bottom: 8px;
              &:first-child {
                font-size: 1rem;
                font-weight: 700;
              }
              &:last-child {
                font-size: 1rem;
                font-weight: 700;
                color: #6100ff;
                margin-bottom: 0;
              }
            }
          }
          &:last-child {
            & > span {
              color: #000;
              font-size: 0.875rem;
            }
          }
        }
      }
    }
  }
`;
