import React, { useEffect, useState } from 'react';
import { IMessage } from '../../types';
import {
  ChatHeader,
  ChatHistory,
  ChatInput,
  EmptyState,
  PlatformKeyboardAvoidingView,
  Screen,
} from '../components';
import { useFetchLatestMessages, useFetchMoreMessages } from '../hooks';
import { NavigationProps } from './Navigation';

const ChatScreen = ({
  route: {
    params: { channel },
  },
}: NavigationProps<'Chat'>) => {
  const [messages, setMessages] = useState<IMessage[]>();
  const [shouldLoadMore, setShouldLoadMore] = useState(true);
  const { loading, error, data, refetch } = useFetchLatestMessages(channel.id);
  const [fetchMoreMessages, { loading: loadingMore, data: dataMore }] =
    useFetchMoreMessages();

  useEffect(() => {
    if (data) {
      const { fetchLatestMessages: latestMessages } = data;

      if (latestMessages) {
        setMessages(latestMessages);
        setShouldLoadMore(!(latestMessages.length < 10));
      }
    }
  }, [data]);

  useEffect(() => {
    if (dataMore) {
      const { fetchMoreMessages: olderMessages } = dataMore;
      if (olderMessages) {
        setMessages(old => [...new Set([...old!, ...olderMessages])]);
        setShouldLoadMore(!(olderMessages.length < 10));
      }
    }
  }, [dataMore]);

  const handleLoadMore = (lastMessageId: string) => {
    fetchMoreMessages({
      variables: {
        channelId: channel.id,
        messageId: lastMessageId,
        old: true,
      },
    });
  };

  return (
    <Screen>
      <ChatHeader name={channel.name} status={channel.description} />
      <PlatformKeyboardAvoidingView>
        <Screen>
          {(loading || error) && (
            <EmptyState
              title={error?.message}
              message={'Something went wrong, please try again.'}
              isLoading={loading}
              onRetry={() => refetch()}
            />
          )}

          {messages && (
            <ChatHistory
              messages={messages}
              isLoadingMore={loadingMore}
              shouldLoadMore={shouldLoadMore}
              onLoadMore={handleLoadMore}
            />
          )}
        </Screen>
        <ChatInput channelId={channel.id} />
      </PlatformKeyboardAvoidingView>
    </Screen>
  );
};

export default ChatScreen;
