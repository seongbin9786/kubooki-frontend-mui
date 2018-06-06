import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';

import QuillEditor from './QuillEditor';
import 'react-quill/dist/quill.snow.css'; // ES6

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
    title: '',
    content: '',
    newsId: this.props.newsId,
  };

  componentDidMount() {
    setTimeout(() => document.getElementById('title').focus(), 300);
  }

  handleChange = inputName => ({ target: { value } }) =>
    this.setState({ [inputName]: value });

  handleQuillChange = value =>
    this.setState({ content: value });

  render() {
    const { open, handleClose, onSubmit, classes } = this.props;
    const { title, content } = this.state;

    return (
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth='sm'
      >
        <DialogTitle>정정 요청</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            id="title"
            name="title"
            label="제목"
            value={title}
            onChange={this.handleChange('title')}
            type="text"
            fullWidth
          />

          <QuillEditor
            value={content}
            onChange={this.handleQuillChange}
          />

        </DialogContent>
        <DialogActions className={classes.actions}>
          <Button onClick={handleClose} color="primary">
            <i className="fas fa-md fa-save"></i>&nbsp;&nbsp;임시저장
          </Button>
          <div>
            <Button onClick={handleClose} color="primary">
              취소
            </Button>
            <Button onClick={onSubmit} color="primary" variant='raised'>
              작성
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    );
  }
});