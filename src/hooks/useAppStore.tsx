import { useContext } from 'react';
import { AppStoreContext } from '../stores';

export function useAppStore() {
  const context = useContext(AppStoreContext);

  if (context === undefined) {
    throw new Error('useAppStore must be used within a AppStoreProvider');
  }

  return context;
}
