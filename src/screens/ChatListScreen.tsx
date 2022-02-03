import React, { useState } from 'react';
import { FlatList } from 'react-native';
import {
  ChatCard,
  Header,
  PlatformKeyboardAvoidingView,
  Screen,
  SearchBar,
} from '../components';
import { useStore } from '../hooks';
import { NavigationProps } from './Navigation';

const ChatListScreen = ({ navigation }: NavigationProps<'ChatList'>) => {
  const { channels, userId } = useStore();
  const [query, setQuery] = useState('');

  return (
    <Screen>
      <Header name={userId} />
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
        />
      </PlatformKeyboardAvoidingView>
    </Screen>
  );
};

export default ChatListScreen;
