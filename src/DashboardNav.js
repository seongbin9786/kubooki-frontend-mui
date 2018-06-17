import React from 'react';
import classNames from 'classnames';
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
    paddingBottom: 4,
  },
  action: {
    '@media (max-width: 600px)': {
      minWidth: 0,
      maxWidth: '20%',
      boxSizing: 'border-box',
      paddingLeft: 4,
      paddingRight: 4,
      fontSize: 10,
    }
  },
  label: {
    '@media (max-width: 600px)': {
      fontSize: '0.65rem !important',
    }
  },
  selected: {
    '@media (max-width: 600px)': {
      fontSize: '0.75rem !important',
    }
  }
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
          classes={{
            root: classes.action,
            label: classes.label,
            selected: classes.selected,
          }}
        />
      )}
    </BottomNavigation>
  );
}

export default withStyles(styles)(DashboardNav);