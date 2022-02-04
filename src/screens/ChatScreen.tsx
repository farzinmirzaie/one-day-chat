import React, { useEffect, useState } from 'react';
import {
  ChatHeader,
  ChatHistory,
  ChatInput,
  EmptyState,
  PlatformKeyboardAvoidingView,
  Screen,
} from '../components';
import {
  useChatStore,
  useFetchLatestMessages,
  useFetchMoreMessages,
} from '../hooks';
import { NavigationProps } from './Navigation';

const ChatScreen = ({
  route: {
    params: { channel },
  },
}: NavigationProps<'Chat'>) => {
  const [shouldLoadMore, setShouldLoadMore] = useState(true);
  const { loading, error, data, refetch } = useFetchLatestMessages(channel.id);
  const [fetchMore, more] = useFetchMoreMessages();

  const chat = useChatStore();

  useEffect(() => {
    if (data) {
      const { fetchLatestMessages: latestMessages } = data;

      if (latestMessages) {
        chat.addAll(latestMessages);
        setShouldLoadMore(!(latestMessages.length < 10));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if (more.data) {
      const { fetchMoreMessages: olderMessages } = more.data;
      if (olderMessages) {
        chat.addAll(olderMessages);
        setShouldLoadMore(!(olderMessages.length < 10));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [more.data]);

  const handleLoadMore = (lastMessageId: string) => {
    fetchMore({
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
          {(loading || error) && chat.messages.length === 0 ? (
            <EmptyState
              title={error?.message}
              message={'Something went wrong, please try again.'}
              isLoading={loading}
              onRetry={() => refetch()}
            />
          ) : (
            <ChatHistory
              messages={chat.messages}
              isLoadingMore={more.loading}
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
