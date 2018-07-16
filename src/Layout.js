import React from 'react';

import Header from './containers/Header';
import FabNav from './components/navs/FabNav';
import { globalUser } from './modules/store';
import withLoader from './utils/withLoader';

const Layout = ({ children }) => (
  <React.Fragment>
    <Header user={globalUser} />
    {children}
    <FabNav />
  </React.Fragment>
);

export default withLoader(Layout);