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
  payload: {
    messageId: string;
    message?: IMessage;
    error?: boolean;
  };
}

type TAction = IActionAddAll | IActionAdd | IActionUpdate;

interface IState {
  messages: IMessage[];
  addAll: (messages: IMessage[]) => void;
  add: (message: IMessage) => void;
  update: (messageId: string, message?: IMessage, error?: boolean) => void;
}

export const initialState: IState = {
  messages: [],
  addAll: () => {},
  add: () => {},
  update: () => {},
};

const reducer = (state: IState, action: TAction): IState => {
  const removeDuplicates = (messages: IMessage[]) => [
    ...new Map(messages.map(message => [message.messageId, message])).values(),
  ];

  switch (action.type) {
    case 'ADD_ALL':
      return {
        ...state,
        messages: removeDuplicates([...state.messages, ...action.payload]),
      };
    case 'ADD':
      return {
        ...state,
        messages: removeDuplicates([action.payload, ...state.messages]),
      };
    case 'UPDATE':
      return {
        ...state,
        messages: state.messages.map(message => {
          if (message.messageId === action.payload.messageId) {
            if (action.payload.error) {
              return {
                ...message,
                pending: false,
                error: true,
              };
            }

            return action.payload.message || message;
          }

          return message;
        }),
      };
    default:
      return state;
  }
};

export function useChatReducer() {
  return useReducer(reducer, initialState);
}
