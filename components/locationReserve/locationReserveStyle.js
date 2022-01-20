import styled from "styled-components";

export const LocationReservationInfoWrap = styled.div`
  height: 100vh;
  & > .container {
    padding: 0 20px;
    padding-bottom: 24px;
    box-sizing: border-box;
    & > .progress {
      margin-top: 24px;
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
      position: relative;
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

export const VisitConsiderationsWrap = styled.div`
  height: 100vh;
  & > .container {
    padding: 0 20px;
    min-height: 100%;
    padding-bottom: 24px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

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
      /* margin-top: 133px; */
    }
  }
`;

export const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  & > .container {
    width: 80vw;
    background: #fff;
    min-height: 331px;
    border-radius: 8px;
    padding: 16px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    & > span {
      display: block;
      margin-top: 40px;
      margin-bottom: 40px;
      font-size: 3.125rem;
    }
    & > div {
      & > h2 {
        font-size: 1.25rem;
        text-align: center;
        margin-bottom: 16px;
      }
      & > div {
        text-align: center;
        margin-bottom: 24px;
        & > span {
          font-size: 0.875rem;
        }
      }
    }
  }
`;
