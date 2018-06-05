import React from 'react';

import { meetingLogData } from './store';
import BoardDetail from './BoardDetail';

export default function MeetingLogReadPage() {
  return (
    <BoardDetail
      item={meetingLogData}
      useComment
    />
  );
};