import React from 'react';

import NewsNavTab from '../components/navs/NewsNavTab';
import NewsList from '../containers/NewsList';
import { withWidth } from '@material-ui/core';

export default withWidth()(({ width, location: { pathname } }) => (
  <React.Fragment>
    <NewsNavTab />
    <NewsList noTopMargin={width === 'xs'} pathname={pathname} />
  </React.Fragment>
));