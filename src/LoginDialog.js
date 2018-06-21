import React from 'react';
import { Button, DialogActions, DialogContent } from '@material-ui/core';

import ResponsiveDialog from './ResponsiveDialog';
import FormComponent from './FormComponent';
import PasswordInput from './PasswordInput';

const fields = [
  {
    label: '아이디',
    name: 'loginId'
  },
  {
    Component: PasswordInput,
    label: '비밀번호',
    name: 'password'
  }
];

export default class extends FormComponent {
  state = {
    loginId: '',
    password: '',
  };

  render() {
    const { open, handleClose, onSubmit, onRegisterClick } = this.props;

    return (
      <div>
        <ResponsiveDialog
          open={open}
          handleClose={handleClose}
          autoFocus='loginId'
          title='로그인'
        >
          <DialogContent>
            {fields.map(input => this.renderField(input))}
          </DialogContent>
          <DialogActions style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button onClick={onRegisterClick} color="primary">
              회원가입
            </Button>
            <div>
              <Button onClick={handleClose} color="primary">
                취소
              </Button>
              <Button onClick={onSubmit} color="primary" variant='raised'>
                로그인
              </Button>
            </div>
          </DialogActions>
        </ResponsiveDialog>
      </div>
    );
  }
};
