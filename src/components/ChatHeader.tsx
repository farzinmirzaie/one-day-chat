import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import styled from 'styled-components/native';
import { Avatar, IconButton, TextPrimary, TextSecondary } from '.';

const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.primary};
  border-color: ${({ theme }) => theme.colors.border};
  border-bottom-width: 1px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: ${StatusBar.currentHeight || 0}px;
`;

const NameContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

interface Props {
  avatar?: string;
  name: string;
  status: string;
  onBack?: () => void;
}

const ChatHeader = ({ avatar, name, status, onBack }: Props) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Container>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        translucent
        backgroundColor="transparent"
      />
      {onBack && <IconButton icon={'arrowLeft'} onPress={onBack} />}
      <Avatar uri={avatar} id={name} noLeftMargin={onBack !== undefined} />
      <NameContainer>
        <TextPrimary>{name}</TextPrimary>
        <TextSecondary numberOfLines={1}>{status}</TextSecondary>
      </NameContainer>
      <IconButton icon={'dots'} />
    </Container>
  );
};

export default ChatHeader;
