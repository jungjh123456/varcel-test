import styled from "styled-components";

export const TeacherSection1Wrap = styled.section`
  /* height: 100vh; */
  /* height: 100%; */
  /* max-width: 360px;
  max-width: 360px; */

  width: 100%;
  /* margin: 0 auto; */
  display: flex;

  background: #fff;
  /* background: #f0eff4 url("/imgs/sectionBgs.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center 90%; */
  position: relative;
  & > .container {
    margin-top: 116px;

    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    padding-bottom: 60px;
    box-sizing: border-box;
    & > h1 {
      font-size: 1.5rem;
      margin-bottom: 24px;
    }
    & > .hello-teacher-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 40px;
    }
    & > .info-text {
      width: 100%;

      & > h2 {
        text-align: center;
        font-size: 1.25rem;
        margin-bottom: 24px;
      }
      & > div {
        margin-bottom: 49px;
        &:last-child {
          margin-bottom: 0;
        }
        &.check_gender {
          & > div {
            display: flex;
            & > input {
              display: none;
              &:checked + label {
                background: #6100ff;
                box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
                border-radius: 8px;
                color: #fff;
              }
            }
            & > label {
              display: flex;
              min-height: 48px;
              border-radius: 8px;
              justify-content: center;
              align-items: center;
              margin-right: 16px;
              font-size: 1rem;
              color: rgba(0, 0, 0, 0.4);
              background: #f0eff4;
              box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
              border-radius: 8px;
              &:last-child {
                margin-right: 0;
              }
              /* border: 1px solid rgba(0, 0, 0, 0.4); */
              width: 100%;
            }
          }
        }
        & > span {
          font-size: 1rem;
        }
        & > div {
          margin-top: 8px;
          & > input {
            width: 100%;
            box-sizing: border-box;
            min-height: 48px;
            text-align: center;
            border-radius: 8px;
            border: 1px solid rgba(0, 0, 0, 0.4);
            color: #000;
            font-size: 1rem;
            &::-webkit-input-placeholder {
              color: rgba(0, 0, 0, 0.4);
            }
          }
        }
      }
    }
  }
`;
export const TeacherSection2Wrap = styled.section`
  /* height: 100vh; */
  /* height: 100%; */
  /* max-width: 360px;
  max-width: 360px; */

  width: 100%;
  /* margin: 0 auto; */
  display: flex;

  background: #f0eff4;
  /* background: #f0eff4 url("/imgs/sectionBgs.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center 90%; */
  position: relative;
  & > .container {
    margin-top: 60px;

    width: 100%;
    /* padding-bottom: 60px; */
    /* align-items: center; */
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    padding-bottom: 80px;
    box-sizing: border-box;
    & > h2 {
      font-size: 1.5rem;
      margin-bottom: 24px;
      text-align: center;
    }
    & > .teacher_info-wrap {
      margin-bottom: 40px;

      & > h3 {
        font-weight: 400;
        font-size: 1rem;
      }
      & > span {
        font-size: 0.75rem;
      }
      & > div {
        margin-top: 24px;
        & > div {
          margin-bottom: 15px;
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
    & > .text_field {
      margin-bottom: 40px;
      &:last-child {
        margin-bottom: 0;
      }
      & > span {
        font-size: 1rem;
      }
      & > div {
        margin-top: 16px;
        & > textarea {
          resize: none;
          width: 100%;
          min-height: 240px;
          padding: 16px;
          box-sizing: border-box;
          font-size: 0.875rem;
          font-family: "Spoqa Han Sans Neo", sans-serif;
          border-radius: 8px;
          background: #fff;
          border: 1px solid rgba(0, 0, 0, 0.4);
          &::-webkit-input-placeholder {
            color: rgba(0, 0, 0, 0.4);
          }
        }
      }
    }
  }
`;
export const TeacherSection3Wrap = styled.section`
  /* height: 100vh; */
  /* height: 100%; */
  /* max-width: 360px;
  max-width: 360px; */

  width: 100%;
  /* margin: 0 auto; */
  display: flex;

  background: #fff;
  /* background: #f0eff4 url("/imgs/sectionBgs.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center 90%; */
  position: relative;
  & > .container {
    margin-top: 60px;

    width: 100%;
    /* padding-bottom: 60px; */
    /* align-items: center; */
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    padding-bottom: 80px;
    box-sizing: border-box;
    & > h2 {
      font-size: 1.5rem;
      margin-bottom: 24px;
      text-align: center;
    }
    & > .text_field {
      margin-bottom: 40px;
      &:last-child {
        margin-bottom: 0;
      }
      & > span {
        font-size: 1rem;
      }
      & > div {
        margin-top: 16px;
        & > textarea {
          resize: none;
          width: 100%;
          min-height: 240px;
          padding: 16px;
          box-sizing: border-box;
          font-size: 0.875rem;
          font-family: "Spoqa Han Sans Neo", sans-serif;
          border-radius: 8px;
          background: #f0eff4;
          border: 1px solid rgba(0, 0, 0, 0.4);
          &::-webkit-input-placeholder {
            color: rgba(0, 0, 0, 0.4);
          }
        }
      }
    }
    & > .car_check {
      margin-bottom: 40px;
      & > span {
        font-size: 1rem;
      }
      & > div {
        margin-top: 8px;
        display: flex;
        width: 100%;

        & > input {
          display: none;
          &:checked + label {
            /* Purple */

            background: #6100ff;
            box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
            border-radius: 8px;
            color: #fff;
          }
        }
        & > label {
          display: flex;
          width: 100%;
          min-height: 48px;
          border-radius: 8px;
          justify-content: center;
          align-items: center;
          color: rgba(0, 0, 0, 0.4);
          font-size: 1rem;
          margin-right: 16px;
          background: #f0eff4;
          box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
          border-radius: 8px;
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
    & > .teacher_info-wrap {
      margin-bottom: 40px;

      & > h3 {
        font-weight: 400;
        font-size: 1rem;
      }

      & > div {
        margin-top: 24px;
        & > div {
          margin-bottom: 15px;
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
`;
