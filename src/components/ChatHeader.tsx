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
  return (
    <Container>
      <Avatar uri={avatar} id={name} size={60} />
      <NameContainer>
        <TextPrimary>{name}</TextPrimary>
        <TextSecondary numberOfLines={1}>{status}</TextSecondary>
      </NameContainer>
      <IconButton icon={'dots'} />
    </Container>
  );
};

export default ChatHeader;
