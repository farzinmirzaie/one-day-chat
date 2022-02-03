import { IChannel, TChannel, TUser } from '../../types';

export interface IStoreState {
  userId: TUser;
  channels: IChannel[];
  drafts: { [key in TChannel]: string };
  setDraft: (channelId: TChannel, input: string) => void;
  getDraft: (channelId: TChannel) => string;
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
  drafts: {
    '1': '',
    '2': '',
    '3': '',
  },
  setDraft: () => {},
  getDraft: () => '',
  clearDraft: () => {},
};
