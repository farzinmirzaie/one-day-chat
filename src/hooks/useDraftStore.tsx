import { useContext } from 'react';
import { DraftStoreContext } from '../stores';

export function useDraftStore() {
  const context = useContext(DraftStoreContext);

  if (context === undefined) {
    throw new Error('useDraftStore must be used within a DraftStoreProvider');
  }

  return context;
}
