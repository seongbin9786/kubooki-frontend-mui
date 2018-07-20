import React from 'react';
import DashboardNav from '../components/navs/DashboardNav';

import TabList from '../configs/DashboardTabConfig';
import { globalUser as user } from '../modules/store';
import Spacing from '../styles/Spacing';
import { SmallRootWithPadding } from '../styles/CommonStyledComponent';

function DashboardPage({ history, location: { pathname } }) {
  const tabsForUser = TabList.filter(({ role }) => user.hasRole(role));

  if (tabsForUser.length === 0)
    return <div>권한이 없습니다.</div>;

  const index = tabsForUser.findIndex(({ link }) => link === pathname);
  const { component: Component } = tabsForUser[index];

  console.log('[Dashboard] TabList:', TabList);
  console.log('[Component] component:', Component);

  return (
    <React.Fragment>
      <SmallRootWithPadding>
        <Component />
      </SmallRootWithPadding>
      <DashboardNav
        tabList={tabsForUser}
        index={index}
        history={history}
        user={user}
      />
      <Spacing height={57} />
    </React.Fragment>
  );
}

export default DashboardPage;