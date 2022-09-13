import styled from "styled-components";

export const StyledSubscriptionSection = styled.div`
  & .subscription-container {
    padding: 75px 0 100px;
  }

  & .subscription-title {
    padding: 0 0 20px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 48px;
    letter-spacing: 4%;
    text-align: center;
    color: #000f08;
  }

  & .subscription-subtitle {
    padding: 0 0 40px 0px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    text-align: center;
    color: #000f08;
  }

  & .subscription-form {
    margin: 0 auto;
    max-width: 530px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid #8c8c8c;
  }

  & .subscription-form-input {
    padding: 10px 200px 10px 0;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 20px;
    color: #8c8c8c;
    border: none;
  }

  & .subscription-form-button {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 20px;
    letter-spacing: 4%;
    color: #000f08;
    border: none;
    background: none;
  }
  @media screen and (max-width: 650px) {
    .subscription-form-input{
      padding-right: 0px;
    }
  }
`;