import React from 'react';

import BoardList from '../containers/BoardList';
import { announcementListViewData } from '../modules/store';

export default function AnnouncementPage({ classes }) {
  return (
    <BoardList
      boardTitle='공지사항'
      addButtonRightAlign
      boardList={announcementListViewData}
    />
  );
}