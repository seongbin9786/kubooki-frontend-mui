import React, { Component } from 'react';
import { withStyles, Typography, Button, withWidth } from '@material-ui/core';

import NewsFeedbackList from './NewsFeedbackList';
import NameCard from './NameCard';
import MyNewsList from './MyNewsList';
import NewsWriteDialog from './NewsWriteDialog';
import { writerDemo } from './store';
import Spacing from './Spacing';
import FaIcon from './FaIcon';
import { smallRootWithPadding, marginVertical } from './styles';

const styles = {
  smallRootWithPadding,
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px 0',
  },
  btn: {
    ...marginVertical(16),
    fontSize: '1rem',
  },
};

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
    const { classes, width } = this.props;
    const { writeDialogOpen } = this.state;

    return (
      <React.Fragment>
        <div className={classes.smallRootWithPadding}>
          <header className={width !== 'xs' ? classes.header : null}>
            <Typography variant='display2'>
              기사 작성 페이지
            </Typography>
            <Button
              variant="raised"
              color="primary"
              onClick={this.toggleDialog}
              fullWidth={width === 'xs'}
              className={width === 'xs' ? classes.btn : null}
            >
              기사 작성&nbsp;&nbsp;<FaIcon icon='pencil-alt' />
            </Button>
          </header>

          <NameCard writer={writerDemo} myPage />

          <Spacing height={12} />

          <NewsFeedbackList />

          <Spacing height={12} />

          <MyNewsList />
        </div>
        {
          writeDialogOpen ?
            <NewsWriteDialog
              open={writeDialogOpen}
              handleClose={this.toggleDialog}
            />
            : null
        }
      </React.Fragment >
    );
  }
}

export default withWidth()(withStyles(styles)(NewsWritePage));