import * as React from 'react';

import { iRS } from '../../stores/root';

export const StoreContext = React.createContext<iRS>(undefined);

export const StoreProvider = ({ rootStore, children }) => {
  return (
    <StoreContext.Provider
      value={rootStore}
    >
      {children}
    </StoreContext.Provider>
  );
};
