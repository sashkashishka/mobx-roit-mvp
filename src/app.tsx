import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { hot } from "react-hot-loader";

import { StoreProvider } from './providers';
import { rootStore, CommonStore } from './stores';

import { FooPage } from './pages/foo';
import { BarPage } from './pages/bar';
import { IndexPage } from './pages';

rootStore.register(CommonStore, 'common');

const App = () => {
  return (
    <StoreProvider
      rootStore={rootStore}
    >
      <BrowserRouter>
        <Switch>
          <Route path="/foo">
            <FooPage />
          </Route>

          <Route path="/bar">
            <BarPage />
          </Route>

          <Route path="/">
            <IndexPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </StoreProvider>
  );
};

export default hot(module)(App);

