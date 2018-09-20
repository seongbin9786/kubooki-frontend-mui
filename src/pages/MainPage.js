import React from 'react';

import NewsNavTab from '../components/navs/NewsNavTab';
import NewsList from '../containers/NewsList';
import { newsList } from '../modules/store';
import { withWidth } from '@material-ui/core';

export default withWidth()(({ width }) => (
  <React.Fragment>
    <NewsNavTab />
    <NewsList newsList={newsList} noTopMargin={width === 'xs'} />
  </React.Fragment>
));