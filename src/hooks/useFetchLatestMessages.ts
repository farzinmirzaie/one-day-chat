import { useQuery } from '@apollo/client';
import { IMessage, TChannel } from '../../types';
import { FETCH_LATEST_MESSAGES } from '../graphql';

interface IFetchLatestMessagesData {
  fetchLatestMessages: IMessage[];
}

interface IFetchLatestMessagesVars {
  channelId: TChannel;
}

export function useFetchLatestMessages(channelId: TChannel) {
  return useQuery<IFetchLatestMessagesData, IFetchLatestMessagesVars>(
    FETCH_LATEST_MESSAGES,
    {
      variables: { channelId: channelId },
      fetchPolicy: 'network-only',
      notifyOnNetworkStatusChange: true,
    },
  );
}
