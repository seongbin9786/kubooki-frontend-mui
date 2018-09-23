import React from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import ResponsiveDialog from '../../utils/ResponsiveDialog';
import FormComponent from '../../utils/FormComponent';
import PasswordInput from '../inputs/PasswordInput';

export default class extends FormComponent {
  state = {
    registerId: '',
    password: '',
    passwordAgain: '',
    name: '',
    college: '',
    identity: '',
  };

  fields = [
    {
      label: '아이디',
      name: 'registerId',
      validate: this.validateByLength('아이디', 8)
    },
    {
      Component: PasswordInput,
      label: '비밀번호',
      name: 'password',
      validate: this.validateByLength('비밀번호', 8)
    },
    {
      Component: PasswordInput,
      label: '비밀번호 확인',
      name: 'passwordAgain',
      validate: this.validateByLength('비밀번호', 8)
    },
    {
      label: '이름',
      name: 'name',
      validate: this.validateByLength('이름', 2)
    },
    {
      label: '소속대학(소속교직)',
      type: 'select',
      name: 'college',
      menuList: [
        ['융합교양대학', '융합교양대학'],
        ['휴면인재융합대학', '휴면인재융합대학'],
        ['지식정보서비스대학', '지식정보서비스대학'],
        ['융합과학대학', '융합과학대학'],
        ['창의공과대학', '창의공과대학'],
        ['관광문화대학', '관광문화대학'],
      ]
    },
    {
      label: '신분',
      type: 'select',
      name: 'identity',
      menuList: [
        ['학생', '학생'],
        ['교직원', '교직원'],
        ['학부모', '학부모'],
        ['기타', '기타']
      ]
    }
  ];

  render() {
    const { open, handleClose, onSubmit } = this.props;

    const fieldsInfo = this.renderFields(this.fields);
    const hasErrors = fieldsInfo.some(field => field.error === true);
    const fieldsRendered = fieldsInfo.map(field => field.component);

    return (
      <div>
        <ResponsiveDialog
          open={open}
          handleClose={handleClose}
          autoFocus='registerId'
          title='회원가입'
        >
          <DialogContent>
            {fieldsRendered}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              취소
            </Button>
            <Button onClick={onSubmit} disabled={hasErrors} color="primary" variant='raised'>
              회원가입
            </Button>
          </DialogActions>
        </ResponsiveDialog>
      </div>
    );
  }
};