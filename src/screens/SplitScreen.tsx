import React, { useState } from 'react';
import styled from 'styled-components/native';
import { IChannel } from '../../types';
import { Divider, EmptyState } from '../components';
import { ChatStoreProvider } from '../stores';
import ChatContent from './content/ChatContent';
import ChatListContent from './content/ChatListContent';

const Container = styled.View`
  flex: 1;
  flex-direction: row;
`;

const Sidebar = styled.View`
  flex: 0.5;
  min-width: 350px;
  max-width: 450px;
`;

const SplitScreen = () => {
  const [channel, setChannel] = useState<IChannel>();

  return (
    <Container>
      <Sidebar>
        <ChatListContent onSelect={setChannel} />
      </Sidebar>
      <Divider vertical />
      {channel ? (
        <ChatStoreProvider key={channel.id}>
          <ChatContent channel={channel} />
        </ChatStoreProvider>
      ) : (
        <EmptyState
          title={'Hello there!'}
          message={'Select a channel from left side panel'}
        />
      )}
    </Container>
  );
};

export default SplitScreen;
