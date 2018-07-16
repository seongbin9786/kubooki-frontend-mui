import React from 'react';
import { withStyles, Typography } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

import { myCommentList } from '../modules/store';
import CommentList from '../containers/CommentList';
import Pagination from '../components/navs/Pagination';

import { smallRootWithPadding } from '../styles/styles';

const styles = theme => ({
  smallRootWithPadding,
  title: {
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 5,
  },
});

const MyCommentsPage = ({ classes, history }) => {
  return (
    <div className={classes.smallRootWithPadding}>
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