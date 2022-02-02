import React from 'react';
import {useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {ChatListScreen} from './src/screens';
import {darkTheme, lightTheme} from './themes';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <ChatListScreen />
    </ThemeProvider>
  );
};

export default App;
