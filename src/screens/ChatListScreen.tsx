import React from 'react';
import {Alert, FlatList} from 'react-native';
import {
  ChatCard,
  Header,
  PlatformKeyboardAvoidingView,
  Screen,
  SearchBar,
} from '../components';

const ChatListScreen = () => {
  const mock = [
    {
      name: 'Diana Fisher',
      message: 'Hey! Whats your plan for weekend',
      time: Date.now(),
    },
    {
      name: 'Helen Lawrence',
      message: 'I just spoke to him!',
      time: Date.now(),
    },
    {
      name: 'Eric Lopez',
      message: 'I booked two tickets',
      time: Date.now(),
    },
  ];

  return (
    <Screen>
      <Header />
      <SearchBar />
      <PlatformKeyboardAvoidingView>
        <FlatList
          data={mock}
          renderItem={({item}) => (
            <ChatCard {...item} onPress={() => Alert.alert(item.name)} />
          )}
        />
      </PlatformKeyboardAvoidingView>
    </Screen>
  );
};

export default ChatListScreen;