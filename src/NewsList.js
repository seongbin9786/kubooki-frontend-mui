import React from 'react';
import { withRouter } from 'react-router-dom';

import GridListTemplate from './GridListTemplate';
import HeadlineNewsItem from './HeadlineNewsItem';
import NewsItem from './NewsItem';
import { TabList } from './NewsTabConfig';

function NewsList({ classes, location: { pathname }, index, newsList }) {
  // 1. index를 pathname의 값으로 결정한다. 
  // 2. 뉴스 상세 페이지 등에서는 index를 category에 판단하여 props로 제공한다.
  // 3. [2]의 경우에는 제공된 index에 맞는 기사 목록을 보인다.
  // 4. 올바른 탭 URL이 아닌 경우 렌더링하지 않는다. (index 값이 -1인 경우)
  if (index === undefined)
    index = TabList.findIndex(([, tabPath]) => tabPath === pathname);
  if (index === -1)
    return null;

  const [currentTab] = TabList[index];

  const items = [
    index === 0 ? <HeadlineNewsItem key='head' /> : null,
    ...(newsList.map(
      news => pathname === '/' || currentTab === news.category
        ? <NewsItem news={news} key={news.id} />
        : null
    )),
  ];

  return (
    <GridListTemplate
      items={items}
      btnStr='기사 더 불러오기'
    />
  );
}

export default withRouter(NewsList);