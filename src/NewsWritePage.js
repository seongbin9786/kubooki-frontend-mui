import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import NewsFeedbackList from './NewsFeedbackList';
import NameCard from './NameCard';
import MyNewsList from './MyNewsList';
import NewsWriteDialog from './NewsWriteDialog';
import { writerDemo } from './store';
import { Typography, Button } from '@material-ui/core';

import FaIcon from './FaIcon';

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
class NewsWritePage extends Component {
  state = {
    writeDialogOpen: false,
  }

  toggleDialog = () => this.setState(({ writeDialogOpen }) => ({
    writeDialogOpen: !writeDialogOpen
  }))

  render() {
    const { classes } = this.props;
    const { writeDialogOpen } = this.state;

    return (
      <React.Fragment>
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
              onClick={this.toggleDialog}
            >
              기사 작성&nbsp;&nbsp;<FaIcon icon='pencil-alt' />
            </Button>
          </header>

          <NameCard writer={writerDemo} />

          <NewsFeedbackList />

          <MyNewsList />
        </div>
        {writeDialogOpen ?
          <NewsWriteDialog
            open={writeDialogOpen}
            handleClose={this.toggleDialog}
          />
          : null}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(NewsWritePage);