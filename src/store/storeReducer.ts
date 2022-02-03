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
        draft: [...state.draft, action.payload],
      };
    case 'CLEAR_DRAFT':
      return {
        ...state,
        draft: state.draft.filter(draft => draft.channelId !== action.payload),
      };
    default:
      return state;
  }
};

export default storeReducer;
