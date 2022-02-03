import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import styled, { useTheme } from 'styled-components/native';
import { IconButton } from '.';
import { TChannel } from '../../types';
import { usePostMessage, useStore } from '../hooks';

const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.secondary};
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Input = styled.TextInput`
  flex: 1;
  padding: 20px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

interface Props {
  channelId: TChannel;
}

const ChatInput = ({ channelId }: Props) => {
  const theme = useTheme();
  const store = useStore();
  const [message, setMessage] = useState('');
  const [send, { loading, error, data }] = usePostMessage();

  const submit = () => {
    send({
      variables: {
        channelId: channelId,
        text: message.trim(),
        userId: store.userId,
      },
    });
    setMessage('');
  };

  return (
    <Container>
      <Input
        onChangeText={setMessage}
        placeholder="Say something..."
        placeholderTextColor={theme.colors.textSecondary}
        onSubmitEditing={submit}
      />
      {loading ? (
        <ActivityIndicator />
      ) : (
        <IconButton icon="send" onPress={submit} />
      )}
    </Container>
  );
};

export default ChatInput;
