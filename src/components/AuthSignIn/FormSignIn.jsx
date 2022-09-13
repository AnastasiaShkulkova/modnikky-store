import React, { useState } from 'react'
import { FormButton, FormInput, FormWrapper } from './stylesForm';

export function FormSignIn({title, handleClick}) {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState("");
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
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="password"
      />
      <FormButton onClick={() => handleClick(email, pass)}>
        {title}
      </FormButton>
    </FormWrapper>
  );
}
