import React from 'react';
import { withStyles, Typography } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

import { myCommentList } from './store';
import CommentList from './CommentList';
import Pagination from './Pagination';

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
    marginBottom: theme.spacing.unit * 5,
  },
});

const MyCommentsPage = ({ classes, history }) => {
  return (
    <div className={classes.root}>
      <Typography variant='display1' className={classes.title}>내가 작성한 댓글</Typography>

      <CommentList
        list={myCommentList}
        myCommentView
      />

      <Pagination total={2} center />
    </div>
  );
};

export default withStyles(styles)(withRouter(MyCommentsPage));