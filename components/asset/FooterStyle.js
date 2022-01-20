import styled from "styled-components";

export const FooterWrap = styled.footer`
  background: #f0eff4;
  min-height: 494px;
  & > .container {
    padding: 80px 20px;
    box-sizing: border-box;
    & > .info-text {
      display: flex;
      flex-direction: column;
      margin-top: 40px;
      margin-bottom: 40px;
      & > span {
        font-size: 0.875rem;
        margin-bottom: 8px;
        line-height: 17.53px;
      }
    }
    & > .service-link {
      display: flex;
      flex-direction: column;
      & > a {
        color: #000;
        margin-bottom: 8px;
        text-decoration: none;
        font-size: 0.875rem;
      }
    }
  }
`;
