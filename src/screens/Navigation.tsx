import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import { ChatListScreen, ChatScreen } from '.';
import { IChannel } from '../../types';
import { ChatStoreProvider } from '../stores';

type RootStackParamList = {
  ChatList: undefined;
  Chat: { channel: IChannel };
};

export type NavigationProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ChatList" component={ChatListScreen} />
        <Stack.Screen name="Chat">
          {props => (
            <ChatStoreProvider>
              <ChatScreen {...props} />
            </ChatStoreProvider>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
