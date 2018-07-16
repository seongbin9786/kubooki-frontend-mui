import React from 'react';

import { termsOfUse } from '../modules/store';
import BoardDetailPage from './BoardDetailPage';

export default function TermsOfServicePage() {
  return (
    <BoardDetailPage
      item={termsOfUse}
      useComment
    />
  );
};