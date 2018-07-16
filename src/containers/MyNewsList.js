import React from 'react';
import { Typography, withWidth } from '@material-ui/core';

import SortBar from '../components/inputs/SortBar';
import NewsList from './NewsList';
import { newsList } from '../modules/store';

function MyNewsList({ width }) {
  return (
    <div>
      <Typography variant={width === 'xs' ? 'headline' : 'display1'}>내가 작성한 기사 목록</Typography>
      <SortBar tabName='최신순' />
      <NewsList index={1} newsList={newsList} />
    </div>
  );
};

export default withWidth()(MyNewsList);