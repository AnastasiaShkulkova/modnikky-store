import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { FormSignIn } from "./FormSignIn";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../store/slice/userSlice";
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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
      })
      .catch(console.error);
    navigate("/");
  };

  const handleExit = () => {
    navigate("/");
  }

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
