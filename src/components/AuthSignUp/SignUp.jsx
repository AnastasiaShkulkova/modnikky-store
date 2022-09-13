import { FormSignUp } from "./FormSignUp";
import { useNavigate } from 'react-router-dom'
import setUser from '../../store/slice/userSlice'
import { useDispatch } from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  AuthContainer,
  AuthHeadingButton,
  AuthHeadingWrapper,
  AuthLink,
  AuthLinkWrap,
  AuthWrap,
  Heading,

} from "../AuthSignIn/stylesAuth";


import React from "react";

export function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        console.log(user);
        dispatch(setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
        }));
      })
      .catch(console.error);
        navigate("/");

  };

    const handleExit = () => {
      navigate("/");
    };

  return (
    <AuthContainer>
      <AuthWrap>
        <AuthHeadingWrapper>
          <Heading>CREATE ACCOUNT</Heading>
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
        <FormSignUp title="SIGN UP" handleClick={handleRegister} />

        <AuthLinkWrap>
          <AuthLink to="/signin">I HAVE AN ACCOUNT</AuthLink>
        </AuthLinkWrap>
      </AuthWrap>
    </AuthContainer>
  );
}
