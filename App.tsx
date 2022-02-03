import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import ApolloProvider from './src/graphql';
import { Navigation } from './src/screens';
import { darkTheme, lightTheme } from './src/themes';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ApolloProvider>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Navigation />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
