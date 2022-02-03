import { IChannel, TChannel, TUser } from '../../types';

interface IDraft {
  channelId: TChannel;
  input: string;
}

export interface IStoreState {
  userId: TUser;
  channels: IChannel[];
  draft: IDraft[];
  setDraft: (channelId: TChannel, input: string) => void;
  clearDraft: (channelId: TChannel) => void;
}

export const storeInitialState: IStoreState = {
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
  draft: [],
  setDraft: () => {},
  clearDraft: () => {},
};
