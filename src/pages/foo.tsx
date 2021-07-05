import * as React from 'react';
import { observer } from 'mobx-react';
import { NavLink } from 'react-router-dom';

import { register, inject } from '../providers';
import { FooStore } from '../stores';
import { compose } from '../utils';

const Foo = ({ foo }) => (
  <>
    <NavLink to="/">
      home
    </NavLink>
    <br />
    <NavLink to="/bar">
      bar
    </NavLink>
    <br />
    
    <button
      onClick={() => foo?.inc()}
    >
      inc
    </button>
    <div>this is FOO page</div>
    <div>
      counter: {foo?.count}
    </div>
  </>
);

export const FooPage = compose(
  observer,
  inject([FooStore, 'foo']),
)(Foo);
