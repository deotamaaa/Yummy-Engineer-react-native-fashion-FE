import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';
import React, { createContext, ReactNode, useState } from 'react';

export const AuthContext = createContext<any>({});

interface SignUpForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

interface LogInForm {
  email: string;
  password: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContextProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [signUpError, setSignUpError] = useState('');
  const [logInError, setLogInError] = useState('');

  const userSignUp = async (data: SignUpForm) => {
    setIsLoading(true);
    await axios
      .post('/register', data)
      .then(async (result) => {
        const userResponse = result.data;
        await AsyncStorage.setItem('userInfo', JSON.stringify(userResponse));
        setUser(userResponse);
        setIsLoading(false);
        return userResponse;
      })
      .catch((err) => {
        setSignUpError(err.response.data.message);
      });
  };

  const userLogIn = async (data: LogInForm) => {
    setIsLoading(true);
    const { email, password } = data;
    let userResponse;
    await axios
      .post('/login', { email, password })
      .then(async (result) => {
        userResponse = result.data.user;
        setUser(userResponse);
        await AsyncStorage.setItem('userToken', result.data.token);
        setIsLoading(false);
      })
      .catch((err) => {
        setLogInError(err.response.data);
        setIsLoading(false);
      });
    return userResponse;
  };

  const userLogOut = async () => {
    const token = await AsyncStorage.getItem('userToken');
    console.log(token);
    axios
      .post(
        `/logout`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((result) => {
        AsyncStorage.removeItem('userToken');
        setUser({});
      });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        logInError,
        signUpError,
        isLoading,
        userSignUp,
        userLogIn,
        userLogOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
