import React from 'react';
import { Link } from 'react-router-dom';
import { Paper, withStyles, Typography, Button } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import FaIcon from './FaIcon';

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
  },
  newsUrlAnchor: {
    textDecoration: 'none',
  },
  newsUrlText: {
    transition: 'color 0.1s',
    '&:hover': {
      color: theme.palette.primary.main
    }
  },
  writer: {
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
  status: {
    display: 'flex',
    justifyContent: 'space-between'
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

/*
  id: '1',
  status: '답변대기',
  title: '영문서류 클리닉에 오탈자가 있습니다.',
  writer: '김성빈',
  date: '2018.05.12',
  targetNews: 1,
*/
function NewsCorrectionItem({ classes, item, history }) {
  const { id, status, title, writer, reqDate, resDate, targetNews } = item;
  const isFeedbackDone = status === '답변완료';
  const newsUrl = `/news/${targetNews.id}`;

  return (
    <Paper className={classes.root}>
      <header className={classes.header}>
        <div className={classes.titleContainer}>
          <Typography variant='title'>{title}</Typography>
          <Link to={newsUrl} className={classes.newsUrlAnchor}>
            <Typography variant='caption' className={classes.newsUrlText}>{'원문: ' + targetNews.title}</Typography>
          </Link>
        </div>
      </header>
      <main className={classes.status}>
        <div>
          <Typography variant='subheading' className={classes.writer}>{'요청: ' + writer}</Typography>
          <Typography variant='subheading' className={classes.date}>{reqDate + ' 요청'}</Typography>
          <br />
          <Typography variant='subheading' className={classes.dateNext}>{resDate + ' 완료'}</Typography>
        </div>
        <Button className={classes.btn} disabled={!isFeedbackDone}>확인</Button>
      </main>
      <footer>
        <Typography variant='caption' className={isFeedbackDone ? classes.statusBar : classes.statusBarNotDone}>
          &nbsp;<FaIcon icon={isFeedbackDone ? 'check' : 'envelope'} />&nbsp;&nbsp;{status}
        </Typography>
      </footer>
    </Paper>
  );
};

export default withStyles(styles)(NewsCorrectionItem);