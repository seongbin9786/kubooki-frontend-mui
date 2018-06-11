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
  state = {
    q1: '',
    q2: '',
  };

  componentDidMount() {
    setTimeout(() => document.getElementById('q1').focus(), 300);
  }

  handleChange = inputName => ({ target: { value } }) =>
    this.setState({ [inputName]: value });

  handleQuillChange = value =>
    this.setState({ content: value });

  render() {
    const { open, handleClose, onSubmit, classes } = this.props;
    const { q1, q2 } = this.state;

    return (
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth='sm'
      >
        <DialogTitle>이벤트 참여</DialogTitle>
        <DialogContent>

          <TextField
            margin="dense"
            id="q1"
            name="q1"
            label="Q. 질문 1"
            value={q1}
            onChange={this.handleChange('q1')}
            type="text"
            fullWidth
          />

          <TextField
            margin="dense"
            id="q2"
            name="q2"
            label="Q. 질문 2"
            value={q2}
            onChange={this.handleChange('q2')}
            type="text"
            fullWidth
          />

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