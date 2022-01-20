import styled from "styled-components";

export const BabyInfoWrap = styled.div`
  background: #fff;
  & > .container {
    padding-bottom: 24px;
    & > .progress {
      padding: 0 20px;

      margin-top: 80px;
      margin-bottom: 40px;
    }
    & > h1 {
      font-size: 1.5rem;
      padding: 0 20px;

      text-align: center;
      margin-bottom: 40px;
    }
    & > .input-wrap {
      margin-bottom: 16px;
      padding: 0 20px;

      & > span {
        display: block;
        margin-bottom: 8px;
      }
      & > .date_picker {
        position: relative;
        & > label {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 1rem;
          color: rgba(0, 0, 0, 0.4);
        }
      }
    }
    & > .radio-check {
      margin-bottom: 40px;
      padding: 0 20px;

      & > span {
        font-size: 1rem;
      }
      & > .radio_group {
        margin-top: 16px;
        display: flex;
        justify-content: space-around;
      }
    }
    & > .homeTeaching_reason-wrap {
      margin-bottom: 40px;
      padding: 0 20px;

      & > h3 {
        font-size: 1rem;
        font-weight: 400;
        margin-bottom: 8px;
      }
      & > span {
        font-size: 0.75rem;
        color: rgba(0, 0, 0, 0.4);
      }
      & > .check_input-group {
        margin-top: 16px;
        & > div {
          margin-bottom: 8px;
        }
      }
    }
    & > .sibling_two {
      border-top: 2px solid #f0eff4;
      padding-top: 40px;
      & > .input-wrap {
        margin-bottom: 16px;
        padding: 0 20px;

        & > span {
          display: block;
          margin-bottom: 8px;
        }
      }
      & > .radio-check {
        margin-bottom: 40px;
        padding: 0 20px;

        & > span {
          font-size: 1rem;
        }
        & > .radio_group {
          margin-top: 16px;
          display: flex;
          justify-content: space-around;
        }
      }
    }
    & > .btn-group {
      padding: 0 20px;
    }
  }
`;

export const ApplicationModalWrap = styled.div`
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

export const ApplicationTwinModalWrap = styled.div`
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
    }
  }
`;
export const ProgramCheckPageWrap = styled.div`
  & > .container {
    padding: 0 20px;
    padding-bottom: 24px;
    & > .progress {
      margin-top: 80px;
      margin-bottom: 40px;
    }
    & > h1 {
      font-size: 1.5rem;
      text-align: center;
      margin-bottom: 40px;
    }
    & > .progrem_check-wrap {
      & > input {
        display: none;
        &:checked + label {
          /* background: #6100ff; */
          border: 2px solid #6100ff;
          box-sizing: border-box;
          & > svg {
            display: block;
          }
          & > div {
            /* color: #fff; */
          }
        }
      }
      & > label {
        display: flex;
        flex-direction: column;
        min-height: 240px;
        background: #f0eff4;

        margin-bottom: 16px;
        /* padding: 24px 16px 12px 16px; */
        padding-top: 24px;
        box-sizing: border-box;
        border-radius: 8px;
        position: relative;
        justify-content: space-between;
        & > svg {
          position: absolute;
          right: 14px;
          top: 14px;
          display: none;
        }
        & > div {
          &:nth-child(2) {
            margin-bottom: 20px;
            & > h2 {
              font-size: 1.25rem;
              margin-bottom: 4px;
              text-align: center;
            }
            & > span {
              display: flex;
              font-size: 1rem;
              color: #6100ff;
              justify-content: center;
              text-align: center;
            }
          }
        }
      }
    }
    & > .btn-group {
      margin-top: 40px;
    }
  }
