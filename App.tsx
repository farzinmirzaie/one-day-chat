import React from 'react';
import {Text, useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {darkTheme, lightTheme} from './themes';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Text>Hello World!</Text>
    </ThemeProvider>
  );
};

export default App;
