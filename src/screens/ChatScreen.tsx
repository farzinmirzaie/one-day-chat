import React from 'react';
import {
  ChatHeader,
  PlatformKeyboardAvoidingView,
  Screen,
  TextPrimary,
} from '../components';
import { NavigationProps } from './Navigation';

const ChatScreen = ({ route }: NavigationProps<'Chat'>) => {
  return (
    <Screen>
      <ChatHeader
        name={route.params.id}
        status="I love buying new things but I hate spending money."
      />
      <PlatformKeyboardAvoidingView>
        <TextPrimary>Chat messages will be added here</TextPrimary>
      </PlatformKeyboardAvoidingView>
    </Screen>
  );
};

export default ChatScreen;