`;

export const ProgramPurposePageWrap = styled.div`
  & > .container {
    padding: 0 20px;
    padding-bottom: 24px;
    & > .progress {
      margin-top: 80px;
      margin-bottom: 40px;
    }
    & > h1 {
      font-size: 1.5rem;
      text-align: center;
      margin-bottom: 40px;
    }
    & > .progrem_check-wrap {
      & > input {
        display: none;
        &:checked + label {
          /* background: #6100ff; */
          border: 2px solid #6100ff;
          box-sizing: border-box;
          & > svg {
            display: block;
          }
          & > div {
            /* color: #fff; */
          }
        }
      }
      & > label {
        display: flex;
        flex-direction: column;
        min-height: 240px;
        background: #f0eff4;

        margin-bottom: 16px;
        /* padding: 24px 16px 12px 16px; */
        padding-top: 24px;
        box-sizing: border-box;
        border-radius: 8px;
        position: relative;
        justify-content: space-between;
        &:last-child {
          min-height: 80px;
          background: none;
          padding-top: 0 !important;
          & > div {
            & > span {
              color: #000 !important;
            }
          }
        }
        & > svg {
          position: absolute;
          right: 14px;
          top: 14px;
          display: none;
        }
        & > div {
          &:nth-child(2) {
            margin-bottom: 20px;
            & > h2 {
              font-size: 1.25rem;
              margin-bottom: 4px;
              text-align: center;
            }
            & > span {
              display: flex;
              font-size: 1rem;
              color: #6100ff;
              justify-content: center;
              text-align: center;
            }
          }
        }
      }
    }
    & > .btn-group {
      margin-top: 40px;
    }
  }
`;

export const ProgramStatusPageWrap = styled.div`
  & > .container {
    padding: 0 20px;
    padding-bottom: 24px;
    & > .progress {
      margin-top: 80px;
      margin-bottom: 40px;
    }
    & > h1 {
      font-size: 1.5rem;
      text-align: center;
      margin-bottom: 40px;
    }
    & > .lanaguge_status-wrap {
      display: flex;
      flex-direction: column;
      &:nth-child(4) {
        margin-top: 24px;
      }
      & > span {
        font-size: 1rem;
        margin-bottom: 16px;
      }
      & > textarea {
        resize: none;
        padding: 16px;
        box-sizing: border-box;
        /* Background */

        background: #f0eff4;
        /* Gray 40% */

        border: 1px solid rgba(0, 0, 0, 0.4);
        box-sizing: border-box;
        border-radius: 8px;
        font-family: "Spoqa Han Sans Neo";
        font-size: 0.875rem;
        outline: #6100ff;
        &:focus {
          border: 0;
          border: 1px solid #6100ff !important;
        }
        &::-webkit-input-placeholder {
          color: rgba(0, 0, 0, 0.4);
        }
      }
    }
    & > .btn-group {
      margin-top: 40px;
    }
  }
`;

export const VisitWrap = styled.div`
  height: 100vh;
  & > .container {
    padding: 0 20px;
    min-height: 100%;
    padding-bottom: 24px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    /* justify-content: space-around; */

    & > .wrap {
      & > .progress {
        margin-top: 80px;
      }
      & > h1 {
        font-size: 1.5rem;
        text-align: center;
        margin-top: 40px;
        margin-bottom: 40px;
      }
      & > .drop_down {
        margin-bottom: 40px;
        & > span {
          display: block;
          font-size: 1rem;
          margin-bottom: 8px;
        }
      }
      & > .is_dog {
        margin-bottom: 40px;
        & > span {
          display: block;
          font-size: 1rem;
          margin-bottom: 16px;
        }
        & > div {
          display: flex;
          justify-content: space-around;
        }
      }
    }
    & > .btn-group {
      margin-top: 133px;
    }
  }
`;

export const ProgramStudyDatePageWrap = styled.div`
  & > .container {
    padding: 0 20px;
    padding-bottom: 24px;
    & > .progress {
      margin-top: 80px;
      margin-bottom: 40px;
    }
    & > h1 {
      font-size: 1.5rem;
      text-align: center;
      margin-bottom: 40px;
    }
    & > .text-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 24px;
      & > span {
        font-size: 1rem;
      }
    }
    & > span {
      display: block;
      text-align: center;
      font-size: 0.75rem;
      margin-bottom: 8px;
      color: #6100ff;
    }
    & > .btn-group {
      margin-top: 40px;
    }
  }
