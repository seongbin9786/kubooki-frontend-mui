import React from 'react';
import {
  withStyles,
  Typography,
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';

import { myCommentList } from './store';
import LoadMoreBtn from './LoadMoreBtn';
import CommentList from './CommentList';

const styles = theme => ({
  root: {
    margin: '0 auto',
    marginTop: 20,
    maxWidth: 900,
    minWidth: 350,
    padding: '20px',
  },
  title: {
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * -1,
  },
});

const MyCommentsPage = ({ classes, history }) => {
  return (
    <div className={classes.root}>
      <Typography variant='display1'>내가 작성한 댓글</Typography>

      <CommentList
        list={myCommentList}
        myCommentView
      />

      <LoadMoreBtn btnStr='작성한 댓글 더 불러오기' />
    </div>
  );
};

export default withStyles(styles)(withRouter(MyCommentsPage));