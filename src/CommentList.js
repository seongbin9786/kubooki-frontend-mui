import React from 'react';
import { Divider, Paper, Typography, withStyles } from '@material-ui/core';

import CommentItem from './CommentItem';
import CommentWriteBox from './CommentWriteBox';

const styles = theme => ({
  root: {
    maxWidth: '1100px',
    margin: '0 auto',
    marginTop: '40px',
  },
  counter: {
    color: theme.palette.primary.main
  },
  listContainer: {
    marginTop: 20,
    marginBottom: 80,
    width: '100%',
  },
  noComment: {
    textAlign: 'center',
    padding: '30px',
    color: theme.palette.primary.light,
  }
});

function CommentList({ classes, list, user }) {

  return (
    <div className={classes.root}>

      <Typography variant='title'>
        <b className={classes.counter}>{list.length}</b>개의 댓글
      </Typography>

      <CommentWriteBox user={user} />

      <Paper
        className={classes.listContainer}
        elevation={1}
      >
        {list ?
          list.map((comment, index) =>
            <React.Fragment>
              <CommentItem comment={comment} key={index} />
              <Divider />
            </React.Fragment>)
          : <Typography
            variant='headline'
            className={classes.noComment}
          >
            <i className="fas fa-lg fa-comment-dots"></i> 작성된 댓글이 없습니다.
          </Typography>
        }
      </Paper>
    </div>
  );
}

export default withStyles(styles)(CommentList);