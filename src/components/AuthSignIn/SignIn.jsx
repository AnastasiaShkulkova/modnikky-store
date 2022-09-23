import React from "react";
import "firebase/auth";
import { FormSignIn } from "./FormSignIn";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase";
import { useEffect } from "react";
import {
  AuthContainer,
  AuthHeadingButton,
  AuthHeadingWrapper,
  AuthLink,
  AuthLinkWrap,
  AuthWrap,
  Heading,
} from "./stylesAuth";

export function SignIn() {
  const navigate = useNavigate();

  const handleLogin = (email, password) => {

    try {
         auth.signInWithEmailAndPassword(email, password);
    navigate("/");

    } catch (e) {
      console.dir(e);
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => console.log(user));
  }, [])


  const handleExit = () => {
    navigate("/");
  };

  return (
    <AuthContainer>
      <AuthWrap>
        <AuthHeadingWrapper>
          <Heading>SIGN IN</Heading>
          <AuthHeadingButton onClick={handleExit}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </AuthHeadingButton>
        </AuthHeadingWrapper>
        <FormSignIn title="SIGN IN" handleClick={handleLogin} />
        <AuthLinkWrap>
          <AuthLink to="/signup">I DON'T HAVE AN ACCOUNT</AuthLink>
        </AuthLinkWrap>
      </AuthWrap>
    </AuthContainer>
  );
}
