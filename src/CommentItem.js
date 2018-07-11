import React from 'react';
import styled from 'styled-components';
import { Typography, Button, Collapse } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import { withRouter } from 'react-router-dom';

import DialogOwnerComponent from './DialogOwnerComponent';
import FaIconBtn from './FaIconBtn';
import AlertDialog from './AlertDialog';
import CommentReplyItem from './CommentReplyItem';

import { InputTextArea } from './CommonStyledComponent';
import theme from './ThemeConfig';
import FaIcon from './FaIcon';

const StyledCollapse = styled(Collapse)`
  ${({ collapsable, isCollapsed }) => collapsable && isCollapsed &&
    'box-shadow: inset 0 -5px 10px -5px lightgray'}
`;

const Root = styled.div`
  padding: ${theme.spacing.unit + 'px'};
  position: relative;
  display: flex;
  min-height: 80px;
`;

const VoteContainer = styled.div`
  width: 16px;
  margin-left: 8px;
  margin-right: 4px;
  text-align: center;
  color: rgba(0, 0, 0, 0.54);
`;

const VoteBtn = styled.button`
  padding: 0px;
  background: none;
  border: none;
  color: ${grey[300]};

  ${({ active }) => active && `
    color: ${theme.palette.primary.main};
  `}
`;

const CommentContainer = styled.div`
  padding: ${theme.spacing.unit + 'px'};
  margin-right: 72px;
  width: 90%;
`;

const CommentHeader = styled.header`
  display: flex;
  margin-bottom: ${theme.spacing.unit + 'px'};
`;

const NameTypo = styled(Typography)`
  && {
    margin-top: -3px;
    margin-right: 5px;
  }
`;

const RightTop = styled.div`
  position: absolute;
  right: ${theme.spacing.unit + 'px'};
  top: ${theme.spacing.unit + 'px'};
`;

const WrapMenuBtn = styled(Button)`
  && {
    font-size: 12px;
    padding: 0px;
    min-width: 72px;
    min-height: 32px;
  }
`;

const HelpMenuBtn = styled(Button)`
  && {
    color: gray;
    font-size: 12px;
    padding: 0px;
    min-width: 45px;
    min-height: 32px;
  }
`;

const AuthorMenu = styled.div`
  position: absolute;
  right: ${theme.spacing.unit + 'px'};
  bottom: ${theme.spacing.unit + 'px'};
`;

const EditBtn = styled(FaIconBtn)`
  && {
    margin: 0px;
    color: ${grey[500]};
    font-size: 16px;
    width: auto;
    height: auto;
    padding: 10px;
  }
`;

const CollapseBtn = styled(FaIconBtn)`
  && {
    width: 24px;
    height: 24px;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0px;
    right: 0px;

    ${({ isCollapsed }) => isCollapsed ?
    `
      font-size: 1rem;
      top: 72px;
    ` :
    `
      font-size: 0.8rem;
      bottom: 4px;
    `}
  }
`;

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

  componentDidMount() {
    if (!this.props.myCommentView) {
      this.setState({ collapsable: false });
      return;
    }
    // react-router로 페이지 이동 시 null 전달됨
    if (!this.ref) return;

    const { clientHeight } = this.ref;
    this.setState({ collapsable: clientHeight > 105, isCollapsed: clientHeight > 105 });
  }

  render() {
    const { dialogOpen: { accuse }, isEditing, isReplying, collapsable, isCollapsed, editText } = this.state;
    const { comment, myCommentView, history } = this.props;
    const { id, writer, date, likes, liked, hated, content, targetNews } = comment;

    const Component = myCommentView ? StyledCollapse : React.Fragment;
    const props = myCommentView ? {
      collapsable,
      isCollapsed,
      in: collapsable && !isCollapsed, // open
      collapsedHeight: '96px',
    } : null;

    return (
      <Component {...props}>
        <Root innerRef={ref => this.ref = ref}>

          <VoteContainer>
            <VoteBtn disabled={myCommentView} active={liked}>
              <FaIcon icon='lg-caret-up' />
            </VoteBtn>
            <div>{likes}</div>
            <VoteBtn disabled={myCommentView} active={hated}>
              <FaIcon icon='lg-caret-down' />
            </VoteBtn>
          </VoteContainer>

          <CommentContainer>
            <CommentHeader>
              <NameTypo variant='subheading'>{writer}</NameTypo>
              <Typography variant='caption'>{date}</Typography>
            </CommentHeader>
            {isEditing ?
              <InputTextArea
                onChange={this.handleInputChange}
                onFocus={this.handleOnTextAreaFocus}
                value={editText}
              />
              : <Typography variant='subheading'>{content}</Typography>
            }
          </CommentContainer>

          <RightTop>
            {myCommentView ?
              <WrapMenuBtn
                variant="outlined"
                onClick={() => history.push(`/news/${targetNews}`)}
              >
                원문보기
              </WrapMenuBtn>
              :
              <React.Fragment>
                <HelpMenuBtn onClick={this.toggleOpen('isReplying')}>답글</HelpMenuBtn>
                <HelpMenuBtn onClick={this.toggleDialog('accuse')}>신고</HelpMenuBtn>
              </React.Fragment>
            }
          </RightTop>

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

          <AuthorMenu>
            <EditBtn
              icon={isEditing ? 'check' : 'edit'}
              onlyIcon
              size='sm'
              onClick={isEditing ? this.handleSubmitBtnClick : this.handleEditBtnClick}
            />
            <EditBtn
              icon={isEditing ? 'times-circle' : 'trash'}
              onlyIcon
              size='sm'
              onClick={isEditing ? this.handleEditCancelBtnClick : null}
            />
          </AuthorMenu>

          {collapsable &&
            <CollapseBtn
              icon={`caret-${isCollapsed ? 'down' : 'up'}`}
              onlyIcon
              onClick={this.toggleOpen('isCollapsed')}
              isCollapsed={isCollapsed}
            />
          }
        </Root>

        {isReplying &&
          <CommentReplyItem
            writer={writer}
            date={date}
            id={id}
            handleCancel={this.toggleOpen('isReplying')}
          />
        }
      </Component>
    );
  }
}

export default withRouter(CommentItem);