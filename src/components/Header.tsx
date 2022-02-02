import React from 'react';
import styled from 'styled-components/native';
import {Avatar, IconButton} from '.';

const Container = styled.SafeAreaView`
  background-color: ${({theme}) => theme.colors.primary};
  border-color: ${({theme}) => theme.colors.border};
  border-bottom-width: 1px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

interface Props {
  avatar?: string;
  name?: string;
}

const Header = ({avatar, name}: Props) => {
  return (
    <Container>
      <IconButton
        icon={'https://cdn-icons-png.flaticon.com/512/61/61157.png'}
      />
      <Avatar uri={avatar} id={name} />
      <IconButton
        icon={'https://cdn-icons-png.flaticon.com/512/61/61099.png'}
      />
    </Container>
  );
};

export default Header;
