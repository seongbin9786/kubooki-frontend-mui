import React from 'react';
import { Typography } from '@material-ui/core';

import SortBar from './SortBar';
import NewsList from './NewsList';
import { newsList } from './store';

function MyNewsList() {
  return (
    <div>
      <Typography variant='display1'>내가 작성한 기사 목록</Typography>
      <SortBar tabName='최신순' />
      <NewsList index={1} newsList={newsList} />
    </div>
  );
};

export default MyNewsList;