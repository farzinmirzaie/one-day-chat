import styled from 'styled-components/native';

interface Props {
  color?: string;
  size?: number;
  bold?: boolean;
}

const TextSecondary = styled.Text<Props>`
  color: ${({ theme, color }) => color || theme.colors.textSecondary};
  font-size: ${({ size }) => (size ? `${size}px` : '14px')};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;

export default TextSecondary;
