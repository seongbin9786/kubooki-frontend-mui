import React from 'react';

import MyPageNav from './MyPageNav';
import TabList from './MyPageTabConfig';

// TODO: 각 탭 별 컨텐츠 만들기
export default ({ location: { pathname } }) => {
  const index = TabList.findIndex(([, link]) => link === pathname);
  const [, , Component] = TabList[index];

  return (
    <React.Fragment>
      <MyPageNav />
      {Component ? <Component /> : null}
    </React.Fragment>
  );
};