import styled from "styled-components";

export const LocationSectionWrap = styled.section`
  width: 100%;

  /* min-height: 520px; */
  /* padding-bottom: 40%; */
  /* background-size: cover; */
  /* max-width: 768px; */
  /* padding-bottom: 50px; */

  background: #fff;
  padding-top: 80px;
  & > .container {
    padding: 0 20px;
    padding-bottom: 80px;
    box-sizing: border-box;
    text-align: center;
    & > h1 {
      display: flex;
      flex-direction: column;
      margin-bottom: 24px;
    }
    & > .text-wrap {
      display: flex;
      flex-direction: column;
      margin-bottom: 60px;
      & > span {
        font-size: 1rem;
      }
    }
    & > .search-wrap {
      margin-bottom: 40px;
      & > div {
        position: relative;
        & > input {
          width: 100%;
          min-height: 40px;
          border: 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        }
        & > button {
          position: absolute;
          right: 5px;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
    & > .location-wrap {
      & > h2 {
        font-size: 1.5rem;
        margin-bottom: 23px;
      }
      & > span {
        font-size: 0.875rem;
        color: #6100ff;
      }
      & > div {
        margin-top: 40px;

        & > span {
          font-size: 1.25rem;
          font-weight: 700;
        }
        & > div {
          margin-top: 19px;
          & > span {
            font-size: 1rem;
          }
        }
      }
    }
    & > .btn-group {
      margin-top: 60px;
    }
  }
`;
export const RegisterSectionWrap = styled.section`
  width: 100%;

  /* min-height: 520px; */
  /* padding-bottom: 40%; */
  /* background-size: cover; */
  /* max-width: 768px; */
  /* padding-bottom: 50px; */

  background: #fff;
  padding-top: 80px;
  & > .container {
    padding: 0 20px;
    padding-bottom: 24px;
    box-sizing: border-box;
    text-align: center;
    & > h2 {
      display: flex;
      flex-direction: column;
      margin-bottom: 24px;
    }
    & > .text-wrap {
      display: flex;
      flex-direction: column;
      margin-bottom: 40px;
      & > span {
        font-size: 1rem;
      }
    }
    & > .input-wrap {
      text-align: left;
      margin-bottom: 43px;
      &.active {
        & > div {
          & > input {
            border: 1px solid #6100ff;
          }
        }
      }
      &:last-child {
        margin-bottom: 0;
      }
      & > span {
        font-size: 1rem;
      }
      & > div {
        margin-top: 8px;
        & > input {
          width: 100%;
          min-height: 48px;
          text-align: center;
          font-size: 1rem;
          border-radius: 8px;
          border: 1px solid rgba(0, 0, 0, 0.4);
        }
      }
    }
  }
`;
