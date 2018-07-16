import React from 'react';
import injectSheet from 'react-jss';
import { Paper, Typography, Button } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

import { spaceBetween } from '../styles/styles';
import theme from '../configs/ThemeConfig';
import FaIcon from './FaIcon';

const styles = {
  root: {
    marginBottom: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 2,
  },
  title: {
    paddingBottom: theme.spacing.unit,
  },
  chip: {
    padding: '0 4px',
    marginLeft: theme.spacing.unit,
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    verticalAlign: 'middle',
    height: '1.5rem',
  },
  counter: {
    color: theme.palette.primary.main,
    fontSize: '2rem',
  },
  counterContainer: {
    marginRight: theme.spacing.unit * 3,
  },
  writers: {
    color: grey[500],
    display: 'inline-block',
  },
  date: {
    color: grey[600],
  },
  spaceBetween,
  statusBar: ({ item: { status } }) => ({
    color: 'white',
    margin: theme.spacing.unit * -2,
    marginTop: theme.spacing.unit * 1,
    padding: '4px 8px',
    textAlign: 'center',
    backgroundColor: status === '피드백 완료됨' ? theme.palette.primary.main : grey[200],
  }),
  alignTextRight: {
    textAlign: 'right',
  }
};

/*
  id: '3',
  title: '2018학년도 \'봄, 소풍\' 봄 축제 3일차 거리행사',
  short: false,
  lastReqDate: '15.05.2018',
  lastResDate: '-',
  status: '피드백 요청',
*/
function FeedbackItem({ classes, item }) {

  const { id, title, writers, short, feedbackCount, lastReqDate, lastResDate, status } = item;
  const isFeedbackDone = status === '피드백 완료됨';

  return (
    <Paper className={classes.root}>

      <Typography variant='title' className={classes.title}>
        {title}
        {short && <span className={classes.chip}>단신</span>}
      </Typography>

      <main className={classes.spaceBetween}>
        <Typography variant='subheading' className={classes.writers}>{writers.toString()}</Typography>
        <div className={classes.alignTextRight}>
          <Typography variant='subheading' className={classes.date}>{lastReqDate + ' 요청'}</Typography>
          <Typography variant='subheading' className={classes.date}>{lastResDate + ' 완료'}</Typography>
        </div>
      </main>

      <div className={classes.spaceBetween}>
        <span className={classes.counterContainer}>
          <b className={classes.counter}>{feedbackCount}</b>회
        </span>
        <Button disabled={!isFeedbackDone}>확인</Button>
      </div>

      <Typography variant='caption' className={classes.statusBar}>
        &nbsp;<FaIcon icon={isFeedbackDone ? 'check' : 'envelope'} />&nbsp;&nbsp;{status}
      </Typography>

    </Paper>
  );
};

export default injectSheet(styles)(FeedbackItem);