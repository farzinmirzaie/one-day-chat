import React from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';

const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
`;

const PlatformKeyboardAvoidingView = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      {children}
    </KeyboardAvoidingView>
  );
};

export default PlatformKeyboardAvoidingView;
