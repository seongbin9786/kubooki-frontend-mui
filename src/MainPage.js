import React from 'react';

import NewsNavTab from './NewsNavTab';
import NewsList from './NewsList';

import { newsList } from './store';
import { withWidth } from '@material-ui/core';

export default withWidth()(({ width }) => (
  <React.Fragment>
    <NewsNavTab />
    <NewsList newsList={newsList} noTopMargin={width === 'xs'} />
  </React.Fragment>
));