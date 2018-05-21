import React from 'react';
import { Typography, Button, Paper, withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%',
    minHeight: '110px',
    marginTop: '40px',
    display: 'flex',
  },
  input: {
    color: '#555',
    border: 'none',
    resize: 'none',
    width: '100%',
    maxHeight: '100%',

    fontFamily: '"Roboto", sans-serif',
    display: 'block',
    fontSize: '1rem',
    boxSizing: 'border-box',
    marginTop: theme.spacing.unit,
    padding: theme.spacing.unit * 2,
  },
  submitBtn: {
    fontSize: '1rem',
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 2,
  },
  flex: {
    width: '100%',
    boxSizing: 'border-box',
    padding: theme.spacing.unit * 2,
  }
});

/*
  TODO 1: submitBtn의 onClick 구현하기
  TODO 2: 비 로그인 시 
*/
function CommentList({ classes, user }) {

  return (
    <Paper
      elevation={1}
      className={classes.root}
    >
      <div className={classes.flex}>
        <Typography
          variant='title'
        >
          {user.name}
        </Typography>
        <textarea
          className={classes.input}
          placeholder={user ? '주제와 무관한 댓글, 타인의 권리를 침해하거나 명예를 훼손하는 게시물은 제재를 받을 수 있습니다' : '로그인하고 댓글을 입력해보세요'}
        />
      </div>

      <Button
        color="primary"
        variant="raised"
        className={classes.submitBtn}
      >
        <i className="fas fa-lg fa-comments"></i>
      </Button>
    </Paper>
  );
}

export default withStyles(styles)(CommentList);