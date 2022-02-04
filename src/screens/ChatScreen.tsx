import React from 'react';
import ChatContent from './content/ChatContent';
import { NavigationProps } from './Navigation';

const ChatScreen = ({
  navigation,
  route: {
    params: { channel },
  },
}: NavigationProps<'Chat'>) => {
  return <ChatContent channel={channel} onBack={() => navigation.goBack()} />;
};

export default ChatScreen;
