import { useLazyQuery } from '@apollo/client';
import { IMessage, TChannel } from '../../types';
import { FETCH_MORE_MESSAGES } from '../graphql';

interface IFetchMoreMessagesData {
  fetchMoreMessages: IMessage[];
}

interface IFetchMoreMessagesVars {
  channelId: TChannel;
  messageId: string;
  old: boolean;
}

export function useFetchMoreMessages() {
  return useLazyQuery<IFetchMoreMessagesData, IFetchMoreMessagesVars>(
    FETCH_MORE_MESSAGES,
    {
      fetchPolicy: 'network-only',
      notifyOnNetworkStatusChange: true,
    },
  );
}
