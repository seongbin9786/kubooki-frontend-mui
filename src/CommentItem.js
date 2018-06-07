import React, { Component } from 'react';
import classNames from 'classnames';
import { Typography, withStyles, Button, Collapse } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import { withRouter } from 'react-router-dom';

import FaIconBtn from './FaIconBtn';
import AlertDialog from './AlerDialog';
import CommentReplyItem from './CommentReplyItem';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit,

    position: 'relative',
    display: 'flex',
    minHeight: 80,
  },
  collapsed: {
    boxShadow: 'inset 0 -10px 40px -10px lightgray',
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
  rightTop: {
    position: 'absolute',
    right: theme.spacing.unit,
    top: theme.spacing.unit,
  },
  warpMenu: {
    fontSize: 12,
    // top right bottom left
    // top+bottom left+right
    padding: '0',
    minWidth: 72,
    minHeight: 32,
  },
  helpMenu: {
    color: 'gray',
    fontSize: 12,
    padding: '0',
    minWidth: 45,
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
  replyBtn: {
    marginLeft: 30,
  },
  collapseUpBtn: {
    fontSize: '0.8rem',
    width: 24,
    height: 24,

    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    left: 0,
    right: 0,
    bottom: 4,
  },
  collapseDownBtn: {
    fontSize: '1rem',
    width: 24,
    height: 24,

    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    left: 0,
    right: 0,
    top: 72,
  }
});

//TODO: 수정, 삭제 버튼 눌렸을 때 처리
class CommentItem extends Component {
  state = {
    isAskingAccuse: false,
    isEditing: false,
    isReplying: false,
    collapsable: false,
    isCollapsed: false,
    editText: this.props.comment.content,
  }

  handleInputChange = event => this.setState({ editText: event.target.value });
  handleEditBtnClick = () => this.setState({ isEditing: true });
  handleEditCancelBtnClick = () => this.setState({ isEditing: false, editText: this.props.comment.content });
  handleSubmitBtnClick = () => this.setState({ isEditing: false });

  toggleAccuse = () => this.setState(({ isAskingAccuse }) => ({ isAskingAccuse: !isAskingAccuse }));
  toggleOpen = name => () => this.setState({ [name]: !this.state[name] });

  handleRef = ref => {
    if (!this.props.myCommentView) {
      this.setState({ collapsable: false });
      return;
    }
    // react-router로 페이지 이동 시 null 전달됨
    if (!ref) return;

    const { clientHeight } = ref;
    this.setState({ collapsable: clientHeight > 105, isCollapsed: clientHeight > 105 });
  }

  render() {
    const { isAskingAccuse, isEditing, isReplying, collapsable, isCollapsed, editText } = this.state;
    const { classes, comment, myCommentView, history } = this.props;
    const { id, writer, date, likes, liked, hated, content, targetNews } = comment;

    const Component = myCommentView ? Collapse : React.Fragment;
    const props = myCommentView ? {
      in: collapsable && !isCollapsed, // open
      collapsedHeight: '96px',
      className: collapsable && isCollapsed ? classes.collapsed : null
    } : null;

    return (
      <Component {...props}>
        <div
          className={classes.root}
          ref={this.handleRef}
        >

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
                value={editText}
              />
              : <Typography variant='subheading'>{content}</Typography>
            }
          </div>

          <div className={classes.rightTop}>
            {myCommentView ?
              <Button variant="outlined" className={classes.warpMenu} onClick={() => history.push(`/news/${targetNews}`)}>
                원문보기
              </Button>
              :
              <React.Fragment>
                <Button className={classes.helpMenu} onClick={this.toggleOpen('isReplying')}>
                  답글
                </Button>
                <Button className={classes.helpMenu} onClick={this.toggleOpen('isAskingAccuse')}>
                  신고
                </Button>
              </React.Fragment>
            }
          </div>

          <AlertDialog
            open={isAskingAccuse}
            title='신고하기'
            content='"경기대학교 신입생들을 위한 새내기팁! 첫 번째, 통학버스와 고양이버스 안내" 기사 댓글에서 김성빈님을 신고하시겠습니까?'
            okText='네'
            notOkText='아니오'
            handleOk={this.toggleOpen('isAskingAccuse')}
            handleNotOk={this.toggleOpen('isAskingAccuse')}
            onClose={this.toggleOpen('isAskingAccuse')}
          />

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
          {console.log(this.state) || collapsable
            ? <FaIconBtn
              type={`caret-${isCollapsed ? 'down' : 'up'}`}
              onlyIcon
              className={classes[`collapse${isCollapsed ? 'Down' : 'Up'}Btn`]}
              onClick={this.toggleOpen('isCollapsed')}
            />
            : null
          }
        </div>
        {isReplying ?
          <CommentReplyItem
            writer={writer}
            date={date}
            id={id}
            handleCancel={this.toggleOpen('isReplying')}
          />
          : null
        }
      </Component>
    );
  }
}

export default withStyles(styles)(withRouter(CommentItem));