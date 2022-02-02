import styled from 'styled-components/native';

interface Props {
  secondary?: boolean;
}

const Screen = styled.View<Props>`
  background-color: ${({ theme, secondary }) =>
    secondary ? theme.colors.secondary : theme.colors.primary};
  flex: 1;
`;

export default Screen;
