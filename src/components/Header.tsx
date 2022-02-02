import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

const SafeContainer = styled.SafeAreaView`
  background-color: ${({theme}) => theme.colors.primary};
  border-color: ${({theme}) => theme.colors.border};
  border-bottom-width: 1px;
`;

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 15px;
`;

const Avatar = styled.Image`
  background-color: ${({theme}) => theme.colors.border};
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;

const Icon = styled.Image`
  tint-color: ${({theme}) => theme.colors.textPrimary};
  height: 25px;
  width: 25px;
`;

interface Props {
  avatar?: string;
  name?: string;
}

const Header = ({avatar, name}: Props) => {
  return (
    <SafeContainer>
      <Container>
        <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
          <Icon
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/61/61157.png',
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Avatar
          source={{uri: avatar || `https://i.pravatar.cc/150?u=${name}`}}
        />
        <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
          <Icon
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/61/61099.png',
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </Container>
    </SafeContainer>
  );
};

export default Header;
