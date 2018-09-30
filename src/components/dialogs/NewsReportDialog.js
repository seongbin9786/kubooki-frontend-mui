import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, DialogActions, DialogContent } from '@material-ui/core';

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

  render() {
    const { open, handleClose, onSubmit, classes } = this.props;

    const fieldsInfo = this.renderFields();
    const hasErrors = fieldsInfo.some(field => field.error === true);
    const fieldsRendered = fieldsInfo.map(field => field.component);

    return (
      <ResponsiveDialog
        open={open}
        handleClose={handleClose}
        title='기사 제보'
        autoFocus='title'
        confirmation
      >
        <DialogContent>
          {fieldsRendered}
        </DialogContent>
        <DialogActions className={classes.actions}>
          <Button onClick={handleClose} color="primary">
            <FaIcon icon='md-save' />&nbsp;&nbsp;임시저장
          </Button>
          <div>
            <Button onClick={handleClose} color="primary">
              취소
            </Button>
            <Button onClick={onSubmit} disabled={hasErrors} color="primary" variant='raised'>
              제보
            </Button>
          </div>
        </DialogActions>
      </ResponsiveDialog>
    );
  }
});