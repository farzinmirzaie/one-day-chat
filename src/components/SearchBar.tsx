import React from 'react';
import styled, { useTheme } from 'styled-components/native';
import { IconButton } from '.';

const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.secondary};
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Input = styled.TextInput`
  width: 150px;
  padding: 20px 0;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

interface Props {
  onChange: (value: string) => void;
}

const SearchBar = ({ onChange }: Props) => {
  const { colors } = useTheme();

  return (
    <Container>
      <IconButton secondary icon={'search'} />
      <Input
        onChangeText={onChange}
        placeholder="Search for channels"
        placeholderTextColor={colors.textSecondary}
      />
    </Container>
  );
};

export default SearchBar;
