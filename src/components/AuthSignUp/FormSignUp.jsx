import React, { useState } from "react";
import {
  FormButton,
  FormInput,
  FormWrapper,
  AuthPoliciesCheck,
  AuthCheckbox,
  AuthParagraph,
  AuthPoliciesAgreement,
  TermsOfServiceLink,
  PrivacyPolicyLink,
  AuthPoliciesContainer,
} from "../AuthSignIn/stylesForm";

export function FormSignUp({ title, handleClick }) {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <FormWrapper>
      <FormInput
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <FormInput
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <AuthPoliciesContainer>
        <AuthPoliciesCheck>
          <AuthCheckbox type="checkbox" />
          <AuthParagraph>
            Let's get personal! We'll send you only the good stuff: Exclusive
            early access to Sale, new arrivals and promotions.
          </AuthParagraph>
        </AuthPoliciesCheck>
        <AuthPoliciesAgreement>
          By signing up you agree to{" "}
          <TermsOfServiceLink href="https://policies.google.com/terms">
            Terms of Service
          </TermsOfServiceLink>{" "}
          and{" "}
          <PrivacyPolicyLink href="https://policies.google.com/privacy">
            Privacy Policy
          </PrivacyPolicyLink>
        </AuthPoliciesAgreement>
      </AuthPoliciesContainer>
      <FormButton onClick={() => handleClick(email, password)}>{title}</FormButton>
    </FormWrapper>
  );
}
