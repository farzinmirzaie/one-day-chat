import React from 'react';
import { FlatList } from 'react-native';
import {
  ChatHeader,
  ChatInput,
  EmptyState,
  PlatformKeyboardAvoidingView,
  Screen,
  TextPrimary,
} from '../components';
import { useFetchLatestMessages } from '../hooks';
import { NavigationProps } from './Navigation';

const ChatScreen = ({
  route: {
    params: { channel },
  },
}: NavigationProps<'Chat'>) => {
  const { loading, error, data, refetch } = useFetchLatestMessages(channel.id);

  return (
    <Screen>
      <ChatHeader name={channel.name} status={channel.description} />
      <PlatformKeyboardAvoidingView>
        <Screen>
          {!data?.fetchLatestMessages && (
            <EmptyState
              title={error?.message}
              message={'Something went wrong, please try again.'}
              isLoading={loading}
              onRetry={() => refetch()}
            />
          )}

          {data?.fetchLatestMessages &&
            data?.fetchLatestMessages.length === 0 && (
              <EmptyState
                title={'No message here'}
                message={'Try to send a message and start a conversation.'}
              />
            )}

          {data?.fetchLatestMessages &&
            data?.fetchLatestMessages.length !== 0 && (
              <FlatList
                data={data.fetchLatestMessages}
                renderItem={({ item }) => (
                  <TextPrimary>{item.text}</TextPrimary>
                )}
              />
            )}
        </Screen>
        <ChatInput channelId={channel.id} />
      </PlatformKeyboardAvoidingView>
    </Screen>
  );
};

export default ChatScreen;
