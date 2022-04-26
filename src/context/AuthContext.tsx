import axios from 'axios'
import React, { createContext, ReactNode, useState } from 'react'

export const AuthContext = createContext<any>({})

interface SignUpForm {
  firstName: string
  lastName: string
  email: string
  password: string
  passwordConfirm: string
}

interface LogInForm {
  email: string
  password: string
}

interface AuthProviderProps {
  children: ReactNode
}

const AuthContextProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState(null)
  const [signUpError, setSignUpError] = useState('')
  const [logInError, setLogInError] = useState('')

  const userSignUp = async (data: SignUpForm) => {
    await axios
      .post('/register', data)
      .then((result) => {
        const userResponse = result.data
        return userResponse
      })
      .catch((err) => {
        setSignUpError(err.response.data.message)
      })
  }

  const userLogIn = async (data: LogInForm) => {
    const { email, password } = data
    let userResponse
    await axios
      .post('/login', { email, password })
      .then((result) => {
        userResponse = result.data
        setUser(userResponse)
      })
      .catch((err) => {
        setLogInError(err.response.data)
      })
    return userResponse
  }

  return (
    <AuthContext.Provider
      value={{ user, logInError, signUpError, userSignUp, userLogIn }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
