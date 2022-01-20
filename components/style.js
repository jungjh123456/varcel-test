import styled from "styled-components";

export const SlugWrap = styled.div`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid red;
  color: red;
  & > div {
    border: 1px solid red;

    display: flex;
    flex-direction: column;
    & > span {
      border: 1px solid red;
    }
  }
`;
