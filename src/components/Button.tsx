import React from 'react';
import styled from 'styled-components/native';
import { TextSecondary } from '.';

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.accent};
  padding: 10px 20px;
  border-radius: 10px;
`;

interface Props {
  caption: string;
  onPress?: () => void;
}

const Button = ({ caption, onPress }: Props) => {
  return (
    <ButtonContainer activeOpacity={0.7} onPress={onPress}>
      <TextSecondary bold color={'white'}>
        {caption}
      </TextSecondary>
    </ButtonContainer>
  );
};

export default Button;
