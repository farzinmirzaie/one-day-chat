import React from 'react';
import styled from 'styled-components/native';

const Image = styled.Image<Props>`
  background-color: ${({ theme }) => theme.colors.border};
  height: ${({ size }) => (size ? `${size}px` : '50px')};
  width: ${({ size }) => (size ? `${size}px` : '50px')};
  border-radius: ${({ size }) => (size ? `${size / 2}px` : '50px')};
  margin: 15px;
  margin-left: ${({ noLeftMargin }) => `${noLeftMargin ? 0 : 15}px`};
  margin-right: ${({ noRightMargin }) => `${noRightMargin ? 0 : 15}px`};
`;

interface Props {
  uri?: string;
  id?: string;
  size?: number;
  noLeftMargin?: boolean;
  noRightMargin?: boolean;
}

const Avatar = ({ uri, id, ...props }: Props) => {
  return (
    <Image
      source={{ uri: uri || `https://i.pravatar.cc/150?u=${id}` }}
      {...props}
    />
  );
};

export default Avatar;
