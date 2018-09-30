import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, DialogActions, DialogContent } from '@material-ui/core';

import 'react-quill/dist/quill.snow.css'; // ES6

import FaIcon from '../FaIcon';
import ImagePreview from '../inputs/ImagePreview';
import UploadBtn from '../buttons/UploadBtn';
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
    category: {
      label: '분류',
      type: 'select',
      menuList: [
        ['경기소식', '경기소식'],
        ['기획연재', '기획연재'],
        ['경대피플', '경대피플'],
      ],
      validate: this.validateNotNull
    },
    content: {
      Component: 'quill',
      label: '본문',
    },
    imgUrl: {
      Component: ImagePreview,
      label: '섬네일',
      isForm: true,
      value: '/no-image.png'
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
        title='기사 작성'
        autoFocus='title'
        confirmation
      >
        <DialogContent>
          {fieldsRendered}
          <UploadBtn btnStr='업로드' />
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
      </ResponsiveDialog>
    );
  }
});