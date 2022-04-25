import axios from 'axios';
import React, { createContext, ReactNode, useState } from 'react'

export const AuthContext = createContext<any>({})

interface SignUpForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

interface AuthProviderProps {
  children: ReactNode
}

const AuthContextProvider = ({ children }: AuthProviderProps) => {
  const [signUpError, setSignUpError] = useState('');

  const userSignUp = async (data: SignUpForm) => {
    await axios.post('/register', data)
      .then((result) => {
        const userResponse = result.data
        return userResponse
      }).catch((err) => {
        setSignUpError(err.response.data.message)
      })
  }

  const userLogIn = () => {

  }
  const userLogOut = () => { }


  return (
    <AuthContext.Provider value={{ signUpError, userSignUp, userLogIn, userLogOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider