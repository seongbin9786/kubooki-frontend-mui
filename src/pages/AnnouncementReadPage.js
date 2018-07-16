import React from 'react';

import { announcementData } from '../modules/store';
import BoardDetailPage from './BoardDetailPage';

export default function AnnouncementReadPage() {
  return (
    <BoardDetailPage
      item={announcementData}
    />
  );
};