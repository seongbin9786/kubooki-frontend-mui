import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, DialogActions, DialogContent } from '@material-ui/core';

import 'react-quill/dist/quill.snow.css'; // ES6

import FaIcon from '../FaIcon';
import FormComponent from '../../utils/FormComponent';
import ResponsiveDialog from '../../utils/ResponsiveDialog';

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
    newsId: {
      label: '대상 기사의 ID',
      value: this.props.newsId,
    }
  });

  render() {
    const { open, handleClose, classes } = this.props;

    const fieldsInfo = this.renderFields();
    const hasErrors = fieldsInfo.some(field => field.error === true);
    const fieldsRendered = fieldsInfo.map(field => field.component);

    return (
      <ResponsiveDialog
        open={open}
        handleClose={handleClose}
        title='정정 요청'
        autoFocus='title'
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
            <Button onClick={this.handleSubmit} disabled={hasErrors} color="primary" variant='raised'>
              작성
            </Button>
          </div>
        </DialogActions>
      </ResponsiveDialog >
    );
  }
});