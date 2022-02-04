import { useReducer } from 'react';
import { IMessage } from '../../../types';

interface IActionAddAll {
  type: 'ADD_ALL';
  payload: IMessage[];
}

interface IActionAdd {
  type: 'ADD';
  payload: IMessage;
}

interface IActionUpdate {
  type: 'UPDATE';
  payload: IMessage;
}

type TAction = IActionAddAll | IActionAdd | IActionUpdate;

interface IState {
  messages: IMessage[];
  addAll: (messages: IMessage[]) => void;
  add: (message: IMessage) => void;
  update: (message: IMessage) => void;
}

export const initialState: IState = {
  messages: [],
  addAll: () => {},
  add: () => {},
  update: () => {},
};

const reducer = (state: IState, action: TAction): IState => {
  switch (action.type) {
    case 'ADD_ALL':
      return {
        ...state,
      };
    case 'ADD':
      return {
        ...state,
      };
    case 'UPDATE':
      return {
        ...state,
      };
    default:
      return state;
  }
};

export function useChatReducer() {
  return useReducer(reducer, initialState);
}
