import React from 'react';
import { withStyles, Typography } from '@material-ui/core';
import FaIconBtn from './FaIconBtn';

const styles = theme => ({
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  center: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  btn: {
    fontSize: '1.5rem',
  },
  info: {
    margin: 4,
  },
  messageNo: {
    extend: 'info',
    color: theme.palette.grey[400]
  },
  messageYes: {
    extend: 'info',
    color: theme.palette.primary.main
  },
  counter: {
    color: theme.palette.primary.main
  }
});

const canJoin = true;
const participantsNum = 5;

const EventParticipate = ({ classes, handleClick }) => (
  <div className={classes.row}>
    <div className={classes.center}>
      <FaIconBtn
        btnStr={'참여하기 (' + participantsNum + '명 참여중)'}
        color='primary'
        variant='raised'
        icon='hand-point-right'
        iconLeft
        className={classes.btn}
        disabled={!canJoin}
        onClick={handleClick}
      />
      <div className={classes.row}>
        <Typography variant='subheading' className={classes['message' + (canJoin ? 'Yes' : 'No')]}>{canJoin ? '지금 참여해보세요!' : '이미 참여하셨습니다.'}</Typography>
      </div>
    </div>
  </div>
);

export default withStyles(styles)(EventParticipate);