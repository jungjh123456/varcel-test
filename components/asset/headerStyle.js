import styled, { css } from "styled-components";

export const MainHeaderStyle = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  max-width: 450px;
  /* min-width: 450px; */
  /* width: 450px; */
  margin: 0 auto;
  /* margin-right: 5px; */
  /* margin: 0 auto; */
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-right: 16px;
  box-sizing: border-box;
  /* margin: 0 auto; */
  /* margin-left: 100%; */
  /* padding-left: 16px; */
  ${(props) =>
    props.applied &&
    css`
      padding-left: 16px;
    `}
  background: #f0eff4;
  height: 55px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  /* width: 100%; */
  & > span {
    font-size: 1rem;
  }
  & > button {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`;

export const MainLeftMenuHeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 16px;

  background: #f0eff4;
  height: 55px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  width: 100%;
  box-sizing: border-box;
  & > button {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`;
export const BackHeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 16px;
  background: #f0eff4;
  padding-left: 16px;
  height: 55px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  width: 100%;
  box-sizing: border-box;
  & > button {
    display: flex;
    width: 24px;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`;
export const SaveHeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 16px;
  background: #f0eff4;
  padding-left: 16px;
  height: 55px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  width: 100%;
  box-sizing: border-box;
  & > button {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.4);
  }
`;
