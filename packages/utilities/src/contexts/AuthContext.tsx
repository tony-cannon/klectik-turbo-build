import {
  createUser,
  setUser,
  getUser,
  logout as GQLLogout,
} from '@utilities/functions/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';

const initialState = {
  isAuthenticated: false,
  isInitilized: false,
  user: null,
};

const handlers: Record<string, (state: any, action: any) => void> = {
  INITIALIZE: (state, action) => {
    const { isAuthenticated, user } = action.payload;

    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  },
  LOGIN: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
  LOGOUT: (state) => ({
    ...state,
    isAuthenticated: false,
    user: null,
  }),
  REGISTER: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
};

const reducer = (state: any, action: any) => {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
};

const AuthContext = createContext<{
  login: (user: any) => void;
  logout: () => void;
  register: null;
  user: any;
}>({
  ...initialState,
  login: () => Promise.resolve(),
  logout: () => {},
  register: null,
  user: null,
});

export const AuthProvider = (props: React.PropsWithChildren<{}>) => {
  const { children } = props;
  const [state, dispatch] = React.useReducer(reducer, initialState);

  useEffect(() => {
    const initialize = async () => {
      try {
        const user = await getUser();
        dispatch({
          type: 'INITIALIZE',
          payload: {
            isAuthenticated: !!user,
            user,
          },
        });
      } catch (error) {
        console.log(error);
      }
    };

    initialize();
  }, []);

  const login = async (user: any) => {
    await setUser(user);
    dispatch({ type: 'LOGIN', payload: { user } });
  };

  const logout = async () => {
    await GQLLogout();
    dispatch({ type: 'LOGOUT' });
  };

  const register = async (email: string, password: string) => {
    const user = await createUser(email, password);
    dispatch({ type: 'REGISTER', payload: { user } });
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        register,
        ...state,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
