import React, { Component } from 'react';
import { withStyles, TextField, Typography, Button, Grid, Checkbox, FormControlLabel, Collapse } from '@material-ui/core';

import DeleteIconBtn from './DeleteIconBtn';
import EventParticipantList from './EventParticipantList';
import EventParticipantAnswers from './EventParticipantAnswers';
import { paddingOneUnit, marginOneUnit, spaceBetween, alignChildrenRight } from './styles';
import inputList, { detailList } from './EventDetailConfig';
import QuillEditor from './QuillEditor';

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

class EventDetail extends Component {
  constructor(props) {
    super(props);

    const { eventDetail, eventManageDetail, eventParticipateDetail } = props;

    this.state = {
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

      // 관리자일 때만 이벤트 관리 데이터가 들어옴
      participateMode: Boolean(!eventParticipateDetail),
      manageMode: Boolean(eventManageDetail),

    };
  }

  handleChange = inputName => ({ target: { value } }) => this.setState({ [inputName]: value });

  handleQuillChange = value => this.setState({ content: value });

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

  componentDidUpdate(prevProps) {
    const { open: beforeOpen } = prevProps;
    const { open: afterOpen } = this.props;
    const { manageMode } = this.state;

    if (!beforeOpen && afterOpen) {
      setTimeout(() => {
        const title = document.getElementById('pageTitle');
        const input = document.getElementsByName(manageMode ? 'title' : 'q0')[0];
        window.scrollTo(0, title.getBoundingClientRect().top);
        input.focus();
      }, 300);
    }
  }

  renderField(field) {
    const { state } = this;
    const { classes } = this.props;
    const {
      label, name, value, onChange,
      show = true,
      disabled = false,
      shrink = false,
      Component = TextField,
      type = 'text',
      className = 'marginOneUnit',
    } = field;

    if (typeof show === 'function' && !show(state)) return;

    if (type === 'checkbox') {
      return (
        <FormControlLabel
          label={label}
          name={name}
          key={name}
          control={
            <Checkbox
              checked={value ? value(state) : this.state[name]}
              value={value ? value(state) : this.state[name]}
              disabled={typeof disabled === 'function' ? disabled(state) : disabled}
            />
          }
        />
      );
    }

    if (Component === QuillEditor) {
      return (
        <Component
          type={type}
          label={label}
          name={name}
          key={name}
          value={value ? value(state) : this.state[name]}
          onChange={typeof onChange === 'function' ? onChange(this) : this.handleChange(name)}
          className={classes[className]}
          disabled={typeof disabled === 'function' ? disabled(state) : disabled}
        />
      );
    }

    return (
      <Component
        type={type}
        label={label}
        name={name}
        key={name}
        value={value ? value(state) : this.state[name]}
        onChange={typeof onChange === 'function' ? onChange(this) : this.handleChange(name)}
        className={classes[className]}
        disabled={typeof disabled === 'function' ? disabled(state) : disabled}

        // QuilEditor에서는 받아들이지 못함
        InputLabelProps={shrink ? { shrink: true } : null}
        fullWidth
      />
    );
  }

  renderQAField(question, index) {
    return this.renderField({
      label: question,
      name: `q${index}`,
      shrink: true,
      value: state => state.answers[index],
      onChange: thisVar => thisVar.handleAnswerChange(index),
      show: state => state.participateMode,
    });
  }

  render() {
    const { classes, open } = this.props;
    const { title, questions, answers, participants, manageMode, participateMode } = this.state;
    const pageTitle = manageMode ? '이벤트 관리 상세' : (participateMode ? '아래 양식을 기록해주세요' : `나의 이벤트 참여: ${title}`);
    const usingCollapse = Boolean(open !== undefined);
    const Component = usingCollapse ? Collapse : React.Fragment;
    const collapseProps = usingCollapse ? {
      in: open,
      collapsedHeight: '0px'
    } : null;

    return (
      <Component {...collapseProps}>
        <div className={classes.header}>
          <Typography variant='display1' id='pageTitle'>{pageTitle}</Typography>
          {manageMode ? <DeleteIconBtn className={classes.headerBtn} /> : null}
        </div>

        <form>
          {inputList.map(input => this.renderField(input))}
          {questions.map((question, index) => this.renderQAField(question, index))}
          <div className={classes.btnGroup}>
            <Button color="primary" className={classes.marginOneUnit}>
              취소
            </Button>
            <Button color="primary" variant='raised' className={classes.marginOneUnit}>
              수정
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
                  수여
                </Button>
                <EventParticipantAnswers answers={answers} />
              </Grid>
            </Grid>
          </div >
          : null
        }
      </Component>
    );
  }
}

export default withStyles(styles)(EventDetail);