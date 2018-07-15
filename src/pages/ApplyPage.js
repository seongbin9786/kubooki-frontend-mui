import React from 'react';

import { apply } from './store';
import BoardDetail from './BoardDetail';

function ApplyPage({ }) {
  return (
    <BoardDetail
      item={apply}
      useComment
    />
  );
}

export default ApplyPage;