import styled from "styled-components";

export const ApplicationContainerWrap = styled.div`
  height: 100vh;
  overflow: auto;
  & > .container {
    padding: 0 20px;
    padding-bottom: 24px;
    box-sizing: border-box;
    & > .progress {
      margin-top: 80px;
    }
    & > h1 {
      font-size: 1.5rem;
      text-align: center;
      margin-top: 40px;
      margin-bottom: 40px;
    }
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
        & > svg {
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
    & > .btn-group {
      margin-top: 40px;
    }
  }
`;

export const StudyOkWrap = styled.div`
  height: 100vh;
  & > .container {
    height: 100%;
    /* border: 1px solid red; */
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    & > .text {
      & > h1 {
        font-size: 1.5rem;
        margin-bottom: 24px;
        text-align: center;
      }
      & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        & > span {
          font-size: 1rem;
          word-break: keep-all;
        }
      }
    }
    & > .btn-wrap {
      position: absolute;
      bottom: 24px;
      max-width: 450px;
      left: 20px;
      right: 20px;
    }
  }
`;