`;

export const CostPayContainerWrap = styled.div`
  & > .container {
    /* padding: 0 20px; */
    padding-bottom: 24px;
    & > .progress {
      margin-top: 80px;
      padding: 0 20px;
      margin-bottom: 40px;
    }
    & > h1 {
      font-size: 1.5rem;
      text-align: center;
      margin-bottom: 24px;
    }
    & > .talk-btn {
      display: flex;
      justify-content: center;
      margin-bottom: 40px;
      & > button {
        max-width: 152px;
        min-height: 36px;
      }
    }
    & > .program_wrap {
      border-top: 2px solid #f0eff4;
      padding: 0 20px;
      padding-bottom: 40px;
      /* border-bottom: 2px solid #f0eff4; */
      & > h2 {
        margin-top: 40px;
        font-size: 1.25rem;
        margin-bottom: 24px;
      }
      & > div {
        & > div {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
          &:last-child {
            margin-bottom: 0;
          }
          & > span {
            &:first-child {
              font-size: 1rem;
              color: rgba(0, 0, 0, 0.4);
            }
            &:last-child {
              font-size: 1rem;
              color: #000;
            }
          }
        }
      }
    }
    & > .cost_info {
      border-top: 2px solid #f0eff4;
      padding: 0 20px;
      padding-bottom: 40px;
      border-bottom: 2px solid #f0eff4;
      & > h2 {
        margin-top: 40px;
        font-size: 1.25rem;
        margin-bottom: 24px;
      }
      & > div {
        & > div {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
          &:last-child {
            margin-bottom: 0;
            & > span {
              &:last-child {
                /* color: red !important; */
                font-size: 1.25rem;
                font-weight: 700;
              }
            }
          }
          & > span {
            &:first-child {
              font-size: 1rem;
              color: rgba(0, 0, 0, 0.4);
            }
            &:last-child {
              font-size: 1rem;
              color: #000;
            }
          }
        }
      }
    }
    & > .cost_way {
      padding: 0 20px;
      padding-bottom: 40px;
      border-bottom: 2px solid #f0eff4;
      & > h2 {
        margin-top: 40px;
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: 24px;
      }
      & > div {
        display: flex;
        flex-direction: column;
        & > input {
          display: none;
          &:checked + label {
            background: #6100ff;
            box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
            border-radius: 8px;
            color: #ffffff;
          }
        }
        & > label {
          background: #ffffff;
          min-height: 48px;
          box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
          border-radius: 8px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 12px;
          font-size: 1rem;
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
    & > .check_list {
      padding: 44px 28px 0 28px;
      & > input {
        display: none;
        &:checked + label {
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
      & > label {
        display: flex;
        align-items: center;
        margin-bottom: 8px;
        font-size: 0.875rem;
        & > svg {
          margin-right: 8px;
          &:last-child {
            display: none;
          }
        }
      }
      & > div {
        display: flex;
        flex-direction: column;
        & > input {
          display: none;
          &:checked + label {
            & > div {
              & > svg {
                & > path {
                  fill: #6100ff;
                  fillopacity: 1;
                }
              }
            }
          }
        }
        & > label {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.875rem;
          color: rgba(0, 0, 0, 0.4);
          margin-bottom: 8px;
          &:last-child {
            margin-bottom: 0;
          }
          & > div {
            display: flex;
            align-items: center;
          }
        }
      }
    }
    & > .btn-group {
      padding: 0 20px;
      margin-top: 40px;
    }
  }
`;
export const LastContainerWrap = styled.div`
  & > .container {
    padding: 0 20px;
    padding-bottom: 24px;
    & > span {
      display: block;
      margin-top: 196px;
      text-align: center;
      font-size: 3.125rem;
      margin-bottom: 40px;
    }
    & > h1 {
      text-align: center;
      font-size: 1.5rem;
      margin-bottom: 24px;
    }
    & > .text-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 1rem;
    }
    & > .btn-group {
      margin-top: 188px;
      & > a {
        display: flex;
        min-height: 48px;
        justify-content: center;
        align-items: center;
        background: #6100ff;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        text-decoration: none;
        font-size: 1rem;
        color: #fff;
      }
    }
  }
`;
export const CureLogPageWrap = styled.div`
  & > .container {
    padding: 0 20px;
    padding-bottom: 24px;
    & > .progress {
      margin-top: 80px;
      margin-bottom: 40px;
    }
    & > h1 {
      font-size: 1.5rem;
      text-align: center;
      margin-bottom: 40px;
    }

    & > .cure_check {
      margin-bottom: 40px;

      & > span {
        font-size: 1rem;
      }
      & > div {
        margin-top: 16px;
        display: flex;
        justify-content: space-around;
      }
    }
    & > .cure_check-yes_checkbox {
      margin-bottom: 40px;
      display: flex;
      flex-direction: column;
      & > span {
        font-size: 1rem;
        &.sub_title {
          margin-top: 8px;
          color: rgba(0, 0, 0, 0.4);
          font-size: 0.75rem;
        }
      }
      & > div {
        margin-top: 16px;
        & > div {
          margin-bottom: 12px;
        }
      }
    }
    & > .cure_check-yes {
      margin-bottom: 40px;
      display: flex;
      flex-direction: column;
      & > span {
        font-size: 1rem;
        &.sub_title {
          margin-top: 8px;
          color: rgba(0, 0, 0, 0.4);
          font-size: 0.75rem;
        }
      }
      & > div {
        margin-top: 16px;
        & > input {
          display: flex;
          width: 100%;
          min-height: 48px;
          /* White */
          text-align: center;
          background: #ffffff;
          /* Gray 40% */

          border: 1px solid rgba(0, 0, 0, 0.4);
          box-sizing: border-box;
          border-radius: 8px;
          font-size: 1rem;
          color: #000;
          margin-top: 8px;
          &::-webkit-input-placeholder {
            color: rgba(0, 0, 0, 0.4);
          }
        }
      }
    }
    & > .cure_check-textarea {
      margin-bottom: 40px;
      display: flex;
      flex-direction: column;
      & > span {
        font-size: 1rem;
        &.sub_title {
          margin-top: 8px;
          color: rgba(0, 0, 0, 0.4);
          font-size: 0.75rem;
        }
      }
      & > div {
        margin-top: 16px;
        & > textarea {
          display: flex;
          width: 100%;
          min-height: 120px;
          /* White */
          /* text-align: center; */
          background: #ffffff;
          /* Gray 40% */
          font-family: "Spoqa Han Sans Neo";
          border: 1px solid rgba(0, 0, 0, 0.4);
          padding: 16px;
          box-sizing: border-box;
          border-radius: 8px;
          font-size: 1rem;
          color: #000;
          margin-top: 8px;
          &::-webkit-input-placeholder {
            color: rgba(0, 0, 0, 0.4);
          }
        }
      }
    }
    & > .btn-group {
      margin-top: 107px;
    }
  }
`;
export const CureLogPageWrap2 = styled.div`
  & > .container {
    padding: 0 20px;
    padding-bottom: 24px;
    & > .progress {
      margin-top: 80px;
      margin-bottom: 40px;
    }
    & > h1 {
      font-size: 1.5rem;
      text-align: center;
      margin-bottom: 40px;
    }

    & > .cure_check {
      & > span {
        font-size: 1rem;
      }
      & > div {
        margin-top: 16px;
        & > textarea {
          width: 100%;
          min-height: 180px;

          /* Background */

          background: #f0eff4;
          /* Gray 40% */

          border: 1px solid rgba(0, 0, 0, 0.4);
          padding: 16px;
          box-sizing: border-box;
          border-radius: 8px;
          font-family: "Spoqa Han Sans Neo";
          font-size: 0.875rem;
          color: #000;
          &::-webkit-input-placeholder {
            color: rgba(0, 0, 0, 0.4);
          }
        }
      }
    }
    & > .btn-group {
      margin-top: 135px;
    }
  }
`;

export const CostPayPrependingWrap = styled.div`
  & > .container {
    margin-top: 54px;
    padding-bottom: 128px;
    box-sizing: border-box;
    & > .img_wrap {
      /* margin-bottom: 40px; */
      background: #ffc845;
      height: 100%;
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      padding: 16px 28px;
      box-sizing: border-box;
      margin-bottom: 40px;
      & > div {
        width: 100%;
        height: 100%;
        border: 10px solid #ffffff;
        /* display: flex; */
        padding-top: 24px;
        box-sizing: border-box;
        & > h2 {
          text-align: center;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 8px;
        }
        & > .text-wrap {
          background: #2980ff;
          border-radius: 4px;
          width: fit-content;
          min-width: 108px;
          min-height: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 4px 6px;
          box-sizing: border-box;
          text-align: center;
          margin: 0 auto;
          margin-bottom: -70px;
          & > span {
            font-size: 0.75rem;
            color: #fff;
          }
        }
        position: relative;
        & > .imgs {
          /* max-width: 360px; */
          /* width: 360px; */
          /* height: 242px; */
          /* height: 100%; */

          & > img {
            width: 100%;
            height: 100%;
            border: 1px solid red;

            /* max-height: 242px; */
            object-fit: cover;
          }
        }
      }
    }
    & > .study_info {
      border-bottom: 2px solid #f4f4f4;
      padding: 0 20px;
      padding-bottom: 24px;
      box-sizing: border-box;
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
        display: flex;
        flex-direction: column;
        & > div {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
          &:last-child {
            margin-bottom: 0;
          }
          & > span {
            &:first-child {
              font-size: 0.875rem;
              color: rgba(0, 0, 0, 0.4);
            }
            &:last-child {
              font-size: 0.875rem;
            }
          }
        }
      }
    }
    & > .list_style {
      padding: 0 20px;
      padding-top: 24px;

      & > input {
        display: none;
        &:checked + label {
          border-bottom: 2px solid #6100ff;
          color: #6100ff;
        }
      }
      display: flex;
      & > label {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding-bottom: 8px;
        box-sizing: border-box;
        margin-right: 16px;
        font-size: 1rem;
        font-weight: 700;
        color: rgba(0, 0, 0, 0.4);
        &:last-child {
          margin-right: 0;
        }
      }
    }
    & > .children_way {
      padding: 0 20px;
      padding-top: 40px;
      padding-bottom: 80px;
      & > h3 {
        font-size: 1.5rem;
        text-align: center;
        font-weight: 700;
        margin-bottom: 40px;
        word-break: keep-all;
      }
      & > div {
        & > div {
          min-height: 36px;
          display: flex;
          justify-content: center;
          align-items: center;
          & > span {
            font-size: 0.875rem;
          }
          margin-bottom: 16px;
          &:last-child {
            margin-bottom: 0;
          }
          &:nth-child(2n + 1) {
            background: #2980ff;
            border-radius: 8px 8px 8px 0px;
            color: #fff;
          }
          &:nth-child(2n) {
            background: #ffc845;
            border-radius: 8px 8px 0px 8px;
          }
        }
      }
    }
    & > .brain_develop {
      /* margin-top: 80px; */
      /* display: flex; */
      /* flex-direction: column; */
      /* padding-bottom: 60px; */

      height: 100%;
      padding: 0 20px;
      padding-bottom: 80px;
      padding-top: 80px;
      background: #f4f4f4;
      box-sizing: border-box;
      & > h2 {
        /* margin-top: 80px; */
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 24px;
        font-size: 1.5rem;
        & > span {
          & > span {
            color: #6100ff;
          }
        }
      }
      & > .text_gae {
        display: flex;
        flex-direction: column;
        align-items: center;
        & > span {
          font-size: 1rem;
          & > span {
            color: #6100ff;
          }
        }
      }
      & > .imgwrap {
        margin-top: 40px;
      }
    }
    & > .children_baldal {
      margin-top: 80px;
      padding: 0 20px;
      box-sizing: border-box;
      & > h3 {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 60px;
      }
      & > div {
        margin-bottom: 80px;
        text-align: center;
        & > div {
          /* display: flex; */
          & > svg {
            margin-top: 20px;
            margin-bottom: 16px;
          }
          & > div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            & > span {
              font-size: 0.875rem;
            }
          }
        }
      }
    }
    & > .review_wrap {
      background: #f4f4f4;
      padding: 0 20px;
      padding-top: 80px;
      padding-bottom: 80px;
      box-sizing: border-box;
      & > h3 {
        text-align: center;
        display: flex;
        flex-direction: column;
        margin-bottom: 60px;
        & > span {
          font-size: 1.5rem;
          &:last-child {
            color: #6100ff;
          }
        }
      }
      & > .review_list {
        & > .card {
          background: #fff;
          padding: 16px 12px;
          box-sizing: border-box;
          margin-bottom: 24px;
          &:last-child {
            margin-bottom: 0;
          }
          & > div {
            &:first-child {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding-bottom: 6px;
              border-bottom: 1px solid rgba(0, 0, 0, 0.4);
              & > span {
                &:first-child {
                  font-size: 1rem;
                }
                &:last-child {
                  /* Purple */
                  min-width: 92px;
                  min-height: 24px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  background: #6100ff;
                  border-radius: 6px;
                  font-size: 0.875rem;
                  color: #fff;
                }
              }
            }
            &:last-child {
              margin-top: 16px;
              & > span {
                font-size: 0.875rem;
              }
            }
          }
        }
      }
    }
    & > .bakdal_rank {
      /* padding: 0 20px; */
      margin-top: 80px;
      padding-bottom: 80px;
      & > h2 {
        & > span {
          font-size: 1.5rem;
          font-weight: 700;
        }
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
            & > div {
              &:first-child {
                & > div {
                  & > span {
                    &:first-child {
                      /* color: #6100ff; */
                    }
                    &:last-child {
                      /* color: #000; */
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
    & > .study_way-wrap {
      /* padding: 0 20px; */
      /* padding-bottom: 80px; */
      /* Background */

      background: #f4f4f4;
      box-sizing: border-box;
      padding-top: 80px;
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
        & > span {
          &:first-child {
            color: #6100ff;
          }
        }
      }
      & > .study_way {
        text-align: center;
        margin-bottom: 40px;
        &:last-child {
          margin-bottom: 0;
        }
        & > h3 {
          font-size: 1.25rem;
          font-weight: 700;
          display: flex;
          flex-direction: column;
          padding: 0 20px;
          word-break: keep-all;
          & > span {
            &:first-child {
              margin-bottom: 24px;
            }
          }
        }
        & > div {
          margin-top: 8px;
          margin-bottom: 24px;
          padding: 0 20px;
          display: flex;
          flex-direction: column;
          & > span {
            font-size: 1rem;
            word-break: keep-all;
          }
        }
      }
    }
    & > .notice {
      padding: 0 20px;
      padding-top: 80px;
      & > h3 {
        text-align: center;
        font-size: 1.5rem;
        margin-bottom: 40px;
        font-weight: 700;
      }
      & > .one {
        margin-bottom: 24px;
        & > span {
          display: flex;
          width: 24px;
          height: 24px;
          background: #6100ff;
          border-radius: 4px;
          color: #fff;
          justify-content: center;
          align-items: center;
          font-weight: 700;
          font-size: 1rem;
          margin-bottom: 12px;
        }

        & > div {
          display: flex;
          flex-direction: column;

          & > span {
            font-size: 0.875rem;
            &:first-child {
              font-size: 1rem;
              font-weight: 700;
              margin-bottom: 12px;
            }
          }
        }
      }
      & > .two {
        margin-bottom: 24px;
        & > span {
          display: flex;
          width: 24px;
          height: 24px;
          background: #6100ff;
          border-radius: 4px;
          color: #fff;
          justify-content: center;
          align-items: center;
          font-weight: 700;
          font-size: 1rem;
          margin-bottom: 12px;
        }

        & > div {
          display: flex;
          flex-direction: column;
          & > span {
            font-size: 1rem;
            font-weight: 700;
            margin-bottom: 12px;
          }

          & > div {
            margin-top: 16px;
            & > span {
              font-size: 0.875rem;
              word-break: keep-all;
            }

            display: flex;
            flex-direction: column;
          }
        }
      }
    }
    & > .btn-group {
      position: fixed;
      max-width: 450px;
      margin: 0 auto;
      bottom: 20px;
      left: 0px;
      right: 0px;
      padding: 0 20px;
    }
  }
`;
