import styled from "styled-components";

export const CounSelorLocationWrap = styled.div`
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
    & > .location_list {
      display: flex;
      flex-direction: column;
      margin-bottom: 40px;
      & > span {
        font-size: 1rem;
      }
      & > .location_card {
        background: #ffffff;
        margin-top: 8px;
        /* Gray 40% */
        min-height: 48px;
        border: 1px solid rgba(0, 0, 0, 0.4);
        box-sizing: border-box;
        border-radius: 8px;
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        & > div {
          & > span {
            font-size: 1rem;
          }
        }
        & > svg {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
    & > .add_list {
      & > span {
        display: block;
        margin-bottom: 8px;
      }
      & > .add_btn {
        text-align: center;
        margin-top: 24px;
        & > button {
          min-width: 152px;
          /* Background */
          min-height: 48px;
          background: #f0eff4;
          box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
          border-radius: 8px;
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

export const DetailInfoWrap = styled.div`
  padding-bottom: 40px;
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
    & > div {
      border-bottom: 2px solid #f0eff4;
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
`;
export const StudyCheckBornInfoWrap = styled.div`
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
    & > .tody_study_schedule {
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
        & > textarea {
          resize: none;
          display: flex;
          width: 100%;
          padding: 16px;
          box-sizing: border-box;
          /* White */
          max-height: 104px;
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
    & > .tody_study_studyactive {
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
        & > textarea {
          resize: none;
          display: flex;
          width: 100%;
          padding: 16px;
          box-sizing: border-box;
          /* White */
          max-height: 176px;
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
    & > .btn-group {
      margin-top: 16px;
      padding: 0 20px;
    }
  }
`;
export const CounSelorCODCheckContainerWrap = styled.div`
  max-width: 450px;
  margin: 0 auto;
  & > .container {
    margin-top: 136px;
    text-align: center;
    padding: 0 20px;
    padding-bottom: 24px;
    & > h2 {
      font-size: 1.5rem;
      margin-bottom: 24px;
    }
    & > .text {
      display: flex;
      flex-direction: column;
      margin-bottom: 40px;
      & > span {
        font-size: 0.875rem;
      }
    }
    & > .check_input-wrap {
      & > input {
        display: none;
        &:checked + label {
          & > div {
            & > svg {
              &:first-child {
                display: none;
              }
              &:last-child {
                display: block;
              }
            }
          }
        }
      }
      & > label {
        /* border: 1px solid red; */
        display: flex;
        align-items: center;
        margin-bottom: 8px;
        & > div {
          border-radius: 50%;
          box-sizing: border-box;
          margin-right: 8px;
          & > svg {
            &:last-child {
              display: none;
            }
          }
        }
        & > span {
          font-size: 1rem;
          color: rgba(0, 0, 0, 0.4);
        }
      }
    }
    & > .btn-group {
      margin-top: 250px;
      & > button {
        font-size: 1rem;
        background: #ff9a28;
      }
    }
  }
`;

export const ClassReviewChahum3ContainerWrap = styled.div`
  max-width: 450px;
  margin: 0 auto;
  & > .container {
    margin-top: 96px;
    padding-bottom: 24px;
    & > .grid2 {
      margin-bottom: 40px;
      padding: 0 20px;
      box-sizing: border-box;
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
      & > div {
        background: #f0eff4;
        padding: 12px 8px;
        box-sizing: border-box;
        margin-top: 24px;
        & > span {
          font-size: 0.75rem;
          word-break: keep-all;
        }
      }
    }
    & > .parent_opinion-wrap {
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
      & > textarea {
        width: 100%;
        padding: 16px;
        resize: none;
        box-sizing: border-box;
        font-size: 0.875rem;
        font-family: "Spoqa Han Sans Neo";
        &::-webkit-input-placeholder {
          color: rgba(0, 0, 0, 0.4);
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
    & > .btn-group {
      padding: 0 20px;
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
    margin-top: 96px;
    & > .grid2 {
      margin-bottom: 40px;
      padding: 0 20px;
      box-sizing: border-box;
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
        color: #ff9a28;
      }
      & > div {
        background: #f0eff4;
        padding: 12px 8px;
        box-sizing: border-box;
        margin-top: 24px;
        & > span {
          font-size: 0.75rem;
          word-break: keep-all;
        }
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
          background: none;
          border: 0;
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
    & > .phygical-wrap {
      width: 100%;
      /* min-height: 393px; */
      /* background: #eff4ff; */
      /* padding: 24px 39px; */
      box-sizing: border-box;
      margin-top: 21px;
      border-top: 2px solid #f0eff4;
      margin-bottom: 40px;
      padding: 0 20px;
      padding-top: 29px;
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
      & > .phygical-check-wrap {
        display: flex;
        justify-content: space-around;
        margin-top: 24px;
        /* margin-bottom: 32px; */
        & > input {
          display: none;
          &:checked + label {
            & > div {
              /* background: #002c9d; */
              & > span {
                color: #ff9a28;
              }
            }
            & > svg {
              & > circle {
                fill: #ff9a28;
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
                strokeopacity: 1;
              }
            }
            & > span {
              color: #ff9a28;
            }
          }
        }
        & > label {
          display: flex;

          /* min-width: 80px; */
          flex-direction: column;
          align-items: center;
          /* justify-content: center; */
          box-sizing: border-box;
          & > div {
            margin-top: 16px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 40px;
            max-height: 40px;
            & > span {
              font-size: 0.875rem;

              color: rgba(0, 0, 0, 0.4);
            }
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
                strokeopacity: 1;
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

export const ClassReviewChahum2ContainerWrap = styled.div`
  max-width: 450px;
  margin: 0 auto;
  & > .container {
    margin-top: 40px;
    padding-bottom: 24px;
    & > .grid2 {
      margin-bottom: 40px;
      padding: 0 20px;
      box-sizing: border-box;
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
        color: #ff9a28;
      }
      & > div {
        background: #f0eff4;
        padding: 12px 8px;
        box-sizing: border-box;
        margin-top: 24px;
        & > span {
          font-size: 0.75rem;
          word-break: keep-all;
        }
      }
    }
    & > .parent_opinion-wrap {
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
      & > textarea {
        width: 100%;
        padding: 16px;
        resize: none;
        box-sizing: border-box;
        font-size: 0.875rem;
        font-family: "Spoqa Han Sans Neo";
        &::-webkit-input-placeholder {
          color: rgba(0, 0, 0, 0.4);
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
    & > .btn-group {
      padding: 0 20px;
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
