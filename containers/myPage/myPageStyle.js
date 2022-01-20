import styled from "styled-components";

export const ModalStyle = styled.div`
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
      font-weight: 700;
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
      flex-direction: column;
      & > button {
        width: 100%;
        min-height: 48px;
        font-size: 1rem;
        /* margin-right: 16px; */
        margin-bottom: 12px;
        background: #ffffff;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        & > svg {
          margin-right: 8px;
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
`;
export const ProfileContainerWrap = styled.div`
  /* border: 1px solid red; */
  background: #fff;
  max-width: 450px;

  margin: 0 auto;
  & > .container {
    display: flex;
    flex-direction: column;
    height: 100vh;

    align-items: center;
    padding: 0 20px;
    background-color: #fff;
    overflow: auto;
    padding-bottom: 43px;
    & > .modal {
      /* border: 1px solid red; */
      /* display: none; */
      &.active {
        position: fixed;
      }

      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      max-width: 450px;
      margin: 0 auto;

      box-sizing: border-box;

      box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.3);
      background: rgba(0, 0, 0, 0.4);
      & > .address-wrap {
        position: absolute;
        bottom: 0;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
      }
      & > .daum_popup {
        border: 1px solid red !important;
        & > .popup_post_type2 {
        }
      }
    }
    & > .img-wrap {
      width: 96px;
      height: 96px;
      margin-top: 60px;
      text-align: center;
      border-radius: 50%;
      border: 1px solid #f0eff4;
      background: #f0eff4;
      margin-bottom: 40px;
      /* border: 1px solid red; */
      position: relative;
      & > input {
        display: none;
      }
      & > label {
        & > img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }
      }
      & > svg {
        position: absolute;
        bottom: 5%;
        right: -3%;
      }
    }
    & > .user_name-wrap {
      /* margin-top: 40px; */
      width: 100%;
      display: flex;
      flex-direction: column;
      /* align-items: center; */

      box-sizing: border-box;
      margin-bottom: 25px;
      &:last-child {
        margin-bottom: 0;
      }
      & > span {
        font-size: 1rem;
      }
      & > input {
        display: flex;
        margin-top: 8px;
        width: 100%;
        height: 48px;
        border-radius: 8px;
        border: 1px solid rgba(0, 0, 0, 0.4);
        /* justify-content: center; */
        /* align-items: center; */
        text-align: center;
        box-sizing: border-box;
        color: #000;
        font-size: 1rem;
        &::-webkit-input-placeholder {
          color: rgba(0, 0, 0, 0.4);
        }
      }
      & > button {
        display: flex;
        margin-top: 8px;
        width: 100%;
        height: 48px;
        border-radius: 8px;
        border: 1px solid rgba(0, 0, 0, 0.4);
        justify-content: center;
        align-items: center;
        text-align: center;
        box-sizing: border-box;
        color: rgba(0, 0, 0, 0.4);
        font-size: 1rem;
        position: relative;
        word-break: keep-all;
        & > svg {
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }
`;

export const AppliedContainerWrap = styled.div`
  max-width: 450px;

  margin: 0 auto;
  & > .container {
    padding: 0 20px;
    padding-bottom: 24px;
    box-sizing: border-box;
    margin-top: 116px;
    & > h2 {
      margin-bottom: 40px;
      text-align: center;
      font-size: 1.5rem;
      font-weight: 700;
    }
    & > .applied_wrap {
      & > .card1 {
        width: 100%;
        min-height: 104px;
        background: #f0eff4;
        padding: 0px 20px;
        box-sizing: border-box;
        margin-bottom: 16px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        & > div {
          display: flex;
          flex-direction: column;
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
        & > svg {
          transform: rotate(270deg);
          position: relative;
          z-index: 0;
        }
      }
    }
  }
`;

