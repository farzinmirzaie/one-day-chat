import styled from 'styled-components/native';

interface Props {
  size?: number;
}

const TextPrimary = styled.Text<Props>`
  color: ${({theme}) => theme.colors.textPrimary};
  font-size: ${({size}) => (size ? `${size}px` : '18px')};
  font-weight: bold;
  margin-bottom: 2px;
`;

export default TextPrimary;
