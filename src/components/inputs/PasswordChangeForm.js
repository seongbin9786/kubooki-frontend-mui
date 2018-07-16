import React from 'react';
import { withStyles } from '@material-ui/core';

import FaIconBtn from '../buttons/FaIconBtn';
import PasswordInput from './PasswordInput';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 50,
  },
  submitBtn: {
    marginTop: 20,
  },
};

export default withStyles(styles)(({ classes }) => (
  <div className={classes.root}>

    <PasswordInput id='currentPassword' label="현재 비밀번호" />
    <PasswordInput id='newPassword' label="새로운 비밀번호" />
    <PasswordInput id='newPasswordAgain' label="새로운 비밀번호 재입력" />

    <FaIconBtn
      className={classes.submitBtn}
      btnStr='비밀번호 변경'
      color='primary'
      variant='raised'
      icon='paper-plane'
    />
  </div>
));