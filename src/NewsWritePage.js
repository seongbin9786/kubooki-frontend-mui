import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import NewsFeedbackList from './NewsFeedbackList';
import NameCard from './NameCard';
import MyNewsList from './MyNewsList';
import { writerDemo } from './store';
import { Typography, Button } from '@material-ui/core';

const styles = theme => ({
  root: {
    margin: '0 auto',
    maxWidth: '1000px',
    padding: '20px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px 0',
  },
  writeBtn: {
    fontSize: '1rem',
  }
});

/*
  TODO 1. 자신의 명함 (게시글 형태 그대로)
  TODO 2. 기사 쓰기 버튼
  TODO 3. 피드백 현황 (댓글 목록 처럼)
*/
function NewsPage({ classes }) {
  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <Typography
          variant='display2'
        >
          기사 작성 페이지
        </Typography>
        <Button
          variant="raised"
          color="primary"
          className={classes.writeBtn}
        >
          기사 작성&nbsp;&nbsp;<i className="fas fa-md fa-pencil-alt"></i>
        </Button>
      </header>

      <NameCard writer={writerDemo} />

      <NewsFeedbackList />

      <MyNewsList />
    </div>
  );
};

export default withStyles(styles)(NewsPage);