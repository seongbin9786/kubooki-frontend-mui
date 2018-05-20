import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class extends Component {
  state = {
    id: '',
    password: '',
  };

  handleChange = inputName => ({ target: { value } }) =>
    this.setState({ [inputName]: value });

  render() {
    const { open, handleClose, onSubmit, onRegisterClick } = this.props;
    const { id, password } = this.state;

    setTimeout(() => document.getElementById('id').focus(), 300);

    return (
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
        >
          <DialogTitle>로그인</DialogTitle>
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
          </DialogContent>
          <DialogActions>
            <Button onClick={onRegisterClick} color="primary">
              아이디가 없으신가요? 회원가입
            </Button>
            <Button onClick={handleClose} color="primary">
              취소
            </Button>
            <Button onClick={onSubmit} color="primary" variant='raised'>
              로그인
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
