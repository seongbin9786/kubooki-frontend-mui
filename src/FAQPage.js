import React from 'react';

import FQAList from './FAQList';

import { faqList } from './store';

export default () => (
  <FQAList eventList={faqList} />
);