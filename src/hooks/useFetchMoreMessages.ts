import { useQuery } from '@apollo/client';
import { IMessage } from '../../types';
import { FETCH_MORE_MESSAGES } from '../graphql';

interface IFetchMoreMessagesData {
  fetchMoreMessages: IMessage[];
}

interface IFetchMoreMessagesVars {
  channelId: string;
  messageId: string;
  old: boolean;
}

export function useFetchMoreMessages(
  channelId: string,
  messageId: string,
  old: boolean,
) {
  return useQuery<IFetchMoreMessagesData, IFetchMoreMessagesVars>(
    FETCH_MORE_MESSAGES,
    { variables: { channelId: channelId, messageId: messageId, old: old } },
  );
}
