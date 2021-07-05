import * as React from 'react';
import { NavLink } from 'react-router-dom';

export const IndexPage = ({ foo }) => (
  <>
    <NavLink to="/foo">
      foo
    </NavLink>
    <br />
    <NavLink to="/bar">
      bar
    </NavLink>
    <br />
    
    <div>this is index page</div>
  </>
);
