import styled from "styled-components";

export const StyledFooterSection = styled.footer`
  & .footer-section {
    display: flex;
    justify-content: space-between;
    padding-bottom: 80px;
    gap: 30px;
    flex-wrap: wrap;
  }

  & .menu-title {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 48px;
    letter-spacing: 4%;
    color: #000f08;
  }

  & .list-item {
    max-width: 265px;
  }

  & .item-link {
    text-decoration: none;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 4%;
    color: #000f08;
  }

  & .item-icon {
    max-width: 22px;
    margin-right: 15px;
  }
  @media screen and (max-width: 940px) {
    h4 {
      padding-top: 0;
    }
    .list-item {
      text-align:center;
    }
  }
`;