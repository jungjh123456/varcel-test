import styled from "styled-components";

export const CheckTableWrap = styled.div`
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  & > table {
    width: 100%;
    & > thead {
      & > tr {
        & > th {
          width: 37px;
          height: 47px;
          font-size: 0.875rem;
          &:first-child {
            /* max-width: 56px; */
            min-width: 56px !important;
            /* width: 56px; */
          }
        }
      }
    }
    & > tbody {
      & > tr {
        & > th {
          /* min-width: 56px; */
          /* width: 56px; */
          height: 47px;

          box-sizing: border-box;
          /* border: 1px solid red; */
          & > div {
            display: flex;
            flex-direction: column;
            position: relative;
            justify-content: space-between;

            height: 100%;
            & > span {
              font-size: 0.875rem;
              &:first-child {
                position: absolute;
                top: -10px;
                left: 50%;
                transform: translateX(-50%);
              }
              &:nth-child(2) {
                position: absolute;
                top: 40px;
                left: 50%;
                transform: translateX(-50%);
              }
              &:nth-child(3) {
                position: absolute;
                top: 92px;
                left: 50%;
                transform: translateX(-50%);
              }
              &:nth-child(4) {
                position: absolute;
                top: 145px;
                left: 50%;
                transform: translateX(-50%);
              }
              &:nth-child(5) {
                position: absolute;
                top: 195px;
                left: 50%;
                transform: translateX(-50%);
              }
              &:nth-child(6) {
                position: absolute;
                top: 245px;
                left: 50%;
                transform: translateX(-50%);
              }
              &:nth-child(7) {
                position: absolute;
                bottom: -5px;
                left: 50%;
                transform: translateX(-50%);
              }
            }
          }
        }
        & > td {
          max-width: 37px;
          height: 47px;
          min-height: 47px;
          max-height: 47px;
          background: #f0eff4;
          & > input {
            display: none;
            &:checked + label {
              background: #6100ff;
            }
          }
          & > label {
            display: block;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            /* background: #6100ff; */
          }
        }
      }
    }
  }
`;
