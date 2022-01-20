import styled, { css } from "styled-components";

export const RightMenuWrap = styled.div`
  /* position: fixed; */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  /* overflow: hidden; */
  /* z-index: 1000; */
  ${(props) => {
    return (
      (props.time || props.menuToggle) &&
      css`
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.4);
        bottom: 0;
        z-index: 1000;
        & > .container {
          /* display: block; */
          /* right: 0 !important; */
          /* transform: translate(0%); */
          z-index: 1000;
        }
      `
    );
  }}
  ${(props) =>
    props.menuToggle &&
    css`
      & > .container {
        display: flex;
        flex-direction: column;
        right: 0% !important;
        /* transform: translate(0%) !important; */
      }
    `}
 
  &.active {
    width: 100%;
    display: block;

    position: fixed;
  }
  /* z-index: -100; */
  & > .container {
    position: absolute;
    overflow: hidden;
    width: 60vw;
    background: #fff;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    /* z-index: 1000; */
    right: -100%;
    /* transform: translate(-100%); */
    transition: right 1s;
    display: none;
    background: #f0eff4;
    & > .menu_list {
      padding: 0 20px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;

      height: 100%;
      align-items: flex-start;
      /* justify-content: center; */
      margin-top: 60px;
      & > button {
        font-size: 1rem;
        font-weight: 700;
        margin-bottom: 24px;

        &:first-child {
          font-size: 1.25rem;
          font-weight: 700;
        }
      }
      & > div {
        & > span {
          font-size: 1rem;
          font-weight: 700;
        }
        & > ul {
          margin-top: 24px;
          & > li {
            margin-bottom: 24px;
            & > a {
              text-decoration: none;
              color: #000;
            }
          }
        }
      }
      & > a {
        display: flex;
        margin-bottom: 24px;
        text-decoration: none;
        color: #000;
        font-weight: 700;
      }
    }
  }
`;
