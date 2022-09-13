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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <FormWrapper>
      <FormInput
        type="email"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
      />
      <FormInput
        type="email"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
      />
      <FormInput
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <FormInput
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
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
      <FormButton onClick={() => handleClick(email, pass)}>{title}</FormButton>
    </FormWrapper>
  );
}
