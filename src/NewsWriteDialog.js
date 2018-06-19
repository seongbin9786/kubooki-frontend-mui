import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, Select, DialogActions, DialogContent, FormControl, InputLabel, MenuItem } from '@material-ui/core';

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
    const { imgUrl, category } = this.state;

    return (
      <ResponsiveDialog
        open={open}
        handleClose={handleClose}
        title='기사 작성'
      >
        <DialogContent>
          {this.renderField({
            label: '제목',
            name: 'title'
          })}

          <FormControl className={classes.formControl}>
            <InputLabel>분류</InputLabel>
            <Select
              name="category"
              value={category}
              onChange={this.handleChange('category')}
            >
              <MenuItem value=""><em>선택해주세요...</em></MenuItem>
              <MenuItem value="경기소식">경기소식</MenuItem>
              <MenuItem value="기획연재">기획연재</MenuItem>
              <MenuItem value="경대피플">경대피플</MenuItem>
            </Select>
          </FormControl>

          {this.renderField({
            Component: QuillEditor,
            label: '본문',
            name: 'content'
          })}

          <ImagePreview name='섬네일' value={imgUrl} isForm />
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