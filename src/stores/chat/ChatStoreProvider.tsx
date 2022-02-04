import React from 'react';
import { IMessage } from '../../../types';
import { initialState, useChatReducer } from './reducer';

export const ChatStoreContext = React.createContext(initialState);

export const ChatStoreProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const [state, dispatch] = useChatReducer();

  const addAll = (messages: IMessage[]) =>
    dispatch({
      type: 'ADD_ALL',
      payload: messages,
    });

  const add = (message: IMessage) =>
    dispatch({
      type: 'ADD',
      payload: message,
    });

  const update = (message: IMessage) =>
    dispatch({
      type: 'UPDATE',
      payload: message,
    });

  return (
    <ChatStoreContext.Provider value={{ ...state, addAll, add, update }}>
      {children}
    </ChatStoreContext.Provider>
  );
};
