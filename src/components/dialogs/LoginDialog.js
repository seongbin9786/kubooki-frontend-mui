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

const SocialLoginContainer = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
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

  render() {
    const { open, handleClose, onRegisterClick, handleSocialLogin } = this.props;

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
            <SocialLoginContainer>
              <Typography>소셜 로그인</Typography>
              <div>
                <SocialLoginButton onClick={handleSocialLogin('FB')} >
                  <img src="/facebook.png" width="40px" alt="FB Login" />
                </SocialLoginButton>
                <SocialLoginButton onClick={handleSocialLogin('NAVER')}>
                  <img src="/naver.png" width="40px" alt="Naver Login" />
                </SocialLoginButton>
                <SocialLoginButton onClick={handleSocialLogin('KAKAO')}>
                  <img src="/kakao.png" width="100px" alt="Kakao Login" />
                </SocialLoginButton>
              </div>
            </SocialLoginContainer>
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
