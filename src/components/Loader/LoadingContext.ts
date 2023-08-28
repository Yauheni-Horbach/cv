import * as React from 'react';

export interface LoadingContext {
  show: (text?: string, opacity?: number) => Promise<void>;
  hide: () => void;
  isVisible: boolean;
}

export const LoadingContext = React.createContext<LoadingContext>({
  show: async () => {},
  hide: () => {},
  isVisible: false,
});
