import styled, { css } from "styled-components";

export const BigButtonWrap = styled.button`
  width: 100%;
  min-height: 48px;
  background: #6100ff;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  border: 0;
  line-height: 24px;
  font-weight: 400;
  color: #fff;
  ${(props) =>
    props.disabled &&
    css`
      background: #c4c4c4 !important;
      color: rgba(0, 0, 0, 0.4);
    `}
  ${(props) =>
    props.gray &&
    css`
      background: #c9c9c9;
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
      border-radius: 8px;
      font-size: 1rem;
      line-height: 20px;
      /* identical to box height */

      text-align: center;

      /* Gray 40% */

      color: rgba(0, 0, 0, 0.4);
    `}
     ${(props) =>
    props.white &&
    css`
      background: #f4f4f4;
      border-radius: 8px;
      border-radius: 8px;
      font-size: 1rem;
      line-height: 20px;
      /* identical to box height */

      text-align: center;

      /* Gray 40% */

      color: #000;
    `}
`;
