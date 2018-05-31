import React from 'react';
import { Typography, withStyles, Button } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import { withRouter } from 'react-router-dom';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit,

    position: 'relative',
    display: 'flex',
  },
  commentRoot: {
    padding: theme.spacing.unit,
    marginRight: 72,
  },
  header: {
    display: 'flex',
    marginBottom: theme.spacing.unit,
  },
  name: {
    marginTop: -3,
    marginRight: 5,
  },
  vote: {
    width: 16,
    marginLeft: 8,
    marginRight: 4,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.54)',
  },
  voteBtn: {
    padding: 0,
    background: 'none',
    border: 'none',
    color: grey[300],
  },
  voteBtnActive: {
    padding: 0,
    background: 'none',
    border: 'none',
    color: theme.palette.primary.main,
  },
  warpMenu: {
    position: 'absolute',
    right: theme.spacing.unit,
    top: theme.spacing.unit,

    fontSize: 12,
    // top right bottom left
    // top+bottom left+right
    padding: '0',
    minWidth: 72,
    minHeight: 32,
  }
});

function CommentItem({ classes, comment, myCommentView, history }) {
  /*
    id: '1',
    writer: '김성빈',
    date: '7시간 전',
    likes: '1',
    liked: false,
    comment: '댓글 테스트 1'
  */
  /*
      id: '1',
      date: '7시간 전',
      likes: '1',
      targetNews: 1,
      content: '댓글 테스트 1'
  */
  const { id, writer, date, likes, liked, hated, content, targetNews } = comment;

  return (
    <div className={classes.root}>
      <div className={classes.vote}>
        <button
          disabled={myCommentView}
          className={liked ? classes.voteBtnActive : classes.voteBtn}
        >
          <i className="fas fa-lg fa-caret-up"></i>
        </button>
        <div>{likes}</div>
        <button
          disabled={myCommentView}
          className={hated ? classes.voteBtnActive : classes.voteBtn}>
          <i className="fas fa-lg fa-caret-down"></i>
        </button>
      </div>
      <div className={classes.commentRoot}>
        <header className={classes.header}>
          <Typography variant='subheading' className={classes.name}>{writer}</Typography>
          <Typography variant='caption'>{date}</Typography>
        </header>
        <Typography variant='subheading'>{content}</Typography>
      </div>
      {myCommentView ?
        <Button variant="outlined" className={classes.warpMenu} onClick={() => history.push(`/news/${targetNews}`)}>
          원문보기
        </Button>
        : null
      }
    </div >
  );
}

export default withStyles(styles)(withRouter(CommentItem));