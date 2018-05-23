import React from 'react';
import { Paper, withStyles, Typography, Button } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const styles = theme => ({
  root: {
    position: 'relative',

    marginBottom: theme.spacing.unit * 2,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',

    padding: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 3,
  },
  titleContainer: {
    paddingTop: theme.spacing.unit,
    paddingBottom: -4,
    display: 'flex',
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
    width: 200,
    paddingLeft: theme.spacing.unit * 3,
  },
  date: {
    display: 'inline-block',
    color: grey[600],
    width: 118,
    textAlign: 'right',
  },
  dateNext: {
    paddingLeft: theme.spacing.unit * 3,
    marginLeft: 200,

    display: 'inline-block',
    color: grey[600],
    width: 118,
    textAlign: 'right',
  },
  statusBar: {
    marginTop: 10,
    color: 'white',
    padding: '4px 8px',
    textAlign: 'center',
    backgroundColor: theme.palette.primary.main,
  },
  statusBarNotDone: {
    marginTop: 10,
    color: 'rgba(0, 0, 0, 0.87)',
    padding: '4px 8px',
    textAlign: 'center',
    backgroundColor: grey[200],
  },
  btn: {
    marginRight: 20,
  }
});

const dimmerCSS = {
  position: 'absolute',
  top: '0',
  left: '0',
  height: '100%',
  width: '100%',
  background: 'black',
  opacity: '0.2',
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
      <header className={classes.header}>
        <div className={classes.titleContainer}>
          <Typography variant='title'>{title}</Typography>
          {short ? <span className={classes.chip}>단신</span> : null}
        </div>
        <span className={classes.counterContainer}><b className={classes.counter}>{feedbackCount}</b>회</span>
      </header>
      <main style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <Typography variant='subheading' className={classes.writers}>{writers.toString()}</Typography>
          <Typography variant='subheading' className={classes.date}>{lastReqDate + ' 요청'}</Typography>
          <br />
          <Typography variant='subheading' className={classes.dateNext}>{lastResDate + ' 완료'}</Typography>
        </div>
        <Button className={classes.btn} disabled={!isFeedbackDone}>확인</Button>
      </main>
      <footer>
        <Typography variant='caption' className={isFeedbackDone ? classes.statusBar : classes.statusBarNotDone}>
          &nbsp;
          {isFeedbackDone ? <i className="fas fa-md fa-check"></i> : <i className="fas fa-md fa-envelope"></i>}
          &nbsp;&nbsp;
          {status}
        </Typography>
      </footer>
    </Paper>
  );
};

export default withStyles(styles)(FeedbackItem);