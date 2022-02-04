import React from 'react';
import ChatListContent from './content/ChatListContent';
import { NavigationProps } from './Navigation';

const ChatListScreen = ({ navigation }: NavigationProps<'Chat'>) => {
  return (
    <ChatListContent
      onSelect={channel => navigation.navigate('Chat', { channel })}
    />
  );
};

export default ChatListScreen;
