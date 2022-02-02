import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {Divider} from './src/components';
import {ChatListScreen, ChatScreen} from './src/screens';
import {darkTheme, lightTheme} from './themes';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ChatScreen />
      <Divider />
      <ChatListScreen />
    </ThemeProvider>
  );
};

export default App;
