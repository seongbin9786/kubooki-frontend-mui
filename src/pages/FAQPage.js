import React from 'react';

import FQAList from '../containers/FAQList';

import { faqList } from '../modules/store';

export default () => (
  <FQAList eventList={faqList} />
);