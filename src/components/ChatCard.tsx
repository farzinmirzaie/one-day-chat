import React from 'react';
import Animated, { FadeInRight } from 'react-native-reanimated';
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
  index?: number;
  avatar?: string;
  name: string;
  message: string;
  time?: number;
  onPress?: () => void;
}

const ChatCard = ({ index, avatar, name, message, time, onPress }: Props) => {
  return (
    <Animated.View entering={FadeInRight.delay((index || 0) * 100)}>
      <Card activeOpacity={0.7} onPress={onPress}>
        <Avatar uri={avatar} id={name} />
        <ContentContainer>
          <MessageContainer>
            <TextPrimary>{name}</TextPrimary>
            <TextSecondary numberOfLines={1}>{message}</TextSecondary>
          </MessageContainer>
          {time && (
            <TextSecondary size={10} bold>
              {`${new Date(time).getHours()}:${new Date(time).getMinutes()}`}
            </TextSecondary>
          )}
        </ContentContainer>
      </Card>
    </Animated.View>
  );
};

export default ChatCard;
