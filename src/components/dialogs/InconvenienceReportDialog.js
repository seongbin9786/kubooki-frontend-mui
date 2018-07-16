import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, DialogActions, DialogContent } from '@material-ui/core';

import QuillEditor from '../inputs/QuillEditor';
import 'react-quill/dist/quill.snow.css'; // ES6

import FaIcon from '../FaIcon';
import ResponsiveDialog from '../../utils/ResponsiveDialog';
import FormComponent from '../../utils/FormComponent';

const styles = theme => ({
  root: {
    maxWidth: 1100,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between'
  },
});

const fields = [
  {
    label: '제목',
    name: 'title'
  },
  {
    Component: QuillEditor,
    label: '본문',
    name: 'content'
  },
];

export default withStyles(styles)(class extends FormComponent {
  state = {
    title: '',
    content: '',
  };

  render() {
    const { open, handleClose, onSubmit, classes } = this.props;

    return (
      <ResponsiveDialog
        open={open}
        handleClose={handleClose}
        title='불편 신고'
        autoFocus='title'
        confirmation
      >
        <DialogContent>
          {fields.map(input => this.renderField(input))}
        </DialogContent>
        <DialogActions className={classes.actions}>
          <Button onClick={handleClose} color="primary">
            <FaIcon icon='md-save' />&nbsp;&nbsp;임시저장
          </Button>
          <div>
            <Button onClick={handleClose} color="primary">
              취소
            </Button>
            <Button onClick={onSubmit} color="primary" variant='raised'>
              신고
            </Button>
          </div>
        </DialogActions>
      </ResponsiveDialog>
    );
  }
});