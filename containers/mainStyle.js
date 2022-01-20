import styled from "styled-components";

export const MainWrap = styled.div`
  width: 100%;
  overflow: hidden;

  box-sizing: border-box;
  max-width: 450px;

  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 768px) {
    display: grid;

    grid-template-columns: repeat(1, 1fr);
  }
`;
export const StudyPayContainerWrap = styled.div`
  width: 100%;
  overflow: hidden;

  box-sizing: border-box;
  max-width: 450px;

  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 768px) {
    display: grid;

    grid-template-columns: repeat(1, 1fr);
  }
`;
export const ProgramWrap = styled.div`
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  max-width: 450px;

  margin: 0 auto;
  /* max-width: 360px; */
  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const DockTeacherWrap = styled.div`
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  max-width: 450px;

  margin: 0 auto;
  /* max-width: 360px; */
  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const SupportrWrap = styled.div`
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  max-width: 450px;

  margin: 0 auto;
  /* max-width: 360px; */
  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const TeacherAppliWrap = styled.div`
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  max-width: 450px;

  margin: 0 auto;
  /* max-width: 360px; */
  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const BrainDevelopWrap = styled.div`
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  max-width: 450px;

  margin: 0 auto;
  /* max-width: 360px; */
  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const QuestionWrap = styled.div`
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  /* max-width: 360px; */
  max-width: 450px;

  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const LocationWrap = styled.div`
  width: 100%;
  /* overflow: hidden; */
  box-sizing: border-box;
  max-width: 450px;

  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const MyPageWrap = styled.div`
  width: 100%;
  /* overflow: hidden; */
  box-sizing: border-box;
  max-width: 450px;

  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const ComunityContainerWrap = styled.div`
  width: 100%;
  /* overflow: hidden; */
  box-sizing: border-box;
  max-width: 450px;

  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const MyPageMenuWrap = styled.section`
  /* min-height: 100vh; */
  padding-bottom: 24px;
  background: #fff;
  & > .container {
    padding: 0 20px;
    padding-bottom: 24px;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    height: 100%;
    box-sizing: border-box;
    margin-top: 116px;
    & > h1 {
      text-align: center;
    }
    & > .setting-list {
      width: 100%;
      margin-top: 40px;
      & > .list-click {
        width: 100%;
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 16px 14px;
        box-sizing: border-box;
        border-bottom: 1px solid #f0eff4;
        justify-content: space-between;
        & > span {
          font-size: 1rem;
        }
        & > svg {
          transform: rotate(270deg);
        }
      }
    }
    & > .btn-group {
      margin-top: 110px;
      & > button {
        cursor: pointer;
        & > svg {
          margin-right: 8px;
        }
      }
    }
  }
`;

export const LocationSearchContainerWrap = styled.div`
  width: 100%;
  /* overflow: hidden; */
  box-sizing: border-box;
  max-width: 450px;

  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const ApplicationWrap = styled.div`
  width: 100%;
  overflow: hidden;

  box-sizing: border-box;
  max-width: 450px;

  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 768px) {
    display: grid;

    grid-template-columns: repeat(1, 1fr);
  }
`;

export const AppliedModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* max-width: 450px; */
  z-index: 100;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  & > .container {
    /* White */
    /* width: 80vw; */
    max-width: 450px;
    background: #ffffff;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    min-height: 295px;
    align-items: center;
    padding: 0 20px;
    padding-top: 40px;
    padding-bottom: 16px;
    box-sizing: border-box;
    & > span {
      font-size: 3.125rem;
    }
    & > h2 {
      margin-top: 40px;
      font-size: 1.25rem;
      margin-bottom: 16px;
    }
    & > .text-wrap {
      text-align: center;
      font-size: 0.875rem;
      margin-bottom: 24px;
    }
    & > .btn-group {
      display: flex;
      width: 100%;
      & > button {
        width: 100%;
        margin-right: 16px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
`;
