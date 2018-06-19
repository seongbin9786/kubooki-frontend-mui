import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, DialogActions, DialogContent } from '@material-ui/core';

import QuillEditor from './QuillEditor';
import 'react-quill/dist/quill.snow.css'; // ES6
import FaIcon from './FaIcon';
import ImagePreview from './ImagePreview';
import UploadBtn from './UploadBtn';
import ResponsiveDialog from './ResponsiveDialog';
import FormComponent from './FormComponent';

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
    label: '분류',
    type: 'select',
    name: 'category',
    menuList: [
      ['경기소식', '경기소식'],
      ['기획연재', '기획연재'],
      ['경대피플', '경대피플'],
    ]
  },
  {
    Component: QuillEditor,
    label: '본문',
    name: 'content'
  },
  {
    Component: ImagePreview,
    label: '섬네일',
    name: 'imgUrl',
    isForm: true,
  }
];

export default withStyles(styles)(class extends FormComponent {
  state = {
    title: '',
    content: '',
    category: '',
    // default image
    imgUrl: 'https://mikesmasterclasses.com/wp-content/uploads/2017/07/no-thumbnail.png',
  };

  componentDidMount() {
    setTimeout(() => document.getElementsByName('title')[0].focus(), 300);
  }

  render() {
    const { open, handleClose, onSubmit, classes } = this.props;

    return (
      <ResponsiveDialog
        open={open}
        handleClose={handleClose}
        title='기사 작성'
      >
        <DialogContent>
          {fields.map(input => this.renderField(input))}
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
            <Button onClick={onSubmit} color="primary" variant='raised'>
              작성
            </Button>
          </div>
        </DialogActions>
      </ResponsiveDialog>
    );
  }
});