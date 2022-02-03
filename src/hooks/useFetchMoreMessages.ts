import { useQuery } from '@apollo/client';
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

export function useFetchMoreMessages(
  channelId: TChannel,
  messageId: string,
  old: boolean,
) {
  return useQuery<IFetchMoreMessagesData, IFetchMoreMessagesVars>(
    FETCH_MORE_MESSAGES,
    { variables: { channelId: channelId, messageId: messageId, old: old } },
  );
}
