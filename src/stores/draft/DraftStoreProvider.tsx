import React from 'react';
import { TChannel } from '../../../types';
import { initialState, useDraftReducer } from './reducer';

export const DraftStoreContext = React.createContext(initialState);

export const DraftStoreProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const [state, dispatch] = useDraftReducer();

  const set = (channelId: TChannel, input: string) =>
    dispatch({
      type: 'SET',
      payload: { channelId, input },
    });

  const get = (channelId: TChannel) => state.drafts[channelId];

  const clear = (channelId: TChannel) =>
    dispatch({
      type: 'CLEAR',
      payload: channelId,
    });

  return (
    <DraftStoreContext.Provider value={{ ...state, set, get, clear }}>
      {children}
    </DraftStoreContext.Provider>
  );
};
