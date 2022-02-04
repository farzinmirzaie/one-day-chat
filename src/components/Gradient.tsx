import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from 'styled-components/native';

interface Props {
  children?: React.ReactNode;
  color?: string;
}

const Gradient = ({ children, color, ...props }: Props) => {
  const { colors } = useTheme();

  return (
    <LinearGradient
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      colors={color ? [color, color] : [colors.accentDark, colors.accentLight]}
      {...props}>
      {children}
    </LinearGradient>
  );
};

export default Gradient;
