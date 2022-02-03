import React, { useReducer } from 'react';
import { TChannel } from '../../types';
import { storeInitialState } from './storeInitialState';
import storeReducer from './storeReducer';

export const StoreContext = React.createContext(storeInitialState);

const StoreProvider = ({ children }: { children?: React.ReactNode }) => {
  const [state, dispatch] = useReducer(storeReducer, storeInitialState);

  const setDraft = (channelId: TChannel, input: string) =>
    dispatch({
      type: 'SET_DRAFT',
      payload: { channelId, input },
    });

  const clearDraft = (channelId: TChannel) =>
    dispatch({
      type: 'CLEAR_DRAFT',
      payload: channelId,
    });

  return (
    <StoreContext.Provider value={{ ...state, setDraft, clearDraft }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
