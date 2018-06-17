import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, TextField, Select, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem } from '@material-ui/core';

import QuillEditor from './QuillEditor';
import 'react-quill/dist/quill.snow.css'; // ES6
import FaIcon from './FaIcon';
import ImagePreview from './ImagePreview';
import UploadBtn from './UploadBtn';

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
    category: '',
    // default image
    imgUrl: 'https://mikesmasterclasses.com/wp-content/uploads/2017/07/no-thumbnail.png',
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
    const { title, content, imgUrl, category } = this.state;

    return (
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth='sm'
      >
        <DialogTitle>기사 작성</DialogTitle>
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

          <QuillEditor
            value={content}
            onChange={this.handleQuillChange}
          />

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
      </Dialog>
    );
  }
});