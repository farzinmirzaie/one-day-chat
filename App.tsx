import React from 'react';
import { Platform, useColorScheme, useWindowDimensions } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import ApolloProvider from './src/graphql';
import { Navigation, SplitScreen } from './src/screens';
import { AppStoreProvider, DraftStoreProvider } from './src/stores';
import { darkTheme, lightTheme } from './src/themes';

const App = () => {
  const { width } = useWindowDimensions();
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <AppStoreProvider>
      <DraftStoreProvider>
        <ApolloProvider>
          <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            {Platform.OS !== 'web' ? (
              <Navigation />
            ) : width < 800 ? (
              <Navigation />
            ) : (
              <SplitScreen />
            )}
          </ThemeProvider>
        </ApolloProvider>
      </DraftStoreProvider>
    </AppStoreProvider>
  );
};

export default App;
