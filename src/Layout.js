import React from 'react';

import Header from './Header';
import FabNav from './FabNav';
import { globalUser } from './store';

export default ({ children }) => (
  <React.Fragment>
    <Header user={globalUser} />
    {children}
    <FabNav />
  </React.Fragment>
);