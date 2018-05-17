import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

import { TabList } from './TabConfig';

const BIG_FAB_SIZE = 64;
const SMALL_FAB_SIZE = 56;
const GAP_FOR_HIDE = 20;
const MARGIN = 8;
const BASE = 24;

const styles = theme => ({
  nav: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
    width: BIG_FAB_SIZE,
    height: BIG_FAB_SIZE
  },
  hidden: {
    position: 'fixed',
    right: GAP_FOR_HIDE,
    transition: 'all 0.3s',
    width: SMALL_FAB_SIZE,
    height: SMALL_FAB_SIZE,
  },
  text: {
    width: 30,
  }
});

class FloatingActionButtons extends Component {
  state = {
    open: false
  }

  handleClick = () =>
    this.setState(({ open }) => ({
      open: !open
    }));

  navigateTo = name => () => {
    this.handleClick();

    const { history } = this.props;
    const index = TabList.findIndex(([tabName]) => tabName === name);
    const [, link] = TabList[index];
    history.push(link);
  }

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    const buttons = TabList.map(([name], index) => (
      <Button
        variant="fab"
        color="primary"
        aria-label={name}
        className={classes.hidden}
        onClick={this.navigateTo(name)}
        key={index}
        style={
          open ? { bottom: BASE + (SMALL_FAB_SIZE + MARGIN) * (index + 1) }
            : { bottom: GAP_FOR_HIDE, boxShadow: 'none' }
        }
      >
        <Typography color='inherit' className={classes.text}>
          {name}
        </Typography>
      </Button>
    ));

    return (
      <div>
        {buttons}
        <Button
          variant="fab"
          color="primary"
          aria-label="navigate"
          className={classes.nav}
          onClick={this.handleClick}>
          <Icon>keyboard_arrow_right</Icon>
        </Button>
      </div >
    );
  }
}

export default withStyles(styles)(withRouter(FloatingActionButtons));