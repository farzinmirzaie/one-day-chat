import { useReducer } from 'react';
import { IChannel, TUser } from '../../../types';

interface IActionChangeUser {
  type: 'CHANGE_USER';
  payload: TUser;
}

type TAction = IActionChangeUser;

interface IState {
  userId: TUser;
  channels: IChannel[];
  changeUser: (userId: TUser) => void;
}

export const initialState: IState = {
  userId: 'Joyse',
  channels: [
    {
      id: '1',
      name: 'General',
      description: 'General channel',
    },
    {
      id: '2',
      name: 'Technology',
      description: 'Technology channel',
    },
    {
      id: '3',
      name: 'LGTM',
      description: 'LGTM channel',
    },
  ],
  changeUser: () => {},
};

const reducer = (state: IState, action: TAction): IState => {
  switch (action.type) {
    case 'CHANGE_USER':
      return {
        ...state,
        userId: action.payload,
      };
    default:
      return state;
  }
};

export function useAppReducer() {
  return useReducer(reducer, initialState);
}
