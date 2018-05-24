import React from 'react';

import FlatListTemplate from './FlatListTemplate';
import NewsFeedbackItem from './NewsFeedbackItem';
import { feedbackList } from './store';
import SortBar from './SortBar';

export default () => {
  const titleMsg = '피드백 중인 기사';
  const noContentMsg = <span><i className="fas fa-lg fa-check-circle"></i> 피드백 과정 중인 기사가 없습니다.</span>;
  const items = feedbackList.map((item, index) => <NewsFeedbackItem item={item} key={index} />);

  return (
    <FlatListTemplate
      titleType='display1'
      title={titleMsg}
      subHeader={<SortBar tabName='오래된 요청 순' />}
      items={items}
      noContentMsg={noContentMsg}
    />
  );
};