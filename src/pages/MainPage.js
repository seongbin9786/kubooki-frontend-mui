import React from 'react';
import { withWidth } from '@material-ui/core';

import NewsNavTab from '../components/navs/NewsNavTab';
import NewsList from '../containers/NewsList';
import { newsList } from '../modules/store';

export default withWidth()(({ width }) => (
  <React.Fragment>
    <NewsNavTab />
    <NewsList newsList={newsList} noTopMargin={width === 'xs'} />
  </React.Fragment>
));