import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

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
  thumbnailContainer: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit,
  },
  uploadBtn: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    marginLeft: 2
  }
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

          <div className={classes.thumbnailContainer}>
            <InputLabel>섬네일</InputLabel>
            <br />
            <Button className={classes.uploadBtn} variant="raised" color="default">
              업로드&nbsp;<i className="fas fa-md fa-upload"></i>
            </Button>
            <br />
            <img
              style={{ height: 'auto', width: '100%' }}
              alt='섬네일'
              src={imgUrl}
            />
          </div>

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