import React from 'react';
import styled, {useTheme} from 'styled-components/native';
import {IconButton} from '.';

const Container = styled.View`
  background-color: ${({theme}) => theme.colors.secondary};
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Input = styled.TextInput`
  width: 200px;
  padding: 20px 0;
  font-size: 14px;
  text-align: center;
  color: ${({theme}) => theme.colors.textSecondary};
`;

const SearchBar = () => {
  const theme = useTheme();

  return (
    <Container>
      <IconButton secondary icon={'search'} />
      <Input
        placeholder="Search OR Start New Chat"
        placeholderTextColor={theme.colors.textSecondary}
      />
    </Container>
  );
};

export default SearchBar;
