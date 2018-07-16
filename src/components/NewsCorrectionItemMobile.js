import React from 'react';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';
import { Paper, Typography, Button } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import FaIcon from './FaIcon';
import theme from '../configs/ThemeConfig';
import { spaceBetween } from '../styles/styles';

const styles = {
  root: {
    marginBottom: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 2,
  },
  titleContainer: {
    paddingTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
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
  },
  date: {
    color: grey[600],
    lineHeight: 1.2,
  },
  spaceBetween,
  statusBar: ({ item: { status } }) => ({
    padding: '4px 8px',
    textAlign: 'center',
    marginTop: theme.spacing.unit * 2,
    margin: theme.spacing.unit * -2,

    color: status === '답변완료' ? 'white' : 'rgba(0, 0, 0, 0.87)',
    backgroundColor: status === '답변완료' ? theme.palette.primary.main : grey[200],
  }),
  btnContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 3,
  }
};

/*
  id: '1',
  status: '답변대기',
  title: '영문서류 클리닉에 오탈자가 있습니다.',
  writer: '김성빈',
  date: '2018.05.12',
  targetNews: 1,
*/
function NewsCorrectionItemMobile({ classes, item, history }) {
  const { id, status, title, writer, reqDate, resDate, targetNews } = item;
  const isFeedbackDone = status === '답변완료';
  const newsUrl = `/news/${targetNews.id}`;

  return (
    <Paper className={classes.root}>

      <div className={classes.titleContainer}>
        <Typography variant='title'>{title}</Typography>
        <Link to={newsUrl} className={classes.newsUrlAnchor}>
          <Typography variant='caption' className={classes.newsUrlText}>{'원문: ' + targetNews.title}</Typography>
        </Link>
      </div>

      <main className={classes.spaceBetween}>
        <Typography variant='subheading' className={classes.writer}>{'요청: ' + writer}</Typography>
        <div className={classes.alignTextRight}>
          <Typography variant='subheading' className={classes.date}>{reqDate + ' 요청'}</Typography>
          <Typography variant='subheading' className={classes.date}>{resDate + ' 완료'}</Typography>
        </div>
      </main>

      <div className={classes.btnContainer}>
        <Button disabled={isFeedbackDone}>확인</Button>
      </div>

      <footer>
        <Typography variant='caption' className={classes.statusBar}>
          &nbsp;<FaIcon icon={isFeedbackDone ? 'check' : 'envelope'} />&nbsp;&nbsp;{status}
        </Typography>
      </footer>

    </Paper>
  );
};

export default injectSheet(styles)(NewsCorrectionItemMobile);