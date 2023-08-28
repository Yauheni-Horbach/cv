import * as React from 'react';

import { LoadingContext } from '../LoadingContext';

export const useGlobalLoader = () => {
  return React.useContext(LoadingContext);
};
