import React from 'react';

import { announcementData } from './store';
import BoardDetail from './BoardDetail';

export default function AnnouncementReadPage() {
  return (
    <BoardDetail
      item={announcementData}
    />
  );
};