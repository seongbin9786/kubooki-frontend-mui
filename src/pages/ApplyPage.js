import React from 'react';

import { apply } from '../modules/store';
import BoardDetailPage from './BoardDetailPage';

function ApplyPage({ }) {
  return (
    <BoardDetailPage
      item={apply}
      useComment
    />
  );
}

export default ApplyPage;