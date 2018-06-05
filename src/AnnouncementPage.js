import React from 'react';

import BoardList from './BoardList';
import { announcementListViewData } from './store';

export default function AnnouncementPage({ classes }) {
  return (
    <BoardList
      boardTitle='공지사항'
      boardList={announcementListViewData}
    />
  );
}