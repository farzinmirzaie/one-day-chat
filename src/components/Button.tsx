import React from 'react';
import { TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled, { useTheme } from 'styled-components/native';
import { TextSecondary } from '.';

const ButtonContainer = styled(LinearGradient)`
  background-color: ${({ theme }) => theme.colors.accentLight};
  padding: 15px 20px;
  border-radius: 10px;
`;

interface Props {
  caption: string;
  onPress?: () => void;
}

const Button = ({ caption, onPress }: Props) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <ButtonContainer
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        colors={[colors.accentDark, colors.accentLight]}>
        <TextSecondary bold color={colors.primary}>
          {caption}
        </TextSecondary>
      </ButtonContainer>
    </TouchableOpacity>
  );
};

export default Button;
