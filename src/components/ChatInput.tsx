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
  const { colors } = useTheme();
  const store = useStore();
  const [message, setMessage] = useState(store.getDraft(channelId));
  const [send, { loading, error, data }] = usePostMessage();

  const onChange = (value: string) => {
    setMessage(value);
    store.setDraft(channelId, value);
  };

  const submit = () => {
    send({
      variables: {
        channelId: channelId,
        text: message.trim(),
        userId: store.userId,
      },
    });
    setMessage('');
    store.clearDraft(channelId);
  };

  return (
    <Container>
      <Input
        value={message}
        onChangeText={onChange}
        placeholder="Say something..."
        placeholderTextColor={colors.textSecondary}
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