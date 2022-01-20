import styled from "styled-components";

export const QuestionSectionWrap = styled.section`
  /* height: 100vh; */
  /* height: 100%; */
  /* max-width: 360px;
  max-width: 360px; */
  /* min-height: 1374px; */
  width: 100%;
  /* margin: 0 auto; */
  background: #fff;
  overflow: hidden;
  position: relative;
  padding-bottom: 80px;
  & > .container {
    margin-top: 116px;
    /* display: flex; */
    /* flex-direction: column; */
    /* padding-bottom: 60px; */

    /* height: 100%; */
    padding: 0 20px;

    box-sizing: border-box;
    & > h1 {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    & > .text-wrap {
      margin-top: 24px;
      margin-bottom: 60px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    & > .tab_style {
      /* overflow-x: scroll; */

      text-align: center;
      box-sizing: border-box;
      overflow-x: scroll;
      & > div {
        display: flex;
        /* justify-content: space-between; */
        justify-content: center;
        align-items: center;
        text-align: center;
        max-width: 380px;
        overflow-x: auto;
        min-width: 380px;
        overflow-x: scroll;
        & > input {
          display: none;
          &:checked + label {
            color: #6100ff;
            border-bottom: 2px solid #6100ff;
          }
        }
        & > label {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;

          /* word-wrap: nowrap; */
          padding-bottom: 8px;
          /* overflow: auto; */
          color: rgba(0, 0, 0, 0.4);
          font-size: 1rem;
          margin-right: 12px;
          word-break: keep-all;
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
    & > .question-wrap {
      margin-top: 40px;
    }
  }
`;
