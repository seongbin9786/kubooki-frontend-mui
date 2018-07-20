import React from 'react';
import { withStyles, Typography, Button, Grid, Collapse } from '@material-ui/core';

import DeleteIconBtn from '../components/buttons/DeleteIconBtn';
import EventParticipantList from './EventParticipantList';
import EventParticipantAnswers from '../components/EventParticipantAnswers';
import { paddingOneUnit, marginOneUnit, spaceBetween, alignChildrenRight } from '../styles/styles';
import inputList, { detailList } from '../configs/EventDetailConfig';
import FormComponent from '../utils/FormComponent';

const styles = {
  '@global': {
    body: {
      'scroll-behavior': 'smooth',
    }
  },
  header: {
    ...spaceBetween,
    marginBottom: 30,
  },
  headerBtn: {
    marginLeft: 8,
  },
  btnGroup: {
    ...alignChildrenRight,
    marginBottom: 60,
  },
  listContainer: {
    border: '1px solid lightgray',
    borderRadius: 5,
    padding: 0,
  },
  paddingOneUnit,
  marginOneUnit,
};

/*
  상속으로 문제를 해결해야 할 듯
  템플릿 메서드 패턴 사용
*/
class EventDetail extends FormComponent {
  state = {};

  // 재사용
  focusOnOpen() {
    const { createMode, manageMode } = this.state;

    setTimeout(() => {
      const pageTitle = document.getElementById('pageTitle');
      window.scrollTo(0, pageTitle.getBoundingClientRect().top);

      const input = document.getElementsByName(manageMode || createMode ? 'title' : 'q0')[0];
      input.focus();
    }, 300);
  }

  // 필요한 정보만 사용하도록
  static getDerivedStateFromProps(nextProps, prevState) {
    const { editMode, eventDetail, eventManageDetail, eventParticipateDetail } = nextProps;

    const nextState = {
      ...prevState,

      // 이벤트 표시 (공통) 데이터
      title: '',
      startDate: '',
      endDate: '',
      resultDate: '',
      prize: '',
      questions: [],
      ...eventDetail,

      // 이벤트 참여 (현재 선택된 참여하는 사람) 데이터
      participant: {},
      answerDate: '',
      answers: [],
      wonPrize: false,
      myPrize: '',
      ...eventParticipateDetail,

      // 이벤트 관리 (관리 페이지에서 필요한 정보) 데이터
      // 관리자 Only
      content: '',
      views: 0,
      likes: 0,
      participants: [],
      noShowCount: 0,
      priority: -1,
      ...eventManageDetail,

      // 모드 설정
      participateMode: !eventParticipateDetail && eventDetail,
      participateEditMode: eventParticipateDetail && editMode,
      manageMode: eventManageDetail,
      createMode: !eventDetail,
    };

    const { participateMode, participateEditMode, manageMode, createMode } = nextState;
    console.log(participateMode, participateEditMode, manageMode, createMode);

    return nextState;
  }

  // 재사용
  componentDidUpdate(prevProps) {
    const { open: beforeOpen, createMode: beforeCreate } = prevProps;
    const { open: afterOpen } = this.props;
    const { createMode } = this.state;

    if ((!beforeOpen && afterOpen) || (!beforeCreate && createMode)) {
      this.focusOnOpen();
    }
  }

  // 재사용
  handleAnswerChange = index => ({ target: { value } }) => {
    this.setState(
      ({ answers }) => ({
        answers: [
          ...answers.slice(0, index),
          value,
          ...answers.slice(index + 1),
        ]
      })
    );
  }

  // 재사용
  renderQAField(question, index) {
    return this.renderField({
      label: question,
      name: `q${index}`,
      shrink: true,
      value: state => state.answers[index],
      onChange: () => this.handleAnswerChange(index),
      show: state => state.participateMode || state.participateEditMode
    });
  }

  // 템플릿 메소드
  getButtonTitle() {
    const { manageMode, createMode, participateMode, participateEditMode } = this.state;
    if (participateEditMode || manageMode) return '수정';
    if (participateMode) return '참여';
    if (createMode) return '생성';
  }

  // 템플릿 메소드
  getPageTitle() {
    const { manageMode, createMode, participateMode, participateEditMode } = this.state;
    if (participateEditMode) return '이벤트 참여 정보 수정하기';
    if (participateMode) return '아래 양식을 기록해주세요';
    if (createMode) return '이벤트 생성하기';
    if (manageMode) return '이벤트 관리 상세';
  }

  // 재사용 - 템플릿 메소드를 활용
  render() {
    const { classes, open } = this.props;
    const { questions, answers, participants, manageMode } = this.state;
    const pageTitle = this.getPageTitle();
    const buttonTitle = this.getButtonTitle();

    // _render() 호출해야 할 듯
    // 1. Collapse/pageTitle/buttonTitle 등 항상 나오는 부분은 render()에 포함
    // 2. renderHeader 템플릿 메소드로 Typo 말고 추가 엘리먼트도 렌더링
    // 3. 나머지 부분은 _render()에서 알아서   
    return (
      <Collapse in={open} collapsedHeight='0px'>
        <div className={classes.header}>
          <Typography variant='display1' id='pageTitle'>{pageTitle}</Typography>
          {manageMode ? <DeleteIconBtn className={classes.headerBtn} /> : null}
        </div>

        <form>
          {inputList.map(input => this.renderField(input))}
          {questions && questions.map((question, index) => this.renderQAField(question, index))}
          <div className={classes.btnGroup}>
            <Button color="primary" className={classes.marginOneUnit}>
              취소
            </Button>
            <Button color="primary" variant='raised' className={classes.marginOneUnit}>
              {buttonTitle}
            </Button>
          </div>
        </form>

        {manageMode ?
          <div className={classes.participants}>
            <Grid container>
              <Grid item xs={12} md={6} className={classes.paddingOneUnit}>
                <EventParticipantList participants={participants} />
              </Grid>
              <Grid item xs={12} md={6} className={classes.paddingOneUnit}>
                <Typography variant='title'>이벤트 참여자 상세</Typography>
                {detailList.map(input => this.renderField(input))}
                <Button variant='raised' color='primary' className={classes.marginOneUnit}>
                  보상 지급하기
                </Button>
                <EventParticipantAnswers answers={answers} />
              </Grid>
            </Grid>
          </div >
          : null
        }
      </Collapse>
    );
  }
}

export default withStyles(styles)(EventDetail);