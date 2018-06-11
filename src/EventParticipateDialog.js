import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';

const styles = theme => ({
  root: {
    maxWidth: 1100,
  },
  formControl: {
    width: '100%'
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between'
  },
});

export default withStyles(styles)(class extends Component {
  constructor(props) {
    super(props);

    const { eventDetail, eventParticipateData } = props;
    this.state = {
      // 이벤트의 데이터
      title: '',
      startDate: '',
      endDate: '',
      resultDate: '',
      prize: '',
      questions: [
        '',
        '',
        '',
      ],
      ...eventDetail,

      // 이벤트 참여 데이터
      participateDate: '',
      answers: [
        '',
        '',
        '',
      ],
      wonPrize: false,
      myPrize: '',
      ...eventParticipateData,

      viewMode: Boolean(eventParticipateData),
    };
  }

  componentDidMount() {
    setTimeout(() => document.getElementById('q0').focus(), 300);
  }

  handleChange = inputName => ({ target: { value } }) =>
    this.setState({ [inputName]: value });

  handleAnswerChange = index => ({ target: { value } }) =>
    this.setState(
      ({ answers }) => ({ answers: answers.splice(index, 0, value) })
    );

  handleQuillChange = value =>
    this.setState({ content: value });

  render() {
    const { open, handleClose, onSubmit, classes } = this.props;
    const { title, questions, answers } = this.state;

    return (
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth='sm'
      >
        <DialogTitle>이벤트 참여: {title}</DialogTitle>
        <DialogContent>

          {questions.map((question, index) =>
            <TextField
              key={index}
              id={`q${index}`}
              name={`q${index}`}
              label={questions[index]}
              value={answers[index]}
              onChange={this.handleAnswerChange(index)}
              type="text"
              fullWidth
            />
          )}

        </DialogContent>
        <DialogActions className={classes.actions}>
          <Button onClick={handleClose} color="primary">
            취소
          </Button>
          <Button onClick={onSubmit} color="primary" variant='raised'>
            참여
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
});