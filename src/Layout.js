import React from 'react';

import Header from './Header';
import FabNav from './FabNav';

export default ({ children }) => (
  <React.Fragment>
    <Header />
    {children}
    <FabNav />
  </React.Fragment>
);