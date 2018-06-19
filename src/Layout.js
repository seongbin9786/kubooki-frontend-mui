import React from 'react';

import Header from './Header';
import FabNav from './FabNav';
import { globalUser } from './store';
import withLoader from './withLoader';

const Layout = ({ children }) => (
  <React.Fragment>
    <Header user={globalUser} />
    {children}
    <FabNav />
  </React.Fragment>
);

export default withLoader(Layout);