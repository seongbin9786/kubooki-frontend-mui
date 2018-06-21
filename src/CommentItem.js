import React from 'react';
import { Typography, withStyles, Button, Collapse } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import { withRouter } from 'react-router-dom';

import DialogOwnerComponent from './DialogOwnerComponent';
import FaIconBtn from './FaIconBtn';
import AlertDialog from './AlertDialog';
import CommentReplyItem from './CommentReplyItem';

import FaIcon from './FaIcon';
import { input } from './stylesComment';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit,

    position: 'relative',
    display: 'flex',
    minHeight: 80,
  },
  collapsed: {
    boxShadow: 'inset 0 -5px 10px -5px lightgray',
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
    extend: 'voteBtn',
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
  input,
  replyBtn: {
    marginLeft: 30,
  },
  collapseBtn: {
    width: 24,
    height: 24,

    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    left: 0,
    right: 0,
  },
  collapseUpBtn: {
    extend: 'collapseBtn',
    fontSize: '0.8rem',
    bottom: 4,
  },
  collapseDownBtn: {
    extend: 'collapseBtn',
    fontSize: '1rem',
    top: 72,
  }
});

//TODO: 수정, 삭제 버튼 눌렸을 때 처리
class CommentItem extends DialogOwnerComponent {
  state = {
    isEditing: false,
    isReplying: false,
    collapsable: false,
    isCollapsed: false,
    editText: this.props.comment.content,
    dialogOpen: {
      accuse: false,
    }
  }

  handleOnTextAreaFocus = event => {
    // textarea의 크기를 content 크기만큼 확장
    event.target.style.height = '1px';
    event.target.style.height = (25 + event.target.scrollHeight) + 'px';
  }

  handleInputChange = event => {
    this.handleOnTextAreaFocus(event);
    this.setState({ editText: event.target.value });
  }

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
    const { dialogOpen: { accuse }, isEditing, isReplying, collapsable, isCollapsed, editText } = this.state;
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
              <FaIcon icon='lg-caret-up' />
            </button>
            <div>{likes}</div>
            <button
              disabled={myCommentView}
              className={hated ? classes.voteBtnActive : classes.voteBtn}>
              <FaIcon icon='lg-caret-down' />
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
                onFocus={this.handleOnTextAreaFocus}
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
                <Button className={classes.helpMenu} onClick={this.toggleDialog('accuse')}>
                  신고
                </Button>
              </React.Fragment>
            }
          </div>

          <AlertDialog
            open={accuse}
            title='신고하기'
            content='"경기대학교 신입생들을 위한 새내기팁! 첫 번째, 통학버스와 고양이버스 안내" 기사 댓글에서 김성빈님을 신고하시겠습니까?'
            okText='네'
            notOkText='아니오'
            handleOk={this.toggleDialog('accuse')}
            handleNotOk={this.toggleDialog('accuse')}
            onClose={this.toggleDialog('accuse')}
          />

          <div className={classes.authorMenu}>
            <FaIconBtn
              icon={isEditing ? 'check' : 'edit'}
              onlyIcon
              size='sm'
              className={classes.btn}
              onClick={isEditing ? this.handleSubmitBtnClick : this.handleEditBtnClick}
            />
            <FaIconBtn
              icon={isEditing ? 'times-circle' : 'trash'}
              onlyIcon
              size='sm'
              className={classes.btn}
              onClick={isEditing ? this.handleEditCancelBtnClick : null}
            />
          </div>

          {collapsable
            ? <FaIconBtn
              icon={`caret-${isCollapsed ? 'down' : 'up'}`}
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