import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  background-color: ${({theme}) => theme.colors.secondary};
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Input = styled.TextInput`
  width: 60%;
  padding: 20px;
  font-size: 14px;
  text-align: center;
`;

const Icon = styled.Image`
  tint-color: ${({theme}) => theme.colors.textSecondary};
  height: 20px;
  width: 20px;
`;

const SearchBar = () => {
  return (
    <Container>
      <Icon
        source={{uri: 'https://cdn-icons-png.flaticon.com/512/61/61088.png'}}
        resizeMode="contain"
      />
      <Input placeholder="Search OR Start New Chat" />
    </Container>
  );
};

export default SearchBar;
