import React from 'react';
import { Button, DialogActions, DialogContent, Typography } from '@material-ui/core';

import ResponsiveDialog from '../../utils/ResponsiveDialog';
import FormComponent from '../../utils/FormComponent';
import PasswordInput from '../inputs//PasswordInput';
import styled from 'styled-components';

const SocialLoginButton = styled(Button)`
  min-width: 0px !important;
  padding: 2px !important;
`;

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

  handleSocialLogin = type => () => {
    this.props.handleSocialLogin(type)()
      .then(() => this.props.handleClose())
      .catch(() => alert('소셜 로그인 도중 오류가 발생했습니다.'));
  }

  render() {
    const { open, handleClose, onRegisterClick } = this.props;

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
            <div style={{ display: 'flex', marginTop: '20px', flexDirection: 'column' }}>
              <Typography>소셜 로그인</Typography>
              <div>
                <SocialLoginButton onClick={this.handleSocialLogin('FB')} >
                  <img src="/facebook.png" width="40px" />
                </SocialLoginButton>
                <SocialLoginButton onClick={this.handleSocialLogin('NAVER')}>
                  <img src="/naver.png" width="40px" />
                </SocialLoginButton>
                <SocialLoginButton onClick={this.handleSocialLogin('KAKAO')}>
                  <img src="/kakao.png" width="100px" />
                </SocialLoginButton>
              </div>
            </div>
          </DialogContent>
          <DialogActions style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button onClick={onRegisterClick} color="primary">
              회원가입
            </Button>
            <div>
              <Button onClick={handleClose} color="primary">
                취소
              </Button>
              <Button onClick={this.handleSubmit} disabled={hasErrors} color="primary" variant='raised'>
                로그인
              </Button>
            </div>
          </DialogActions>
        </ResponsiveDialog>
      </div>
    );
  }
};
