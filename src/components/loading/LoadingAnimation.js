import React from 'react';
import injectSheet from 'react-jss';
import { withWidth, Fade } from '@material-ui/core';

import theme from '../configs/ThemeConfig';
import loaderImgMobile from './loaderMobile.svg';
import loaderImg from './loader.svg';

const styles = {
  background: ({ show }) => ({
    width: show ? '100%' : 0,
    height: show ? '100%' : 0,
    background: show ? 'white' : 'transparent',
    zIndex: show ? 2000 : 0,
  }),
  loader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2001,
  }
};

const timeout = {
  enter: theme.transitions.duration.shortest,
  exit: theme.transitions.duration.standard,
};

export default withWidth()(injectSheet(styles)(function ({ show, width, classes }) {
  return (
    <Fade
      in={show}
      timeout={timeout}
    >
      <div className={classes.background}>
        <img className={classes.loader} src={width === 'xs' ? loaderImgMobile : loaderImg} alt='loader' />
      </div>
    </Fade>
  );
}));