import React from 'react';
import {
  ChatHeader,
  PlatformKeyboardAvoidingView,
  Screen,
  TextPrimary,
} from '../components';

const ChatScreen = () => {
  return (
    <Screen>
      <ChatHeader
        name="Craig Ortega"
        status="I love buying new things but I hate spending money."
      />
      <PlatformKeyboardAvoidingView>
        <TextPrimary>Chat messages will be added here</TextPrimary>
      </PlatformKeyboardAvoidingView>
    </Screen>
  );
};

export default ChatScreen;
