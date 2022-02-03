import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import { Avatar, IconButton, TextPrimary, TextSecondary } from '.';
import { useStore } from '../hooks';

const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.primary};
  border-color: ${({ theme }) => theme.colors.border};
  border-bottom-width: 1px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const UserContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Header = () => {
  const { userId, changeUser } = useStore();

  const onUserChange = () =>
    changeUser(
      userId === 'Joyse' ? 'Russell' : userId === 'Russell' ? 'Sam' : 'Joyse',
    );

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onUserChange}>
      <Container>
        <UserContainer>
          <Avatar id={userId} />
          <View>
            <TextPrimary>Hello, {userId}!</TextPrimary>
            <TextSecondary>Tap to switch between accounts</TextSecondary>
          </View>
        </UserContainer>
        <IconButton icon={'arrowDown'} onPress={onUserChange} />
      </Container>
    </TouchableOpacity>
  );
};

export default Header;
