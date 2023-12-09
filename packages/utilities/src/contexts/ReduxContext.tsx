import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import React from 'react';
import { Provider } from 'react-redux';

const createStore = () => {
  const reduxStore = configureStore({
    reducer: combineReducers({}),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

  setupListeners(reduxStore.dispatch);

  return reduxStore;
};

interface ReduxProviderProps {
  children?: React.ReactNode;
}

export const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }) => {
  return <Provider store={createStore()}>{children}</Provider>;
};

// A provider meant for sharing across all surfaces.
// Props should be defined as needed and clarified in name to improve readability
// export function ReduxProvider({
//   reduxStore,
//   children,
// }: SharedProviderProps): JSX.Element {
//   return <Provider store={reduxStore}>{children}</Provider>;
// }
