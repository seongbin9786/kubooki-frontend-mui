import React from 'react';
import { Button, DialogActions, DialogContent } from '@material-ui/core';

import ResponsiveDialog from '../../utils/ResponsiveDialog';
import FormComponent from '../../utils/FormComponent';
import PasswordInput from '../inputs//PasswordInput';

export default class extends FormComponent {

  getFieldDefinitions = () => ({
    loginId: {
      label: '아이디',
    },
    password: {
      Component: PasswordInput,
      label: '비밀번호',
    }
  });

  render() {
    const { open, handleClose, onSubmit, onRegisterClick } = this.props;

    const fieldsInfo = this.renderFields();
    const hasErrors = fieldsInfo.some(field => field.error === true);
    const fieldsRendered = fieldsInfo.map(field => field.component);

    return (
      <div>
        <ResponsiveDialog
          open={open}
          handleClose={handleClose}
          autoFocus='loginId'
          title='로그인'
        >
          <DialogContent>
            {fieldsRendered}
          </DialogContent>
          <DialogActions style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button onClick={onRegisterClick} color="primary">
              회원가입
            </Button>
            <div>
              <Button onClick={handleClose} color="primary">
                취소
              </Button>
              <Button onClick={onSubmit} disabled={hasErrors} color="primary" variant='raised'>
                로그인
              </Button>
            </div>
          </DialogActions>
        </ResponsiveDialog>
      </div>
    );
  }
};
