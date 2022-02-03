import { TChannel } from '../../types';
import { IStoreState } from './storeInitialState';

interface IActionSetDraft {
  type: 'SET_DRAFT';
  payload: {
    channelId: TChannel;
    input: string;
  };
}

interface IActionClearDraft {
  type: 'CLEAR_DRAFT';
  payload: TChannel;
}

type TAction = IActionSetDraft | IActionClearDraft;

const storeReducer = (state: IStoreState, action: TAction): IStoreState => {
  switch (action.type) {
    case 'SET_DRAFT':
      return {
        ...state,
        drafts: {
          ...state.drafts,
          [action.payload.channelId]: action.payload.input,
        },
      };
    case 'CLEAR_DRAFT':
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

export default storeReducer;
