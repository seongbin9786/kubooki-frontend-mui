import React from 'react';

import NewsNavTab from './NewsNavTab';
import NewsList from './NewsList';

import { newsList } from './store';

export default () => (
  <React.Fragment>
    <NewsNavTab />
    <NewsList newsList={newsList} />
  </React.Fragment>
);