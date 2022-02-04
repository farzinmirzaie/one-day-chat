import React from 'react';
import styled, { useTheme } from 'styled-components/native';
import { Avatar, Spacer, TextSecondary } from '.';
import { IMessage } from '../../types';
import { useStore } from '../hooks';
import Gradient from './Gradient';

interface Props {
  incoming?: boolean;
}

const Container = styled.View<Props>`
  flex-direction: ${({ incoming }) => (incoming ? 'row-reverse' : 'row')};
  margin: 0 ${({ incoming }) => (incoming ? 5 : 15)}px;
  align-items: flex-start;
`;

const Bubble = styled(Gradient)<Props>`
  border-radius: 10px;
  border-top-right-radius: ${({ incoming }) => (incoming ? 0 : 10)}px;
  border-top-left-radius: ${({ incoming }) => (incoming ? 10 : 0)}px;
  padding: 15px 20px;
  max-width: 75%;
  margin-top: 10px;
`;

const Column = styled.View<Props>`
  align-items: flex-${({ incoming }) => (incoming ? 'end' : 'start')};
  align-self: flex-end;
`;

const ChatBubble = ({ message }: { message: IMessage }) => {
  const { colors } = useTheme();
  const store = useStore();
  const date = new Date(message.datetime);
  const incoming = store.userId === message.userId;

  return (
    <Container incoming={incoming}>
      {!incoming && (
        <Avatar id={message.userId} size={30} noLeftMargin noRightMargin />
      )}
      <Spacer />
      <Bubble
        incoming={incoming}
        color={incoming ? colors.secondary : undefined}>
        <TextSecondary color={incoming ? colors.textPrimary : colors.primary}>
          {message.text}
        </TextSecondary>
      </Bubble>
      <Spacer size={2} />
      <Column incoming={incoming}>
        <Spacer />
        <TextSecondary size={10}>
          {incoming ? 'Sent' : message.userId}
        </TextSecondary>
        <TextSecondary size={10}>
          {`${date.getHours()}:${date.getMinutes()}`}
        </TextSecondary>
        <Spacer size={2} />
      </Column>
    </Container>
  );
};

export default ChatBubble;