export const PaymentInfocontainerWrap = styled.div`
  max-width: 450px;

  margin: 0 auto;
  & > .container {
    box-sizing: border-box;
    padding-bottom: 91px;
    margin-top: 116px;
    & > h2 {
      text-align: center;
      box-sizing: border-box;
      font-size: 1.5rem;
      margin-bottom: 24px;
    }
    & > span {
      display: block;
      text-align: center;
      margin-bottom: 40px;
    }
    & > div {
      & > h2 {
        font-size: 1.25rem;
        padding: 0 20px;
        margin-bottom: 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        & > span {
          font-weight: 700;
          font-size: 1rem;
          &:last-child {
            font-size: 1.25rem;
          }
        }
      }
      & > h3 {
        font-size: 1.25rem;
        padding: 0 20px;
        margin-bottom: 24px;
        margin-top: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        & > span {
          font-weight: 700;
          font-size: 1rem;
          &:last-child {
            font-size: 1.25rem;
          }
        }
      }
      & > .program_wrap {
        padding-bottom: 40px;
        border-bottom: 1px solid #f0eff4;

        & > div {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
          padding: 0 20px;
          &:last-child {
            margin-bottom: 0;
          }
          & > span {
            &:first-child {
              font-size: 1rem;
              color: rgba(0, 0, 0, 0.4);
            }
          }
        }
      }
      & > .cost_wrap {
        padding-bottom: 40px;

        & > div {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
          padding: 0 20px;
          &:last-child {
            margin-bottom: 0;
          }
          & > span {
            &:first-child {
              font-size: 1rem;
              color: rgba(0, 0, 0, 0.4);
            }
          }
        }
      }
      & > div {
        /* border: 1px solid red; */
        & > h2 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 24px;
        }

        &:first-child {
          display: flex;
          border: 1px solid red;
          justify-content: space-between;
          border: 1px solid red;
        }

        /* flex-direction: column; */
      }
    }
  }
`;

export const StudyManageMentContainerWrap = styled.div`
  max-width: 450px;

  margin: 0 auto;
  & > .container {
    padding: 0 20px;
    padding-bottom: 45px;
    margin-top: 116px;
    & > h2 {
      font-size: 1.5rem;
      text-align: center;
      margin-bottom: 40px;
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
          }
        }
      }
    }
  }
`;

export const StudyManageMentinfoContainerWrap = styled.div`
  max-width: 450px;

  margin: 0 auto;
  & > .container {
    padding-bottom: 24px;
    margin-top: 96px;
    & > .teacher_info {
      padding: 0 20px;
      margin-bottom: 24px;
      & > h2 {
        /* text-align: center; */
        margin-bottom: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        & > span {
          font-size: 1rem;
          &:last-child {
            font-size: 1.25rem;
          }
        }
      }
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

export const ReviewContainerWrap = styled.div`
  max-width: 450px;

  margin: 0 auto;
  & > .container {
    padding: 0 20px;
    padding-bottom: 45px;
    margin-top: 116px;
    & > h2 {
      font-size: 1.5rem;
      text-align: center;
      margin-bottom: 40px;
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
                  font-size: 1rem;
                  &:first-child {
                    font-weight: 700;
                  }
                  &:nth-child(2) {
                    font-size: 0.875rem;
                  }
                  &:last-child {
                    margin-bottom: 0;
                    font-size: 0.875rem;
                    color: #6100ff;
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
          }
        }
      }
    }
  }
`;

export const ReviewInfoContainerWrap = styled.div`
  max-width: 450px;

  margin: 0 auto;
  & > .container {
    padding-bottom: 24px;
    margin-top: 116px;
    & > h1 {
      font-size: 1.5rem;
      text-align: center;
      margin-bottom: 40px;
    }
    & > .img-wrap {
      text-align: center;
      margin-bottom: 40px;
    }
    & > .teacher-info {
      padding: 0 20px;
      padding-bottom: 40px;
      box-sizing: border-box;
      border-bottom: 2px solid #f0eff4;
      & > div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 12px;
        &:last-child {
          margin-bottom: 0;
        }
        & > span {
          font-size: 1rem;
          &:first-child {
            color: rgba(0, 0, 0, 0.4);
          }
        }
      }
    }
    & > .star_wrap {
      margin-bottom: 24px;
    }
    & > .review_text {
      display: flex;
      flex-direction: column;
      padding: 0 20px;
      margin-bottom: 40px;
      &:last-child {
        margin-bottom: 0;
      }
      & > span {
        font-size: 1rem;
        margin-bottom: 16px;
      }
      & > textarea {
        resize: none;
        border: 1px solid #6100ff;
        background: #f0eff4;
        border-radius: 8px;
        font-size: 0.875rem;
        color: #000;
        padding: 16px;
        box-sizing: border-box;
        font-family: "Spoqa Han Sans Neo", sans-serif;
        &::-webkit-input-placeholder {
          color: rgba(0, 0, 0, 0.4);
        }
      }
    }
    & > .btn-group {
      padding: 0 20px;
      box-sizing: border-box;
      margin-top: 40px;
      & > button {
        width: 100%;
        min-height: 48px;
        background: #6100ff;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        font-size: 1rem;
        color: #fff;
        border-radius: 8px;
        &:disabled {
          width: 100%;
          min-height: 48px;
          background: #c9c9c9;
          box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

          font-size: 1rem;
          color: rgba(0, 0, 0, 0.4);
        }
      }
    }
  }
