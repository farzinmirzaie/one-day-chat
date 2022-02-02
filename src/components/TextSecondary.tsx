import styled from 'styled-components/native';

interface Props {
  size?: number;
  bold?: boolean;
}

const TextSecondary = styled.Text<Props>`
  color: ${({theme}) => theme.colors.textSecondary};
  font-size: ${({size}) => (size ? `${size}px` : '14px')};
  font-weight: ${({bold}) => (bold ? 'bold' : 'normal')};
`;

export default TextSecondary;
