import styled from 'styled-components/native';

interface Props {
  size?: number;
}

const Spacer = styled.View<Props>`
  margin: ${({ size }) => size || 5}px;
`;

export default Spacer;
