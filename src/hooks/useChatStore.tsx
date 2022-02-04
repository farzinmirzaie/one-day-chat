import { useContext } from 'react';
import { ChatStoreContext } from '../stores';

export function useChatStore() {
  const context = useContext(ChatStoreContext);

  if (context === undefined) {
    throw new Error('useChatStore must be used within a ChatStoreProvider');
  }

  return context;
}
