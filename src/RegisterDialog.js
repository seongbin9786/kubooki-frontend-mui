import React from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import ResponsiveDialog from './ResponsiveDialog';
import FormComponent from './FormComponent';
import PasswordInput from './PasswordInput';

const fields = [
  {
    label: '아이디',
    name: 'registerId',
  },
  {
    Component: PasswordInput,
    label: '비밀번호',
    name: 'password'
  },
  {
    Component: PasswordInput,
    label: '비밀번호 확인',
    name: 'passwordAgain',
  },
  {
    label: '이름',
    name: 'name',
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

export default class extends FormComponent {
  state = {
    registerId: '',
    password: '',
    passwordAgain: '',
    name: '',
    college: '',
    identity: '',
  };

  render() {
    const { open, handleClose, onSubmit } = this.props;

    return (
      <div>
        <ResponsiveDialog
          open={open}
          handleClose={handleClose}
          autoFocus='registerId'
          title='회원가입'
        >
          <DialogContent>
            {fields.map(input => this.renderField(input))}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              취소
            </Button>
            <Button onClick={onSubmit} color="primary" variant='raised'>
              회원가입
            </Button>
          </DialogActions>
        </ResponsiveDialog>
      </div>
    );
  }
};