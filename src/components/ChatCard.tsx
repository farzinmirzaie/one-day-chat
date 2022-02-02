import React from 'react';
import styled from 'styled-components/native';

const Card = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.primary};
  flex-direction: row;
  padding: 20px 15px 0px 15px;
`;

const Avatar = styled.Image`
  background-color: ${({theme}) => theme.colors.border};
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;

const ContentContainer = styled.View`
  flex: 1;
  flex-direction: row;
  border-color: ${({theme}) => theme.colors.border};
  border-bottom-width: 1px;
  padding-top: 5px;
  margin-left: 10px;
`;

const MessageContainer = styled.View`
  flex: 1;
  justify-content: center;
  margin-right: 10px;
  margin-bottom: 20px;
`;

const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.textPrimary};
  margin-bottom: 2px;
`;

const Message = styled.Text`
  font-size: 14px;
  color: ${({theme}) => theme.colors.textSecondary};
`;

const Time = styled.Text`
  font-size: 10px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.textSecondary};
`;

interface Props {
  avatar?: string;
  name: string;
  message: string;
  time: number;
  onPress?: () => void;
}

const ChatCard = ({avatar, name, message, time, onPress}: Props) => {
  const date: Date = new Date(time);

  return (
    <Card activeOpacity={0.7} onPress={onPress}>
      <Avatar source={{uri: avatar || `https://i.pravatar.cc/150?u=${name}`}} />
      <ContentContainer>
        <MessageContainer>
          <Name>{name}</Name>
          <Message numberOfLines={1}>{message}</Message>
        </MessageContainer>
        <Time>{`${date.getHours()}:${date.getMinutes()}`}</Time>
      </ContentContainer>
    </Card>
  );
};

export default ChatCard;
