import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components/native';
import { IconButton } from '.';
import { TChannel } from '../../types';
import {
  useAppStore,
  useChatStore,
  useDraftStore,
  usePostMessage,
} from '../hooks';

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
  const { userId } = useAppStore();
  const draft = useDraftStore();
  const chat = useChatStore();
  const [input, setInput] = useState(draft.get(channelId));
  const [sendMessage] = usePostMessage();

  const onChange = (value: string) => {
    setInput(value);
    draft.set(channelId, value);
  };

  const submit = async () => {
    const tempId = Date.now().toString();

    chat.add({
      datetime: new Date().toString(),
      text: input.trim(),
      userId: userId,
      messageId: tempId,
      pending: true,
    });
    setInput('');
    draft.clear(channelId);
    try {
      const result = await sendMessage({
        variables: {
          channelId: channelId,
          text: input.trim(),
          userId: userId,
        },
      });

      if (result.data?.postMessage) {
        chat.update(tempId, result.data?.postMessage);
      } else {
        chat.update(tempId, undefined, true);
      }
    } catch (error2) {
      chat.update(tempId, undefined, true);
    }
  };

  return (
    <Container>
      <Input
        value={input}
        onChangeText={onChange}
        placeholder="Say something..."
        placeholderTextColor={colors.textSecondary}
        onSubmitEditing={submit}
      />
      <IconButton icon="send" onPress={submit} />
    </Container>
  );
};

export default ChatInput;
