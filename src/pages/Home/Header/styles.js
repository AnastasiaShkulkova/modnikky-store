import styled from "styled-components";
import background from "../../../assets/img/homepage-bg.png";

export const StyledHeader = styled.header`
  background: url(${background});
  background-size: cover;

  & .homepage-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  & .homepage-info {
    flex: 1;
    display: flex;
    align-items: end;
  }

  & .homepage-offer {
    padding: 0 0 80px 200px;
  }

  & .homepage-title {
    padding-bottom: 40px;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 68px;
    line-height: 76px;
    color: #ffffff;
  }

  & .homepage-subtitle {
    max-width: 1050px;
    width: 100%;
    padding-bottom: 40px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 48px;
    color: #ffffff;
  }

  & .homepage-btn {
    padding: 20px 30px;
    display: flex;
    justify-content: center;
    border: 2px solid #ffffff;
    background: none;
  }

  & .btn-text {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: #ffffff;
  }

  @media screen and (max-width: 940px) {
    .homepage {
      &-offer {
        padding: 50px;
      }
      &-title {
        font-size: 44px;
        padding-bottom: 0;
      }
      &-subtitle {
        font-size: 22px;
        line-height: 32px;
      }
    }
  }
`;

