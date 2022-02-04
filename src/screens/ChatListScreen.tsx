import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import {
  ChatCard,
  EmptyState,
  Header,
  PlatformKeyboardAvoidingView,
  Screen,
  SearchBar,
} from '../components';
import { useAppStore } from '../hooks';
import { NavigationProps } from './Navigation';

const ChatListScreen = ({ navigation }: NavigationProps<'ChatList'>) => {
  const { channels } = useAppStore();
  const [query, setQuery] = useState('');

  return (
    <Screen>
      <Header />
      <SearchBar onChange={setQuery} />
      <PlatformKeyboardAvoidingView>
        <FlatList
          data={channels.filter(channel => channel.name.includes(query))}
          renderItem={({ item }) => (
            <ChatCard
              name={item.name}
              message={item.description}
              avatar={item.avatar}
              onPress={() => navigation.navigate('Chat', { channel: item })}
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

export default ChatListScreen;
