import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import ApolloProvider from './src/graphql';
import { Navigation } from './src/screens';
import StoreProvider from './src/store';
import { darkTheme, lightTheme } from './src/themes';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <StoreProvider>
      <ApolloProvider>
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
          <StatusBar barStyle={'light-content'} />
          <Navigation />
        </ThemeProvider>
      </ApolloProvider>
    </StoreProvider>
  );
};

export default App;
