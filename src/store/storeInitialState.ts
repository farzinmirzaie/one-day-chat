import { TChannel, TUser } from '../../types';

interface IChannel {
  id: TChannel;
  name: string;
}

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
    },
    {
      id: '2',
      name: 'Technology',
    },
    {
      id: '3',
      name: 'LGTM',
    },
  ],
  draft: [
    {
      channelId: '1',
      input: 'General',
    },
  ],
  setDraft: () => {},
  clearDraft: () => {},
};
