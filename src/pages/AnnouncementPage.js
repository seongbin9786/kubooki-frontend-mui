import React from 'react';

import BoardListPage from './BoardListPage';
import { announcementListViewData } from '../modules/store';

export default () => {
  return (
    <BoardListPage
      boardTitle='공지사항'
      addButtonRightAlign
      boardList={announcementListViewData}
    />
  );
};