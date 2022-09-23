import styled from "styled-components";
import { Link } from "react-router-dom";

export const AuthContainer = styled.div`
  background: #bdbdbd;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 400px) {
    background: #5e5e5e;
  }
`;

export const AuthWrap = styled.div`
  background-color: #ffffff;
  padding: 40px;
  width: 650px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 720px) {
    width: 470px;
  }

  @media screen and (max-width: 500px) {
    width: 370px;
  }
`;

export const AuthHeadingWrapper = styled.div`
  max-width: 500px;
  width: 100%;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
  color: #000f08;

  @media screen and (max-width: 720px) {
    width: 400px;
  }
  @media screen and (max-width: 500px) {
    width: 300px;
    margin-bottom: 40px;
  }
`;

export const Heading = styled.h1`
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0.04em;

  @media screen and (max-width: 720px) {
    font-size: 20px;
  }

  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;

export const AuthLinkWrap = styled.div`
  margin-top: 40px;

  @media screen and (max-width: 720px) {
    margin-top: 30px;
  }
`;
export const AuthLink = styled(Link)`
  font-size: 24px;
  line-height: 24px;
  text-decoration-line: underline;
  color: #000f08;

  @media screen and (max-width: 720px) {
    font-size: 20px;
  }

  @media screen and (max-width: 720px) {
    font-size: 18px;
  }
`;

export const AuthHeadingButton = styled.button`
  background: none;
  border: none;
  color: #000;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormInput = styled.input`
  font-size: 20px;
  line-height: 24px;
  color: #8c8c8c;
  border: none;
  border-bottom: 2px solid #8c8c8c;
  margin-bottom: 40px;
  padding-bottom: 10px;
  width: 500px;
  outline: none;

  &:focus {
    border-bottom: 2px solid #000;
  }

  @media screen and (max-width: 720px) {
    line-height: 20px;
    width: 400px;
  }

  @media screen and (max-width: 500px) {
    width: 300px;
    font-size: 18px;
    margin-bottom: 30px;
  }
`;

export const FormButton = styled.button`
  width: 500px;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;
  padding: 20px 100px;
  background: #000000;
  border: none;

  &:hover {
    background-color: #8c8c8c;
    color: #000;
    transition: 0.4s ease-in-out;
  }

  @media screen and (max-width: 720px) {
    line-height: 24px;
    width: 400px;
  }

  @media screen and (max-width: 500px) {
    width: 300px;
    font-size: 20px;
    line-height: 20px;
    padding: 20px 80px;
  }
`;

export const AuthPoliciesCheck = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
  margin-bottom: 20px;

  @media screen and (max-width: 720px) {
    margin-bottom: 15px;
    width: 400px;
  }
  @media screen and (max-width: 500px) {
    width: 300px;
  }
`;

export const AuthCheckbox = styled.input`
  width: 25px;
  height: 25px;

  @media screen and (max-width: 720px) {
    width: 20px;
    height: 20px;
  }
`;

export const AuthParagraph = styled.p`
  font-size: 20px;
  width: 440px;

  @media screen and (max-width: 720px) {
    width: 350px;
    font-size: 16px;
  }

  @media screen and (max-width: 500px) {
    width: 250px;
    font-size: 14px;
  }
`;

export const AuthPoliciesAgreement = styled.p`
  font-size: 20px;
  line-height: 24px;
  color: #8c8c8c;
  max-width: 500px;
  width: 100%;
  margin-bottom: 20px;

  @media screen and (max-width: 720px) {
    width: 400px;
    font-size: 16px;
    line-height: 20px;
  }

  @media screen and (max-width: 500px) {
    width: 300px;
    font-size: 14px;
    line-height: 16px;
  }
`;
export const TermsOfServiceLink = styled.a`
  color: #000;
`;

export const PrivacyPolicyLink = styled.a`
  color: #000;
`;

export const AuthPoliciesContainer = styled.div``;


