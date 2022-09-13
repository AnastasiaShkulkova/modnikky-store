import { useSelector } from 'react-redux'

import React from 'react'

function useAuth() {

    const {email, token, id} = useSelector(state => state.user)
  return {
    isAuth: !!email,
    email, 
    token,
    id,
  }
}

export default useAuth