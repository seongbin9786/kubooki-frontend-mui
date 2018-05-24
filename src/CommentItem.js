import React from 'react';
import { Typography, withStyles } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit,

    display: 'flex',
  },
  commentRoot: {
    padding: theme.spacing.unit,
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
});

function CommentItem({ classes, comment }) {

  /*
    id: '1',
    writer: '김성빈',
    date: '7시간 전',
    likes: '1',
    liked: false,
    comment: '댓글 테스트 1'
  */
  const { id, writer, date, likes, liked, hated, content } = comment;

  return (
    <div className={classes.root}>
      <div className={classes.vote}>
        <button className={liked ? classes.voteBtnActive : classes.voteBtn}><i className="fas fa-lg fa-caret-up"></i></button>
        <div>{likes}</div>
        <button className={hated ? classes.voteBtnActive : classes.voteBtn}><i className="fas fa-lg fa-caret-down"></i></button>
      </div>
      <div className={classes.commentRoot}>
        <header className={classes.header}>
          <Typography variant='subheading' className={classes.name}>{writer}</Typography>
          <Typography variant='caption'>{date}</Typography>
        </header>
        <Typography variant='subheading'>{content}</Typography>
      </div>
    </div>
  );
}

export default withStyles(styles)(CommentItem);