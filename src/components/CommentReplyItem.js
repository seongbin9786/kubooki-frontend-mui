import React, { Component } from 'react';
import { Typography, withStyles, Button, Divider } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

import FaIcon from './FaIcon';
import { InputTextArea } from '../styles/CommonStyledComponent';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit,

    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    minHeight: 80,
  },
  commentRoot: {
    padding: theme.spacing.unit,
    marginTop: 8,
    marginLeft: 20, // 답글이므로 여백 필요
  },
  row: {
    display: 'flex',
    marginBottom: theme.spacing.unit,
  },
  name: {
    marginTop: -4,
    marginRight: 4,
  },
  replyBtn: {
    marginRight: 4,
    color: theme.palette.primary.main,
  },
  btn: {
    minWidth: 48,
    marginLeft: 4,
    padding: 0,
    fontSize: '0.7rem',
  },
});

//TODO: 수정, 삭제 버튼 눌렸을 때 처리
class CommentItem extends Component {
  state = {
    isEditing: false,
    editText: '',
  }

  handleInputChange = event => this.setState({ editText: event.target.value });
  handleEditBtnClick = () => this.setState({ isEditing: true });
  handleSubmitBtnClick = () => this.setState({ isEditing: false });

  componentDidMount() {
    const { id } = this.props;
    document.getElementById('reply-to-' + id).focus();
  }

  render() {
    const { editText } = this.state;
    const { classes, id, writer, handleCancel } = this.props;

    return (
      <div className={classes.root}>
        <Divider />
        <div>
          <div className={classes.commentRoot}>
            <header className={classes.row}>
              <FaIcon icon='reply' className={classes.replyBtn} />
              <Typography variant='subheading' className={classes.name}>{writer}</Typography>
            </header>
            <div className={classes.row}>
              <InputTextArea
                id={'reply-to-' + id}
                placeholder='주제와 무관한 댓글, 타인의 권리를 침해하거나 명예를 훼손하는 게시물은 제재를 받을 수 있습니다'
                onChange={this.handleInputChange}
                value={editText}
              />

              <Button
                variant='raised'
                color='primary'
                className={classes.btn}
                onClick={handleCancel}
              >
                작성
              </Button>

              <Button
                color='default'
                className={classes.btn}
                onClick={handleCancel}
              >
                취소
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(CommentItem));