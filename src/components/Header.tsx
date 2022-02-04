import React from 'react';
import { StatusBar, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import { Avatar, Gradient, IconButton, TextPrimary, TextSecondary } from '.';
import { useAppStore } from '../hooks';

const Container = styled.SafeAreaView`
  border-color: ${({ theme }) => theme.colors.border};
  border-bottom-width: 1px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: ${StatusBar.currentHeight || 0}px;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Header = () => {
  const { userId, changeUser } = useAppStore();

  // TODO: Implement account selector UI.
  const onUserChange = () =>
    changeUser(
      userId === 'Joyse' ? 'Russell' : userId === 'Russell' ? 'Sam' : 'Joyse',
    );

  return (
    <Gradient>
      <StatusBar
        barStyle={'light-content'}
        translucent
        backgroundColor="transparent"
      />
      <TouchableOpacity activeOpacity={0.7} onPress={onUserChange}>
        <Container>
          <Row>
            <Avatar id={userId} />
            <View>
              <TextPrimary color={'white'}>Hello, {userId}!</TextPrimary>
              <Row>
                <TextSecondary>Tap to switch between accounts</TextSecondary>
                <IconButton
                  icon={'arrowDown'}
                  onPress={onUserChange}
                  secondary
                  margin={5}
                  size={10}
                />
              </Row>
            </View>
          </Row>
        </Container>
      </TouchableOpacity>
    </Gradient>
  );
};

export default Header;