`;

export const StudyInfoContainerWrap = styled.div`
  max-width: 450px;
  margin: 0 auto;
  & > .container {
    padding-bottom: 40px;
    & > h1 {
      margin-top: 88px;
      font-size: 1.25rem;
      font-weight: 700;
      margin-bottom: 16px;
      text-align: center;
    }
    & > span {
      font-size: 0.75rem;
      display: block;
      text-align: center;
      color: #6100ff;
      margin-bottom: 40px;
    }
    & > .general_optional {
      border-top: 2px solid #f0eff4;
      padding-top: 24px;
      padding-bottom: 24px;
      &:last-child {
        padding-bottom: 0;
      }
      & > h2 {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 1rem;
        font-weight: 700;
        padding: 0 20px;
      }
      & > div {
        margin-top: 16px;
        padding: 0 20px;
      }
    }
    & > .months_class {
      border-top: 2px solid #f0eff4;
      padding-top: 24px;
      padding-bottom: 24px;
      & > h2 {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 1rem;
        font-weight: 700;
        padding: 0 20px;
        margin-bottom: 16px;
      }
      & > div {
        padding: 0 20px;

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
  }
`;

export const CompleteModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: 450px;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  & > .container {
    /* White */
    width: 80vw;
    max-width: 340px;
    background: #ffffff;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    min-height: 295px;
    align-items: center;
    padding: 0 20px;
    padding-top: 40px;
    /* padding-bottom: 16px; */
    box-sizing: border-box;
    & > span {
      font-size: 3.125rem;
    }
    & > h2 {
      margin-top: 40px;
      font-size: 1.25rem;
      margin-bottom: 24px;
    }
    & > .btn-group {
      display: flex;
      width: 100%;
      & > button {
        width: 100%;
      }
    }
  }
`;

export const CustomerClassAlimenoteContainerWrap = styled.div`
  max-width: 450px;
  margin: 0 auto;
  & > .container {
    margin-top: 96px;
    & > .header {
      padding: 0 20px;
      padding-bottom: 24px;
      border-bottom: 2px solid #f0eff4;
      & > h1 {
        text-align: center;
        font-size: 1.25rem;
        margin-bottom: 16px;
      }
      & > span {
        display: block;
        text-align: center;
        color: #ff9a28;
        font-size: 0.75rem;
      }
    }
    & > .study_shedule {
      padding: 0 20px;
      padding-top: 24px;
      padding-bottom: 24px;
      border-bottom: 2px solid #f0eff4;
      & > h2 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
        & > span {
          &:first-child {
            font-size: 1rem;
          }
          &:last-child {
            font-size: 1.25rem;
          }
        }
      }
      & > div {
        & > span {
          font-size: 0.875rem;
          word-break: keep-all;
        }
      }
    }
    & > .teacher_message-wrap {
      padding: 0 20px;
      /* border-bottom: 2px solid #f0eff4; */
      padding-bottom: 24px;
      padding-top: 24px;
      display: flex;
      align-items: center;
      & > .img-wrap {
        min-width: 96px;
        width: 96px;
        min-height: 96px;
        margin-right: 16px;
        & > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      & > .teacher-message {
        display: flex;
        flex-direction: column;
        /* margin-bottom: 60px; */
        & > div {
          &:first-child {
            margin-bottom: 8px;
            & > span {
              font-size: 0.875rem;
              word-break: keep-all;
            }
          }
          &:last-child {
            font-size: 0.75rem;
            color: #6100ff;
          }
        }
      }
    }
  }
`;

export const StudyChahumAlimeContainerWrap = styled.div`
  max-width: 450px;
  margin: 0 auto;
  & > .container {
    padding-bottom: 24px;
    margin-top: 96px;
    & > .title_wrap {
      padding-bottom: 32px;
      box-sizing: border-box;
      border-bottom: 2px solid #f0eff4;
      & > h1 {
        text-align: center;
        font-size: 1.25rem;
        font-weight: 700;
      }
      & > span {
        display: block;
        text-align: center;
        margin-top: 16px;
        font-size: 0.75rem;
        color: #ffc845;
      }
    }
    & > .children_opinion {
      border-bottom: 2px solid #f0eff4;
      padding: 0 20px;
      padding-bottom: 24px;
      & > h2 {
        margin-top: 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 24px;
        & > span {
          &:first-child {
            font-size: 1rem;
          }
          &:last-child {
            font-size: 1.25rem;
          }
        }
      }
      & > .opinion_text {
        & > span {
          word-break: keep-all;
          font-size: 0.875rem;
        }
      }
    }
    & > .study_date-wrap {
      padding: 0 20px;
      border-bottom: 2px solid #f0eff4;
      padding-bottom: 24px;
      & > h2 {
        margin-top: 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 24px;
        & > span {
          &:first-child {
            font-size: 1rem;
          }
          &:last-child {
            font-size: 1.25rem;
          }
        }
      }
      & > .study_input-wrap {
        display: flex;
        justify-content: space-between;
        & > input {
          display: none;
          &:checked + label {
            background: #ffc845;
            color: #fff;
          }
        }
        & > label {
          width: 52px;
          height: 52px;
          background: #f0eff4;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: rgba(0, 0, 0, 0.4);
          font-size: 0.875rem;
        }
      }
      & > .weekly_date-wrap {
        display: flex;
        justify-content: space-around;
        & > input {
          display: none;
          &:checked + label {
            background: #ffc845;
            color: #fff;
          }
        }
        & > label {
          width: 52px;
          height: 52px;
          background: #f0eff4;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: rgba(0, 0, 0, 0.4);
          font-size: 0.875rem;
        }
      }
    }
    & > .coliculum-wrap {
      padding: 0 20px;
      border-bottom: 2px solid #f0eff4;
      padding-bottom: 24px;
      & > h2 {
        margin-top: 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 24px;
        & > span {
          &:first-child {
            font-size: 1rem;
          }
          &:last-child {
            font-size: 1.25rem;
          }
        }
      }
      & > div {
        & > span {
          word-break: keep-all;
          font-size: 0.875rem;
        }
      }
    }
    & > .teacher_message-wrap {
      padding: 0 20px;
      /* border-bottom: 2px solid #f0eff4; */
      padding-bottom: 24px;
      padding-top: 24px;
      margin-bottom: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      & > .img-wrap {
        min-width: 96px;
        width: 96px;
        min-height: 96px;
        margin-right: 16px;
        & > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      & > .teacher-message {
        display: flex;
        flex-direction: column;
        /* margin-bottom: 60px; */

        justify-content: center;
        /* align-items: center; */
        & > div {
          &:first-child {
            margin-bottom: 8px;
            & > span {
              font-size: 0.875rem;
              word-break: keep-all;
            }
          }
          &:last-child {
            font-size: 0.75rem;
            color: #ffc845;
          }
        }
      }
    }
    & > .btn_list {
      padding: 0 20px;
      & > button {
        display: flex;
        width: 100%;
        min-height: 48px;
        border: 0;
        background: #ffffff;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        margin-bottom: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        &:last-child {
          margin-bottom: 0;
        }
        & > svg {
          margin-right: 8px;
        }
        & > span {
          font-size: 1rem;
        }
      }
      & > a {
        display: flex;
        width: 100%;
        min-height: 48px;
        border: 0;
        background: #ffffff;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        margin-bottom: 12px;
        display: flex;
        text-decoration: none;
        justify-content: center;
        align-items: center;
        color: #000;
        &:last-child {
          margin-bottom: 0;
        }
        & > svg {
          margin-right: 8px;
        }
        & > span {
          font-size: 1rem;
        }
      }
    }
  }
`;
