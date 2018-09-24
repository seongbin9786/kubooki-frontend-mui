import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, DialogActions, DialogContent } from '@material-ui/core';

import FaIcon from '../FaIcon';

import 'react-quill/dist/quill.snow.css'; // ES6

import ResponsiveDialog from '../../utils/ResponsiveDialog';
import FormComponent from '../../utils/FormComponent';

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

export default withStyles(styles)(class extends FormComponent {

  getFieldDefinitions = () => ({
    title: {
      label: '제목',
      validate: this.validateByMinLength('제목', 10)
    },
    content: {
      Component: 'quill',
      label: '본문',
    },
  });

  onSubmit = f => f;

  render() {

    console.log('render!');

    const { category, open, handleClose, classes } = this.props;

    const fieldsInfo = this.renderFields();
    const hasErrors = fieldsInfo.some(field => field.error === true);
    const fieldsRendered = fieldsInfo.map(field => field.component);

    return (
      <ResponsiveDialog
        open={open}
        autoFocus='title'
        handleClose={handleClose}
        title={category + ' 작성'}
        confirmation
      >
        <DialogContent>
          {fieldsRendered}
        </DialogContent>
        <DialogActions className={classes.actions}>
          <Button onClick={handleClose} color="primary">
            <FaIcon icon='save' />&nbsp;&nbsp;임시저장
          </Button>
          <div>
            <Button onClick={handleClose} color="primary">
              취소
            </Button>
            <Button onClick={this.onSubmit} disabled={hasErrors} color="primary" variant='raised'>
              작성
            </Button>
          </div>
        </DialogActions>
      </ResponsiveDialog>
    );
  }
});