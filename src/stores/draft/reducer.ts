import { useReducer } from 'react';
import { TChannel } from '../../../types';

interface IActionSet {
  type: 'SET';
  payload: {
    channelId: TChannel;
    input: string;
  };
}

interface IActionClear {
  type: 'CLEAR';
  payload: TChannel;
}

type TAction = IActionSet | IActionClear;

interface IState {
  drafts: { [key in TChannel]: string };
  set: (channelId: TChannel, input: string) => void;
  get: (channelId: TChannel) => string;
  clear: (channelId: TChannel) => void;
}

export const initialState: IState = {
  drafts: {
    '1': '',
    '2': '',
    '3': '',
  },
  set: () => {},
  get: () => '',
  clear: () => {},
};

const reducer = (state: IState, action: TAction): IState => {
  switch (action.type) {
    case 'SET':
      return {
        ...state,
        drafts: {
          ...state.drafts,
          [action.payload.channelId]: action.payload.input,
        },
      };
    case 'CLEAR':
      return {
        ...state,
        drafts: {
          ...state.drafts,
          [action.payload]: '',
        },
      };
    default:
      return state;
  }
};

export function useDraftReducer() {
  return useReducer(reducer, initialState);
}
