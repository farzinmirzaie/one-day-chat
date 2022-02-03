import React, { useState } from 'react';
import { FlatList } from 'react-native';
import {
  ChatCard,
  EmptyState,
  Header,
  PlatformKeyboardAvoidingView,
  Screen,
  SearchBar,
} from '../components';
import { useStore } from '../hooks';
import { NavigationProps } from './Navigation';

const ChatListScreen = ({ navigation }: NavigationProps<'ChatList'>) => {
  const { channels } = useStore();
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
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{ flexGrow: 1 }}
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

export default ChatListScreen;
