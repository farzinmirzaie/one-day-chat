import styled from 'styled-components/native';

interface Props {
  size?: string;
  vertical?: boolean;
}

const Divider = styled.View<Props>`
  width: ${({size, vertical}) => (vertical ? '1px' : size || '100%')};
  height: ${({size, vertical}) => (!vertical ? '1px' : size || '100%')};
  background-color: ${({theme}) => theme.colors.border};
`;

export default Divider;
