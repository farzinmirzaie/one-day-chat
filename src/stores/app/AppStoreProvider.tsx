import React from 'react';
import { TUser } from '../../../types';
import { initialState, useAppReducer } from './reducer';

export const AppStoreContext = React.createContext(initialState);

export const AppStoreProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const [state, dispatch] = useAppReducer();

  const changeUser = (userId: TUser) =>
    dispatch({
      type: 'CHANGE_USER',
      payload: userId,
    });

  return (
    <AppStoreContext.Provider value={{ ...state, changeUser }}>
      {children}
    </AppStoreContext.Provider>
  );
};
