import React from 'react';
import injectSheet from 'react-jss';
import compose from 'recompose/compose';
import { withRouter } from 'react-router-dom';
import { withWidth, Paper, Tabs, Tab } from '@material-ui/core';

import TabList from './MyPageTabConfig';
import Spacing from './Spacing';

const styles = {
  tabsContainer: props => ({
    zIndex: 1101,
    position: 'fixed',
    top: props.width === 'xs' ? 56 : 64,
    width: '100%',
  })
};

const CenteredTabs = ({ classes, width, history, location: { pathname } }) => {
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
      <Spacing height={48} />
      <div className={classes.tabsContainer}>
        <Paper>
          <Tabs
            value={index}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
            centered={width !== 'xs'}
          >
            {tabs}
          </Tabs>
        </Paper>
      </div>
    </React.Fragment>
  );
};

export default compose(withWidth(), injectSheet(styles))(withRouter(CenteredTabs));
