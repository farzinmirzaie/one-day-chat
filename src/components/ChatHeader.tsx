import { useNavigation } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';
import { Avatar, IconButton, TextPrimary, TextSecondary } from '.';

const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.primary};
  border-color: ${({ theme }) => theme.colors.border};
  border-bottom-width: 1px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const NameContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

interface Props {
  avatar?: string;
  name: string;
  status: string;
}

const ChatHeader = ({ avatar, name, status }: Props) => {
  const navigation = useNavigation();

  return (
    <Container>
      <IconButton icon={'arrowLeft'} onPress={() => navigation.goBack()} />
      <Avatar uri={avatar} id={name} noLeftMargin />
      <NameContainer>
        <TextPrimary>{name}</TextPrimary>
        <TextSecondary numberOfLines={1}>{status}</TextSecondary>
      </NameContainer>
      <IconButton icon={'dots'} />
    </Container>
  );
};

export default ChatHeader;
