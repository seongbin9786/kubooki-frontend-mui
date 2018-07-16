import React from 'react';

import { meetingLogData } from '../modules/store';
import BoardDetailPage from './BoardDetailPage';

export default function MeetingLogReadPage() {
  return (
    <BoardDetailPage
      item={meetingLogData}
      useComment
    />
  );
};