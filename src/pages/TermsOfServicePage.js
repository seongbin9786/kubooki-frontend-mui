import React from 'react';

import { termsOfUse } from './store';
import BoardDetail from './BoardDetail';

export default function TermsOfService() {
  return (
    <BoardDetail
      item={termsOfUse}
      useComment
    />
  );
};