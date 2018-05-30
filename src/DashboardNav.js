import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';

const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    left: 0,
    bottom: 0,
    borderTop: '1px solid rgba(158, 158, 158, 0.2)',
  },
};

function DashboardNav({ classes, tabList, history, index }) {
  return (
    <BottomNavigation
      value={index}
      showLabels
      className={classes.root}
    >
      {tabList.map(({ icon, title, link }, index) =>
        <BottomNavigationAction
          label={title}
          icon={<Icon>{icon}</Icon>}
          key={index}
          onClick={() => history.push(link)}
        />
      )}
    </BottomNavigation>
  );
}

export default withStyles(styles)(DashboardNav);