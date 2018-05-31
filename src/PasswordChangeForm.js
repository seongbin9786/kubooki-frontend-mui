import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import FaIconBtn from './FaIconBtn';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 50,
  },
  submitBtn: {
    marginTop: 20,
  }
});

export default withStyles(styles)(class extends Component {
  state = {
    currentPassword: '',
    newPassword: '',
    newPasswordAgain: '',
  };

  handleChange = inputName => ({ target: { value } }) =>
    this.setState({ [inputName]: value });

  render() {
    const { classes } = this.props;
    const { currentPassword, newPassword, newPasswordAgain } = this.state;

    return (
      <div className={classes.root}>
        <TextField
          margin="dense"
          id="currentPpassword"
          label="현재 비밀번호"
          value={currentPassword}
          onChange={this.handleChange('currentPassword')}
          type="currentPassword"
          fullWidth
        />
        <TextField
          margin="dense"
          id="password"
          label="새로운 비밀번호"
          value={newPassword}
          onChange={this.handleChange('newPassword')}
          type="password"
          fullWidth
        />
        <TextField
          margin="dense"
          label="새로운 비밀번호 재입력"
          value={newPasswordAgain}
          onChange={this.handleChange('newPasswordAgain')}
          type="password"
          fullWidth
        />

        <FaIconBtn
          className={classes.submitBtn}
          btnStr='비밀번호 변경'
          color='primary'
          variant='raised'
          type='paper-plane'
        />
      </div>
    );
  }
});