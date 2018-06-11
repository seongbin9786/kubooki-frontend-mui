import React, { Component } from 'react';
import { withStyles, TextField, Typography, Button, Grid, Checkbox, FormControlLabel } from '@material-ui/core';

import QuillEditor from './QuillEditor';
import DeleteIconBtn from './DeleteIconBtn';
import EventParticipantList from './EventParticipantList';
import EventParticipantAnswers from './EventParticipantAnswers';

const styles = {
  root: {
    // GridListTemplate 때문에
    marginTop: -80,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  headerBtn: {
    marginLeft: 8,
  },
  input: {
    margin: 8,
  },
  btnGroup: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  btn: {
    margin: 8,
  },
  grid: {
    padding: 8,
  },
  listContainer: {
    border: '1px solid lightgray',
    borderRadius: 5,
    padding: 0,
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  awardBtn: {
    margin: 8,
  },
  spaceBetween: {
    display: 'flex',
    justifyContent: 'space-between',
  },
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
      manageMode: Boolean(eventManageDetail),

    };
  }

  handleChange = inputName => ({ target: { value } }) =>
    this.setState({ [inputName]: value });

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

  handleQuillChange = value =>
    this.setState({ content: value });

  render() {
    const { classes } = this.props;
    const {
      // 이벤트 표시 데이터
      title, startDate, endDate, resultDate, prize, questions,

      // 이벤트 참여 데이터
      participant, answerDate, answers, wonPrize, myPrize,

      // 이벤트 관리 데이터
      content, views, likes, participants, noShowCount, priority,

      // 관리자 모드 여부
      manageMode
    } = this.state;
    const { name } = participant;

    return (
      <div className={classes.root}>
        <div className={classes.header}>
          <Typography variant='display1'>{manageMode ? '이벤트 관리 상세' : `나의 이벤트 참여: ${title}`}</Typography>
          {manageMode ? <DeleteIconBtn className={classes.headerBtn} /> : null}
        </div>

        <form>
          {manageMode ?
            <React.Fragment>
              <TextField
                label="조회수"
                type="number"
                value={views}
                className={classes.input}
                disabled
              />

              <TextField
                label="좋아요"
                type="number"
                value={likes}
                className={classes.input}
                disabled
              />

              <TextField
                label="참여인원"
                type="number"
                value={participants.length}
                className={classes.input}
                disabled
              />

              <TextField
                label="다시 보지 않기 수"
                type="number"
                value={noShowCount}
                className={classes.input}
                disabled
              />

              <TextField
                label="우선순위"
                type="number"
                value={priority}
                className={classes.input}
                disabled
              />

              <br />
            </React.Fragment>
            : null
          }

          <TextField
            id="title"
            name="title"
            label="제목"
            value={title}
            onChange={this.handleChange('title')}
            type="text"
            fullWidth
            className={classes.input}
            disabled={!manageMode}
          />

          <TextField
            id="startDate"
            label="시작날짜"
            type="date"
            value={startDate}
            onChange={this.handleChange('startDate')}
            className={classes.input}
            InputLabelProps={{
              shrink: true,
            }}
            disabled={!manageMode}
          />

          <TextField
            id="endDate"
            label="종료날짜"
            type="date"
            value={endDate}
            onChange={this.handleChange('endDate')}
            className={classes.input}
            InputLabelProps={{
              shrink: true,
            }}
            disabled={!manageMode}
          />

          <TextField
            id="resultDate"
            label="당첨자 발표일"
            type="date"
            value={resultDate}
            onChange={this.handleChange('resultDate')}
            className={classes.input}
            InputLabelProps={{
              shrink: true,
            }}
            disabled={!manageMode}
          />

          <TextField
            id="prize"
            label="상품"
            type="text"
            value={prize}
            onChange={this.handleChange('prize')}
            className={classes.input}
            disabled={!manageMode}
          />

          {!manageMode ?
            <React.Fragment>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={wonPrize}
                    value={wonPrize}
                    disabled
                  />
                }
                label="당첨 여부"
              />

              <TextField
                id="myPrize"
                label="내가 받은 상품"
                type="text"
                value={myPrize}
                onChange={this.handleChange('myPrize')}
                className={classes.input}
                disabled={!manageMode}
              />

              {!manageMode && questions.map((question, index) =>
                <TextField
                  key={index}
                  type="text"
                  id={`q${index}`}
                  name={`q${index}`}
                  label={question}
                  value={answers[index]}
                  onChange={this.handleAnswerChange(index)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                />
              )}
            </React.Fragment>
            : null
          }

          {manageMode ?
            <QuillEditor
              value={content}
              onChange={this.handleQuillChange}
              className={classes.input}
            />
            : null
          }

          <div className={classes.btnGroup}>
            <Button color="primary" className={classes.btn}>
              취소
            </Button>
            <Button color="primary" variant='raised' className={classes.btn}>
              수정
            </Button>
          </div>
        </form>

        {manageMode ?
          <div className={classes.participants}>
            <Grid container>

              <Grid item xs={12} md={6} className={classes.grid}>
                <EventParticipantList participants={participants} />
              </Grid>

              <Grid item xs={12} md={6} className={classes.grid}>
                <Typography variant='title'>이벤트 참여자 상세</Typography>

                <div className={classes.spaceBetween}>
                  <div>
                    <TextField
                      label="이름"
                      type="text"
                      value={name}
                      className={classes.input}
                      disabled
                    />

                    <TextField
                      label="응답날짜"
                      type="date"
                      value={answerDate}
                      className={classes.input}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      disabled
                    />
                  </div>

                  <Button variant='raised' color='primary' className={classes.awardBtn}>수여</Button>
                </div>

                <EventParticipantAnswers answers={answers} />
              </Grid>

            </Grid>
          </div >
          : null
        }
      </div >
    );
  }
}

export default withStyles(styles)(EventDetail);