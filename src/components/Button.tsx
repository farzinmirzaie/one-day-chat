import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { TextSecondary } from '.';
import Gradient from './Gradient';

const ButtonContainer = styled(Gradient)`
  padding: 15px 20px;
  border-radius: 10px;
`;

interface Props {
  caption: string;
  onPress?: () => void;
}

const Button = ({ caption, onPress }: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <ButtonContainer>
        <TextSecondary bold color={'white'}>
          {caption}
        </TextSecondary>
      </ButtonContainer>
    </TouchableOpacity>
  );
};

export default Button;
