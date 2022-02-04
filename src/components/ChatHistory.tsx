import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import { useTheme } from 'styled-components/native';
import { IMessage } from '../../types';
import { ChatBubble, EmptyState } from '../components';

interface Props {
  messages: IMessage[];
  isLoadingMore: boolean;
  onLoadMore: (lastMessageId: string) => void;
  shouldLoadMore: boolean;
}

const ChatHistory = ({
  messages,
  isLoadingMore,
  onLoadMore,
  shouldLoadMore,
}: Props) => {
  const { colors } = useTheme();

  const handleLoadMore = () => {
    if (!isLoadingMore && shouldLoadMore) {
      onLoadMore(messages[messages.length - 1].messageId);
    }
  };

  return (
    <FlatList
      data={messages}
      inverted={messages.length !== 0}
      keyExtractor={item => item.messageId}
      renderItem={({ item }) => <ChatBubble message={item} />}
      contentContainerStyle={styles.listContainer}
      ListEmptyComponent={() => (
        <EmptyState
          title={'No message here'}
          message={'Try to send a message and start a conversation.'}
        />
      )}
      ListFooterComponent={
        isLoadingMore ? <ActivityIndicator color={colors.accentDark} /> : null
      }
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.1}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flexGrow: 1,
    paddingTop: 15,
  },
});

export default ChatHistory;
