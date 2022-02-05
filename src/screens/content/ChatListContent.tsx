import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { IChannel } from '../../../types';
import {
  ChatCard,
  EmptyState,
  Header,
  PlatformKeyboardAvoidingView,
  Screen,
  SearchBar,
} from '../../components';
import { useAppStore } from '../../hooks';

interface Props {
  onSelect?: (channel: IChannel) => void;
}

const ChatListContent = ({ onSelect }: Props) => {
  const { channels } = useAppStore();
  const [query, setQuery] = useState('');

  return (
    <Screen>
      <Header />
      <SearchBar onChange={setQuery} />
      <PlatformKeyboardAvoidingView>
        <FlatList
          data={channels.filter(channel =>
            channel.name.toLowerCase().includes(query.toLowerCase()),
          )}
          renderItem={({ item }) => (
            <ChatCard
              name={item.name}
              message={item.description}
              avatar={item.avatar}
              onPress={() => onSelect?.(item)}
            />
          )}
          contentContainerStyle={styles.listContainer}
          ListEmptyComponent={() => (
            <EmptyState
              title="Not found"
              message="Try to choose a channel from the list."
            />
          )}
        />
      </PlatformKeyboardAvoidingView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flexGrow: 1,
  },
});

export default ChatListContent;
