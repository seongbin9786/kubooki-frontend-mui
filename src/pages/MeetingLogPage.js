import React from 'react';

import BoardListPage from './BoardListPage';
import { meetingLogListViewData } from '../modules/store';

function MeetingLogPage() {
  return (
    <BoardListPage
      boardTitle='회의록'
      addButtonRightAlign
      boardList={meetingLogListViewData}
    />
  );
}

export default MeetingLogPage;