import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {ChatListScreen} from './src/screens';
import {darkTheme, lightTheme} from './themes';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ChatListScreen />
    </ThemeProvider>
  );
};

export default App;
