import React from 'react';
import styled from 'styled-components/native';
import { Avatar, TextPrimary, TextSecondary } from '.';

const Card = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  flex-direction: row;
  align-items: center;
`;

const ContentContainer = styled.View`
  flex: 1;
  flex-direction: row;
  border-color: ${({ theme }) => theme.colors.border};
  border-bottom-width: 1px;
  padding-top: 15px;
  padding-right: 15px;
`;

const MessageContainer = styled.View`
  flex: 1;
  justify-content: center;
  margin-right: 10px;
  margin-bottom: 20px;
`;

interface Props {
  avatar?: string;
  name: string;
  message: string;
  time: number;
  onPress?: () => void;
}

const ChatCard = ({ avatar, name, message, time, onPress }: Props) => {
  const date: Date = new Date(time);

  return (
    <Card activeOpacity={0.7} onPress={onPress}>
      <Avatar uri={avatar} id={name} />
      <ContentContainer>
        <MessageContainer>
          <TextPrimary>{name}</TextPrimary>
          <TextSecondary numberOfLines={1}>{message}</TextSecondary>
        </MessageContainer>
        <TextSecondary size={10} bold>
          {`${date.getHours()}:${date.getMinutes()}`}
        </TextSecondary>
      </ContentContainer>
    </Card>
  );
};

export default ChatCard;
