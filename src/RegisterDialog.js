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

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    width: '100%'
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

export default withStyles(styles)(class extends Component {
  state = {
    id: '',
    password: '',
    passwordAgain: '',
    name: '',
    college: '',
    identity: '',
  };

  componentDidMount() {
    setTimeout(() => document.getElementById('id').focus(), 300);
  }

  handleChange = inputName => ({ target: { value } }) =>
    this.setState({ [inputName]: value });

  render() {
    const { open, handleClose, onSubmit, classes } = this.props;
    const { id, password, passwordAgain, name, college, identity } = this.state;

    return (
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
        >
          <DialogTitle>회원가입</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              id="id"
              label="아이디"
              value={id}
              onChange={this.handleChange('id')}
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="password"
              label="비밀번호"
              value={password}
              onChange={this.handleChange('password')}
              type="password"
              fullWidth
            />
            <TextField
              margin="dense"
              label="비밀번호 확인"
              value={passwordAgain}
              onChange={this.handleChange('passwordAgain')}
              type="password"
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="이름"
              value={name}
              onChange={this.handleChange('name')}
              type="text"
              fullWidth
            />
            <FormControl className={classes.formControl}>
              <InputLabel>소속대학(소속교직)</InputLabel>
              <Select
                name="college"
                value={college}
                onChange={this.handleChange('college')}
              >
                <MenuItem value=""><em>선택해주세요...</em></MenuItem>
                <MenuItem value="융합교양대학">융합교양대학</MenuItem>
                <MenuItem value="휴면인재융합대학">휴면인재융합대학</MenuItem>
                <MenuItem value="지식정보서비스대학">지식정보서비스대학</MenuItem>
                <MenuItem value="융합과학대학">융합과학대학</MenuItem>
                <MenuItem value="창의공과대학">창의공과대학</MenuItem>
                <MenuItem value="관광문화대학">관광문화대학</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel>신분</InputLabel>
              <Select
                name="college"
                value={identity}
                onChange={this.handleChange('identity')}
              >
                <MenuItem value=""><em>선택해주세요...</em></MenuItem>
                <MenuItem value="학생">학생</MenuItem>
                <MenuItem value="교직원">교직원</MenuItem>
                <MenuItem value="학부모">학부모</MenuItem>
                <MenuItem value="기타">기타</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              취소
            </Button>
            <Button onClick={onSubmit} color="primary" variant='raised'>
              회원가입
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
});