import React from 'react';

import FlatListTemplate from './FlatListTemplate';
import NewsFeedbackItem from './NewsFeedbackItem';
import { feedbackList } from './store';
import SortBar from './SortBar';
import FaIcon from './FaIcon';
import { withWidth } from '@material-ui/core';
import NewsFeedbackItemMobile from './NewsFeedbackItemMobile';

export default withWidth()(({ width }) => {
  const titleMsg = '피드백 중인 기사';
  const noContentMsg = <span><FaIcon icon='lg-check-circle' /> 피드백 과정 중인 기사가 없습니다.</span>;
  const Component = width === 'xs' ? NewsFeedbackItemMobile : NewsFeedbackItem;
  const items = feedbackList.map((item, index) => <Component item={item} key={index} />);

  return (
    <FlatListTemplate
      titleType={width === 'xs' ? 'headline' : 'display1'}
      title={titleMsg}
      subHeader={<SortBar tabName='오래된 요청 순' />}
      items={items}
      noContentMsg={noContentMsg}
    />
  );
});