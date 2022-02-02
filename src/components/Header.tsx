import React from 'react';
import styled from 'styled-components/native';
import { Avatar, IconButton } from '.';

const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.primary};
  border-color: ${({ theme }) => theme.colors.border};
  border-bottom-width: 1px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

interface Props {
  avatar?: string;
  name?: string;
}

const Header = ({ avatar, name }: Props) => {
  return (
    <Container>
      <IconButton icon={'chat'} />
      <Avatar uri={avatar} id={name} />
      <IconButton icon={'dots'} />
    </Container>
  );
};

export default Header;
