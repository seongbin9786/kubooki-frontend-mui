import React, { Component } from 'react';
import { Typography, withStyles, Button } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import { withRouter } from 'react-router-dom';

import FaIconBtn from './FaIconBtn';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit,

    position: 'relative',
    display: 'flex',

    minHeight: 80,
  },
  commentRoot: {
    padding: theme.spacing.unit,
    marginRight: 72,

    width: '90%',
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
  },
  authorMenu: {
    position: 'absolute',
    right: theme.spacing.unit,
    bottom: theme.spacing.unit,
  },
  btn: {
    margin: 0,
    color: grey[500],
    fontSize: 16,
    width: 'auto',
    height: 'auto',
    padding: 10,
  },
  input: {
    color: '#555',
    border: 'none',
    resize: 'none',
    maxHeight: '100%',
    width: '100%',

    fontFamily: '"Roboto", sans-serif',
    display: 'block',
    fontSize: '1rem',
    boxSizing: 'border-box',
  },
});

//TODO: 수정, 삭제 버튼 눌렸을 때 처리
class CommentItem extends Component {
  state = {
    isEditing: false,
    editText: this.props.comment.content,
  }

  handleInputChange = event => this.setState({ editText: event.target.value });
  handleEditBtnClick = () => this.setState({ isEditing: true });
  handleEditCancelBtnClick = () => this.setState({ isEditing: false, editText: this.props.comment.content });
  handleSubmitBtnClick = () => this.setState({ isEditing: false });

  render() {
    const { isEditing, editText } = this.state;
    const { classes, comment, myCommentView, history } = this.props;
    const { id, writer, date, likes, liked, hated, content, targetNews } = comment;

    return (
      <React.Fragment>
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
            {isEditing ?
              <textarea
                className={classes.input}
                onChange={this.handleInputChange}
                value={console.log(editText) || editText}
              />
              : <Typography variant='subheading'>{content}</Typography>
            }
          </div>

          {myCommentView ?
            <Button variant="outlined" className={classes.warpMenu} onClick={() => history.push(`/news/${targetNews}`)}>
              원문보기
            </Button>
            : null
          }

          <div className={classes.authorMenu}>
            <FaIconBtn
              type={isEditing ? 'check' : 'edit'}
              onlyIcon
              sm
              className={classes.btn}
              onClick={isEditing ? this.handleSubmitBtnClick : this.handleEditBtnClick}
            />
            <FaIconBtn
              type={isEditing ? 'times-circle' : 'trash'}
              onlyIcon
              sm
              className={classes.btn}
              onClick={isEditing ? this.handleEditCancelBtnClick : null}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(withRouter(CommentItem));