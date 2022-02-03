import React from 'react';
import { FlatList } from 'react-native';
import {
  ChatBubble,
  ChatHeader,
  ChatInput,
  EmptyState,
  PlatformKeyboardAvoidingView,
  Screen,
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

          {data?.fetchLatestMessages && (
            <FlatList
              data={data.fetchLatestMessages}
              inverted={data?.fetchLatestMessages.length !== 0}
              renderItem={({ item }) => <ChatBubble message={item} />}
              // eslint-disable-next-line react-native/no-inline-styles
              contentContainerStyle={{ flexGrow: 1, paddingTop: 15 }}
              ListEmptyComponent={() => (
                <EmptyState
                  title={'No message here'}
                  message={'Try to send a message and start a conversation.'}
                />
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
