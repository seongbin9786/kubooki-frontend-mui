import React from 'react';
import { withRouter } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import withWidth from '@material-ui/core/withWidth';

import { TabList } from '../../configs/NewsTabConfig';

const CenteredTabs = ({ width, history, location: { pathname } }) => {
  console.log(width);
  const index = TabList.findIndex(([, tabPath]) => tabPath === pathname);
  if (index === -1) return null;

  const tabs = TabList.map(([name, path]) =>
    <Tab
      label={name}
      key={name}
      onClick={() => history.push(path)}
    />
  );

  return (
    <React.Fragment>
      <div style={{ height: 48 }} />
      <div style={
        {
          flexGrow: 1,
          zIndex: 1101,
          position: 'fixed',
          top: width === 'xs' ? 56 : 64,
          width: '100%'
        }
      }>
        <Paper>
          <Tabs
            value={index}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
            centered
          >
            {tabs}
          </Tabs>
        </Paper>
      </div>
    </React.Fragment>
  );
};

export default withWidth()(withRouter(CenteredTabs));
