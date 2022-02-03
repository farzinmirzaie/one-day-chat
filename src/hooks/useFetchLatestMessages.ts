import { useQuery } from '@apollo/client';
import { IMessage } from '../../types';
import { FETCH_LATEST_MESSAGES } from '../graphql';

interface IFetchLatestMessagesData {
  fetchLatestMessages: IMessage[];
}

interface IFetchLatestMessagesVars {
  channelId: string;
}

export function useFetchLatestMessages(channelId: string) {
  return useQuery<IFetchLatestMessagesData, IFetchLatestMessagesVars>(
    FETCH_LATEST_MESSAGES,
    { variables: { channelId: channelId } },
  );
}
