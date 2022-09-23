import React, { useState } from 'react'
import { FormButton, FormInput, FormWrapper } from './stylesForm';

export function FormSignIn({title, handleClick}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("");
  return (
    <FormWrapper>
      <FormInput
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <FormInput
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <FormButton onClick={() => handleClick(email, password)}>
        {title}
      </FormButton>
    </FormWrapper>
  );
}
