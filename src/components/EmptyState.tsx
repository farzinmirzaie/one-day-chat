import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Button, Center, Spacer, TextPrimary, TextSecondary } from '.';

interface Props {
  title?: string;
  message?: string;
  isLoading?: boolean;
  onRetry?: () => void;
}

const EmptyState = ({ title, message, isLoading, onRetry }: Props) => {
  if (isLoading) {
    return (
      <Center>
        <ActivityIndicator />
      </Center>
    );
  }

  return (
    <Center>
      {title && <TextPrimary>{title?.toUpperCase()}</TextPrimary>}
      <Spacer />
      {message && <TextSecondary>{message}</TextSecondary>}
      <Spacer size={10} />
      {onRetry && <Button caption={'RETRY'} onPress={onRetry} />}
    </Center>
  );
};

export default EmptyState;
