import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { ICONS } from '../assets';

const Icon = styled.Image<Props>`
  tint-color: ${({ theme, secondary }) =>
    secondary ? theme.colors.textSecondary : theme.colors.textPrimary};
  height: ${({ size }) => (size ? `${size}px` : '20px')};
  width: ${({ size }) => (size ? `${size}px` : '20px')};
  margin: ${({ margin }) => (margin ? `${margin}px` : '15px')};
`;

interface Props {
  icon?: keyof typeof ICONS;
  size?: number;
  margin?: number;
  secondary?: boolean;
  onPress?: () => void;
}

const IconButton = ({ icon, onPress, ...props }: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <Icon source={ICONS[icon || 'dots']} resizeMode="contain" {...props} />
    </TouchableOpacity>
  );
};

export default IconButton;
