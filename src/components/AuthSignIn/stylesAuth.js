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


